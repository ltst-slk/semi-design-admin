import React, { useState, useMemo, useEffect } from 'react'
import { Table, Avatar, Tag, Form, Divider, Typography, Col, Row, Button, Space } from '@douyinfe/semi-ui'
import { IconTickCircle, IconComment, IconClear } from '@douyinfe/semi-icons'
import * as dateFns from 'date-fns'

const DAY = 24 * 60 * 60 * 1000
const figmaIconUrl = 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png'

const columns = [
	{
		title: '标题',
		dataIndex: 'name',
		width: 400,
		render: (text, record, index) => {
			return (
				<div>
					<Avatar size="small" shape="square" src={figmaIconUrl} style={{ marginRight: 12 }}></Avatar>
					{text}
				</div>
			)
		},
		filters: [
			{
				text: 'Semi Design 设计稿',
				value: 'Semi Design 设计稿'
			},
			{
				text: 'Semi D2C 设计稿',
				value: 'Semi D2C 设计稿'
			}
		],
		onFilter: (value, record) => record.name.includes(value),
		sorter: (a, b) => (a.name.length - b.name.length > 0 ? 1 : -1)
	},
	{
		title: '大小',
		dataIndex: 'size',
		sorter: (a, b) => (a.size - b.size > 0 ? 1 : -1),
		render: (text) => `${text} KB`
	},
	{
		title: '交付状态',
		dataIndex: 'status',
		render: (text) => {
			const tagConfig = {
				success: { color: 'green', prefixIcon: <IconTickCircle />, text: '已交付' },
				pending: { color: 'pink', prefixIcon: <IconClear />, text: '已延期' },
				wait: { color: 'cyan', prefixIcon: <IconComment />, text: '待评审' }
			}
			const tagProps = tagConfig[text]
			return (
				<Tag shape="circle" {...tagProps} style={{ userSelect: 'text' }}>
					{tagProps.text}
				</Tag>
			)
		}
	},
	{
		title: '所有者',
		dataIndex: 'owner',
		render: (text, record, index) => {
			return (
				<div>
					<Avatar size="small" color={record.avatarBg} style={{ marginRight: 4 }}>
						{typeof text === 'string' && text.slice(0, 1)}
					</Avatar>
					{text}
				</div>
			)
		}
	},
	{
		title: '更新日期',
		dataIndex: 'updateTime',
		sorter: (a, b) => (a.updateTime - b.updateTime > 0 ? 1 : -1),
		render: (value) => {
			return dateFns.format(new Date(value), 'yyyy-MM-dd')
		}
	}
]

const Index: React.FC = () => {
	const [dataSource, setData] = useState([])

	const rowSelection = useMemo(
		() => ({
			onChange: (selectedRowKeys, selectedRows) => {
				// console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
			},
			getCheckboxProps: (record) => ({
				disabled: record.name === 'Michael James', // Column configuration not to be checked
				name: record.name
			})
		}),
		[]
	)
	const scroll = useMemo(() => ({ y: 800 }), [])

	const getData = () => {
		const data = []
		for (let i = 0; i < 46; i++) {
			const isSemiDesign = i % 2 === 0
			const randomNumber = (i * 1000) % 199
			data.push({
				key: '' + i,
				name: isSemiDesign ? `Semi Design 设计稿${i}.fig` : `Semi D2C 设计稿${i}.fig`,
				owner: isSemiDesign ? '姜鹏志' : '郝宣',
				size: randomNumber,
				status: isSemiDesign ? 'success' : 'wait',
				updateTime: new Date().valueOf() + randomNumber * DAY,
				avatarBg: isSemiDesign ? 'grey' : 'red'
			})
		}
		return data
	}

	useEffect(() => {
		const data = getData()
		setData(data)
	}, [])
	const { Title } = Typography
	return (
		<div className="default-container">
			<Title heading={3} style={{ margin: '8px 0' }}>
				搜索列表
			</Title>
			<div className="grid">
				<Form style={{ padding: 10, width: '100%' }}>
					<Row>
						<Col span={8}>
							<Form.Input
								field="name"
								label="标题"
								trigger="blur"
								style={{ width: 250 }}
								placeholder="请输入标题"
								initValue="Semi Design 设计稿"
							/>
						</Col>
						<Col span={8}>
							<Form.Select field="status" label="交付状态" style={{ width: '250px' }} initValue="1">
								<Form.Select.Option value="1">已交付</Form.Select.Option>
								<Form.Select.Option value="0">待评审</Form.Select.Option>
							</Form.Select>
						</Col>
						<Col span={8}>
							<Form.DatePicker
								field="date"
								label="更新日期"
								style={{ width: '250px' }}
								initValue={new Date()}
							></Form.DatePicker>
						</Col>
					</Row>
					<Row type="flex" justify="end">
						<Col style={{ paddingRight: '5%' }}>
							<Space>
								<Button type="primary" theme="solid" htmlType="submit" className="btn-margin-right">
									查询
								</Button>
								<Button htmlType="reset">重置</Button>
							</Space>
						</Col>
					</Row>
				</Form>
			</div>
			<Divider align="left" />
			<div style={{ margin: '20px' }}>
				<Space>
					<Button type="primary" theme="solid" htmlType="submit" className="btn-margin-right">
						新建
					</Button>
					<Button htmlType="reset">批量插入</Button>
				</Space>
			</div>
			<Table columns={columns} dataSource={dataSource} rowSelection={rowSelection} scroll={scroll} />
		</div>
	)
}

export default Index
