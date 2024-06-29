'use client'

import React, { useState } from 'react'
import { Typography, Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AuthenticationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true)
    try {
      const response = await Api.User.login(values.email, values.password)
      if (response.status === 'success') {
        enqueueSnackbar('Login successful', { variant: 'success' })
        router.push('/home')
      } else {
        enqueueSnackbar('Login failed', { variant: 'error' })
      }
    } catch (error) {
      enqueueSnackbar('An error occurred', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={24} sm={18} md={12} lg={8}>
          <Title level={2} style={{ textAlign: 'center' }}>
            Login
          </Title>
          <Text
            style={{
              display: 'block',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Please enter your credentials to login.
          </Text>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
