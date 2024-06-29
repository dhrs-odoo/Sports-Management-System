'use client'

import { useEffect, useState } from 'react'
import { Button, Col, Row, Typography, Card, Spin } from 'antd'
import { CreditCardOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PaymentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [bookings, setBookings] = useState<Model.Booking[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (userId) {
      Api.Booking.findManyByUserId(userId, {
        includes: ['facility', 'payments'],
      })
        .then(bookings => {
          setBookings(bookings)
          setLoading(false)
        })
        .catch(error => {
          enqueueSnackbar('Failed to load bookings', { variant: 'error' })
          setLoading(false)
        })
    }
  }, [userId])

  const handlePayment = async (bookingId: string, amount: number) => {
    try {
      const paymentDate = dayjs().format('YYYY-MM-DD')
      const payment = await Api.Payment.createOneByBookingId(bookingId, {
        amount,
        paymentMethod: 'Razorpay',
        paymentDate,
      })
      enqueueSnackbar('Payment successful', { variant: 'success' })
      router.push('/booking')
    } catch (error) {
      enqueueSnackbar('Payment failed', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Payment Page</Title>
      <Text>View and make payments for your bookings below.</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {loading ? (
          <Spin size="large" />
        ) : (
          bookings?.map(booking => (
            <Col xs={24} sm={12} md={8} lg={6} key={booking.id}>
              <Card
                title={booking.facility?.name}
                extra={`$${booking.price}`}
                actions={[
                  <Button
                    type="primary"
                    icon={<CreditCardOutlined />}
                    onClick={() => handlePayment(booking.id, booking.price)}
                  >
                    Pay Now
                  </Button>,
                ]}
              >
                <p>
                  Booking Date:{' '}
                  {dayjs(booking.bookingDate).format('MMMM D, YYYY')}
                </p>
                <p>Status: {booking.status}</p>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </PageLayout>
  )
}
