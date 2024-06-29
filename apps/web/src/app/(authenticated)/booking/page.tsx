'use client'

import { useEffect, useState } from 'react'
import { Typography, Button, List, Card, Row, Col, Space } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function BookingPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [facility, setFacility] = useState<Model.Facility | null>(null)
  const [bookings, setBookings] = useState<Model.Booking[]>([])

  useEffect(() => {
    const fetchFacility = async () => {
      try {
        const facilityData = await Api.Facility.findOne(params.facilityId, {
          includes: ['bookings', 'bookings.user'],
        })
        setFacility(facilityData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch facility data', { variant: 'error' })
      }
    }

    const fetchBookings = async () => {
      try {
        const bookingsData = await Api.Booking.findMany({
          includes: ['user', 'facility'],
        })
        setBookings(bookingsData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch bookings', { variant: 'error' })
      }
    }

    fetchFacility()
    fetchBookings()
  }, [params.facilityId])

  const handleBookingRequest = async () => {
    if (!userId || !facility) return

    try {
      const newBooking = await Api.Booking.createOneByUserId(userId, {
        status: 'pending',
        bookingDate: dayjs().format('YYYY-MM-DD'),
        price: facility.price,
        facilityId: facility.id,
      })
      setBookings([...bookings, newBooking])
      enqueueSnackbar('Booking request sent successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to send booking request', { variant: 'error' })
    }
  }

  const handleApproveBooking = async (bookingId: string) => {
    try {
      const updatedBooking = await Api.Booking.updateOne(bookingId, {
        status: 'approved',
      })
      setBookings(
        bookings.map(booking =>
          booking.id === bookingId ? updatedBooking : booking,
        ),
      )
      enqueueSnackbar('Booking approved', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to approve booking', { variant: 'error' })
    }
  }

  const handleDenyBooking = async (bookingId: string) => {
    try {
      const updatedBooking = await Api.Booking.updateOne(bookingId, {
        status: 'denied',
      })
      setBookings(
        bookings.map(booking =>
          booking.id === bookingId ? updatedBooking : booking,
        ),
      )
      enqueueSnackbar('Booking denied', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to deny booking', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Booking Page</Title>
      <Paragraph>
        As a user, you can send booking requests for a sports facility. As an
        admin, you can approve or deny booking requests.
      </Paragraph>
      {facility && (
        <Card title={facility.name} bordered={false}>
          <Paragraph>{facility.description}</Paragraph>
          <Text strong>Price: ${facility.price}</Text>
          <Button
            type="primary"
            onClick={handleBookingRequest}
            style={{ marginTop: '16px' }}
          >
            Send Booking Request
          </Button>
        </Card>
      )}
      <Title level={3} style={{ marginTop: '24px' }}>
        Booking Requests
      </Title>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={bookings}
        renderItem={booking => (
          <List.Item>
            <Card title={`Booking by ${booking.user?.name}`} bordered={false}>
              <Row>
                <Col span={12}>
                  <Text>
                    Booking Date:{' '}
                    {dayjs(booking.bookingDate).format('YYYY-MM-DD')}
                  </Text>
                </Col>
                <Col span={12}>
                  <Text>Status: {booking.status}</Text>
                </Col>
              </Row>
              <Row style={{ marginTop: '16px' }}>
                <Col span={12}>
                  <Text>Price: ${booking.price}</Text>
                </Col>
                <Col span={12}>
                  <Space>
                    <Button
                      type="primary"
                      icon={<CheckOutlined />}
                      onClick={() => handleApproveBooking(booking.id)}
                    >
                      Approve
                    </Button>
                    <Button
                      type="default"
                      danger
                      icon={<CloseOutlined />}
                      onClick={() => handleDenyBooking(booking.id)}
                    >
                      Deny
                    </Button>
                  </Space>
                </Col>
              </Row>
            </Card>
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
