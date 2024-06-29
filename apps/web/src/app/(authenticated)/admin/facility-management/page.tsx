'use client'

import { useEffect, useState } from 'react'
import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Space,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FacilityManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [facilities, setFacilities] = useState<Model.Facility[]>([])
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingFacility, setEditingFacility] = useState<Model.Facility | null>(
    null,
  )
  const [form] = Form.useForm()

  useEffect(() => {
    fetchFacilities()
  }, [])

  const fetchFacilities = async () => {
    setLoading(true)
    try {
      const facilitiesFound = await Api.Facility.findMany()
      setFacilities(facilitiesFound)
    } catch (error) {
      enqueueSnackbar('Failed to fetch facilities', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = () => {
    setEditingFacility(null)
    form.resetFields()
    setIsModalVisible(true)
  }

  const handleEdit = (facility: Model.Facility) => {
    setEditingFacility(facility)
    form.setFieldsValue(facility)
    setIsModalVisible(true)
  }

  const handleDelete = async (facilityId: string) => {
    setLoading(true)
    try {
      await Api.Facility.deleteOne(facilityId)
      enqueueSnackbar('Facility deleted successfully', { variant: 'success' })
      fetchFacilities()
    } catch (error) {
      enqueueSnackbar('Failed to delete facility', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      setLoading(true)
      if (editingFacility) {
        await Api.Facility.updateOne(editingFacility.id, values)
        enqueueSnackbar('Facility updated successfully', { variant: 'success' })
      } else {
        await Api.Facility.createOne(values)
        enqueueSnackbar('Facility added successfully', { variant: 'success' })
      }
      fetchFacilities()
      setIsModalVisible(false)
    } catch (error) {
      enqueueSnackbar('Failed to save facility', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Model.Facility) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Facility Management</Title>
      <Text>
        Manage your sports facilities, including adding, editing, and removing
        them.
      </Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAdd}
        style={{ marginBottom: 16 }}
      >
        Add Facility
      </Button>
      <Table
        columns={columns}
        dataSource={facilities}
        rowKey="id"
        loading={loading}
      />
      <Modal
        title={editingFacility ? 'Edit Facility' : 'Add Facility'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input the name of the facility!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              {
                required: true,
                message: 'Please input the price of the facility!',
              },
            ]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
