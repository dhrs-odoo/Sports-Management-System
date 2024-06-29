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
} from 'antd'
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SchedulingPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [schedules, setSchedules] = useState<Model.Schedule[]>([])
  const [facilities, setFacilities] = useState<Model.Facility[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    if (!authentication.isAuthenticated) {
      router.push('/auth')
    } else {
      fetchSchedules()
      fetchFacilities()
    }
  }, [authentication.isAuthenticated])

  const fetchSchedules = async () => {
    try {
      const schedulesFound = await Api.Schedule.findMany({
        includes: ['facility'],
      })
      setSchedules(schedulesFound)
    } catch (error) {
      enqueueSnackbar('Failed to fetch schedules', { variant: 'error' })
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

  const handleDelete = async (scheduleId: string) => {
    try {
      await Api.Schedule.deleteOne(scheduleId)
      enqueueSnackbar('Schedule deleted successfully', { variant: 'success' })
      fetchSchedules()
    } catch (error) {
      enqueueSnackbar('Failed to delete schedule', { variant: 'error' })
    }
  }

  const handleEdit = (record: Model.Schedule) => {
    form.setFieldsValue({
      ...record,
      startTime: dayjs(record.startTime),
      endTime: dayjs(record.endTime),
    })
    setIsModalVisible(true)
  }

  const handleAdd = () => {
    form.resetFields()
    setIsModalVisible(true)
  }

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      const formattedValues = {
        ...values,
        startTime: values.startTime.toISOString(),
        endTime: values.endTime.toISOString(),
      }

      if (values.id) {
        await Api.Schedule.updateOne(values.id, formattedValues)
        enqueueSnackbar('Schedule updated successfully', { variant: 'success' })
      } else {
        await Api.Schedule.createOneByFacilityId(
          values.facilityId,
          formattedValues,
        )
        enqueueSnackbar('Schedule created successfully', { variant: 'success' })
      }

      setIsModalVisible(false)
      fetchSchedules()
    } catch (error) {
      enqueueSnackbar('Failed to save schedule', { variant: 'error' })
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'Facility',
      dataIndex: ['facility', 'name'],
      key: 'facility',
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      key: 'endTime',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: Model.Schedule) => (
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
      <Title level={2}>Scheduling Management</Title>
      <Text>Manage the schedule and calendar for sports facilities.</Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAdd}
        style={{ margin: '20px 0' }}
      >
        Add Schedule
      </Button>
      <Table dataSource={schedules} columns={columns} rowKey="id" />

      <Modal
        title="Schedule"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item
            name="facilityId"
            label="Facility"
            rules={[{ required: true, message: 'Please select a facility' }]}
          >
            <Input type="select">
              {facilities.map(facility => (
                <option key={facility.id} value={facility.id}>
                  {facility.name}
                </option>
              ))}
            </Input>
          </Form.Item>
          <Form.Item
            name="startTime"
            label="Start Time"
            rules={[{ required: true, message: 'Please select a start time' }]}
          >
            <DatePicker showTime />
          </Form.Item>
          <Form.Item
            name="endTime"
            label="End Time"
            rules={[{ required: true, message: 'Please select an end time' }]}
          >
            <DatePicker showTime />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
