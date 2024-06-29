'use client'

import { useEffect, useState } from 'react'
import { Table, Typography, Spin, Row, Col } from 'antd'
import {
  UserOutlined,
  CalendarOutlined,
  DollarOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function BookingsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [bookings, setBookings] = useState<Model.Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsFound = await Api.Booking.findMany({
          includes: ['user', 'facility'],
        })
        setBookings(bookingsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch bookings', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [])

  const columns = [
    {
      title: 'User',
      dataIndex: ['user', 'name'],
      key: 'user',
      render: (text: string, record: Model.Booking) => (
        <span>
          <UserOutlined /> {text}
        </span>
      ),
    },
    {
      title: 'Facility',
      dataIndex: ['facility', 'name'],
      key: 'facility',
      render: (text: string, record: Model.Booking) => (
        <span>
          <CalendarOutlined /> {text}
        </span>
      ),
    },
    {
      title: 'Booking Date',
      dataIndex: 'bookingDate',
      key: 'bookingDate',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text: number) => (
        <span>
          <DollarOutlined /> {text}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col>
          <Title level={2}>Bookings Management</Title>
          <Text>View and manage user bookings</Text>
        </Col>
      </Row>
      {loading ? (
        <Row justify="center">
          <Spin size="large" />
        </Row>
      ) : (
        <Table
          columns={columns}
          dataSource={bookings}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      )}
    </PageLayout>
  )
}
