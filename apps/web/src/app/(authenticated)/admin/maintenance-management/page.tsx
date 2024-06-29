'use client'

import { useEffect, useState } from 'react'
import {
  Typography,
  Table,
  Button,
  Space,
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
} from 'antd'
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MaintenanceManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [maintenances, setMaintenances] = useState<Model.Maintenance[]>([])
  const [facilities, setFacilities] = useState<Model.Facility[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [editingMaintenance, setEditingMaintenance] =
    useState<Model.Maintenance | null>(null)

  useEffect(() => {
    if (!authentication.isAuthenticated) {
      router.push('/auth')
    } else {
      fetchMaintenances()
      fetchFacilities()
    }
  }, [authentication.isAuthenticated])

  const fetchMaintenances = async () => {
    try {
      const maintenancesFound = await Api.Maintenance.findMany({
        includes: ['facility'],
      })
      setMaintenances(maintenancesFound)
    } catch (error) {
      enqueueSnackbar('Failed to fetch maintenances', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const fetchFacilities = async () => {
    try {
      const facilitiesFound = await Api.Facility.findMany()
      setFacilities(facilitiesFound)
    } catch (error) {
      enqueueSnackbar('Failed to fetch facilities', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await Api.Maintenance.deleteOne(id)
      setMaintenances(maintenances.filter(m => m.id !== id))
      enqueueSnackbar('Maintenance deleted successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to delete maintenance', { variant: 'error' })
    }
  }

  const handleEdit = (maintenance: Model.Maintenance) => {
    setEditingMaintenance(maintenance)
    setIsModalVisible(true)
  }

  const handleAdd = () => {
    setEditingMaintenance(null)
    setIsModalVisible(true)
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
  }

  const handleFormSubmit = async (values: any) => {
    try {
      if (editingMaintenance) {
        await Api.Maintenance.updateOne(editingMaintenance.id, values)
        setMaintenances(
          maintenances.map(m =>
            m.id === editingMaintenance.id ? { ...m, ...values } : m,
          ),
        )
        enqueueSnackbar('Maintenance updated successfully', {
          variant: 'success',
        })
      } else {
        const newMaintenance = await Api.Maintenance.createOneByFacilityId(
          values.facilityId,
          values,
        )
        setMaintenances([...maintenances, newMaintenance])
        enqueueSnackbar('Maintenance created successfully', {
          variant: 'success',
        })
      }
      setIsModalVisible(false)
    } catch (error) {
      enqueueSnackbar('Failed to save maintenance', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Task Description',
      dataIndex: 'taskDescription',
      key: 'taskDescription',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Scheduled Date',
      dataIndex: 'scheduledDate',
      key: 'scheduledDate',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Facility',
      dataIndex: ['facility', 'name'],
      key: 'facility',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: Model.Maintenance) => (
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
      <Title level={2}>Maintenance Management</Title>
      <Text>Manage maintenance tasks for sports facilities.</Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAdd}
        style={{ margin: '20px 0' }}
      >
        Add Maintenance
      </Button>
      <Table
        columns={columns}
        dataSource={maintenances}
        rowKey="id"
        loading={loading}
        pagination={{ defaultPageSize: 10 }}
      />
      <Modal
        title={editingMaintenance ? 'Edit Maintenance' : 'Add Maintenance'}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form
          initialValues={editingMaintenance || { status: 'Pending' }}
          onFinish={handleFormSubmit}
          layout="vertical"
        >
          <Form.Item
            name="taskDescription"
            label="Task Description"
            rules={[
              { required: true, message: 'Please input the task description!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select the status!' }]}
          >
            <Select>
              <Option value="Pending">Pending</Option>
              <Option value="In Progress">In Progress</Option>
              <Option value="Completed">Completed</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="scheduledDate"
            label="Scheduled Date"
            rules={[
              { required: true, message: 'Please select the scheduled date!' },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="facilityId"
            label="Facility"
            rules={[{ required: true, message: 'Please select the facility!' }]}
          >
            <Select>
              {facilities?.map(facility => (
                <Option key={facility.id} value={facility.id}>
                  {facility.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingMaintenance ? 'Update' : 'Add'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
