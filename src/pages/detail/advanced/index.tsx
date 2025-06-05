import React from 'react'
import {
	Avatar,
	Card,
	CardGroup,
	Col,
	Descriptions,
	Row,
	Tag,
	Typography,
	Tabs,
	TabPane,
	Table,
	Button
} from '@douyinfe/semi-ui'
import Meta from '@douyinfe/semi-ui/lib/es/card/meta'
import { IconClear, IconComment, IconTickCircle, IconMore } from '@douyinfe/semi-icons'

const Index: React.FC = () => {
	const { Title } = Typography
	const columns = [
		{
			title: '目录',
			dataIndex: 'directory'
		},
		{
			title: '题型',
			dataIndex: 'questionType'
		},
		{
			title: '题目数',
			dataIndex: 'questionNum'
		},
		{
			title: '耗时',
			dataIndex: 'directoryTime'
		},
		{
			title: '得分',
			dataIndex: 'directoryScore'
		},
		{
			title: '得分率',
			dataIndex: 'rate'
		},
		{
			title: '',
			dataIndex: 'operate',
			render: () => {
				return <Button>查看详情</Button>
			}
		}
	]
	const paperData = [
		{
			key: '1',
			directory: '单选题',
			questionType: '单选题',
			questionNum: '10',
			directoryTime: '20分',
			directoryScore: '30',
			rate: '100%'
		},
		{
			key: '2',
			directory: '多选题',
			questionType: '多选题',
			directoryTime: '20分',
			questionNum: '5',
			directoryScore: '30',
			rate: '100%'
		},
		{
			key: '3',
			directory: '填空题',
			questionType: '填空题',
			directoryTime: '20分',
			questionNum: '5',
			directoryScore: '40',
			rate: '100%'
		}
	]
	const data = [
		{ key: '姓名', value: '张三' },
		{ key: '手机号', value: '15588888888' },
		{ key: '邮箱', value: 'reboot@email.cn' },
		{ key: '身份证号 ', value: '110001199509071234' }
	]

	const style = {
		margin: '10px'
	}
	return (
		<div className="default-container">
			<Title heading={3} style={{ margin: '8px 0' }}>
				考生报告
			</Title>
			<div
				style={{
					backgroundColor: 'var(--semi-color-fill-0)',
					padding: 20,
					borderRadius: 10
				}}
			>
				<Row gutter={[16, 16]}>
					<Col span={8}>
						<Card bordered={false}>
							<Meta
								title="张三"
								avatar={
									<Avatar
										alt="Card meta img"
										size="large"
										src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg"
									/>
								}
							/>
						</Card>
					</Col>
					<Col span={16}>
						<Card title="考生信息" bordered={false}>
							<Descriptions layout="vertical" align="plain" data={data} column={4} />
						</Card>
					</Col>
				</Row>
			</div>
			{/*<Divider/>*/}
			<div style={{ paddingTop: 20, paddingBottom: 20 }}>
				<CardGroup spacing={40}>
					<Card key={1} shadows="always" title="总分" headerLine={false} style={{ width: 360 }}>
						120
					</Card>
					<Card key={2} shadows="always" title="排名" headerLine={false} style={{ width: 360 }}>
						1
					</Card>
					<Card key={3} shadows="always" title="风险等级" headerLine={false} style={{ width: 360 }}>
						无风险
					</Card>
				</CardGroup>
			</div>
			<div>
				<Tabs type="card">
					<TabPane tab="试卷1" itemKey="1">
						<CardGroup spacing={40} style={{ paddingTop: 20, paddingBottom: 20 }}>
							<Card key={1} shadows="always" title="当前试卷分数" headerLine={false} style={{ width: 360 }}>
								100
							</Card>
							<Card key={2} shadows="always" title="耗时" headerLine={false} style={{ width: 360 }}>
								1小时10分钟
							</Card>
							<Card key={3} shadows="always" title="交卷时间" headerLine={false} style={{ width: 360 }}>
								2025-01-01 12:00:00
							</Card>
						</CardGroup>
						<Table columns={columns} dataSource={paperData} pagination={false} />
					</TabPane>
					<TabPane tab="试卷2" itemKey="2">
						<CardGroup spacing={40} style={{ paddingTop: 20, paddingBottom: 20 }}>
							<Card key={1} shadows="always" title="当前试卷分数" headerLine={false} style={{ width: 360 }}>
								100
							</Card>
							<Card key={2} shadows="always" title="耗时" headerLine={false} style={{ width: 360 }}>
								20分钟
							</Card>
							<Card key={3} shadows="always" title="交卷时间" headerLine={false} style={{ width: 360 }}>
								2025-01-01 12:00:00
							</Card>
						</CardGroup>
						<Table columns={columns} dataSource={paperData} pagination={false} />
					</TabPane>
				</Tabs>
			</div>
		</div>
	)
}

export default Index
