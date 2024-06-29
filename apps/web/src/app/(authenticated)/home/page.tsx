'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [facilities, setFacilities] = useState<Model.Facility[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const facilitiesFound = await Api.Facility.findMany()
        setFacilities(facilitiesFound)
      } catch (error) {
        enqueueSnackbar('Failed to load facilities', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchFacilities()
  }, [])

  const renderFacilities = () => {
    if (loading) {
      return <Spin size="large" />
    }

    return (
      <Row gutter={[16, 16]}>
        {facilities?.map(facility => (
          <Col key={facility.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={facility.name}
              bordered={false}
              actions={[
                <HomeOutlined
                  key="book"
                  onClick={() =>
                    router.push(`/booking?facilityId=${facility.id}`)
                  }
                />,
              ]}
            >
              <Paragraph>{facility.description}</Paragraph>
              <Text strong>Price: ${facility.price}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Welcome to the Sports Facilities</Title>
      <Paragraph>
        {authentication.isAuthenticated &&
        authentication.user?.status === 'admin'
          ? 'As an admin, you can see an overview of the application.'
          : 'As a user, you can see available sports facilities.'}
      </Paragraph>
      {renderFacilities()}
    </PageLayout>
  )
}
