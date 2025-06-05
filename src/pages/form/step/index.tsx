import React, { useState } from 'react'
import { Steps, Button, Form } from '@douyinfe/semi-ui'
const { Section, Input, DatePicker, Select, Switch, InputNumber, Checkbox, RadioGroup, Radio } = Form

import './index.scss'
const Index: React.FC = () => {
	const [current, setCurrent] = useState<number>(0)

	const next = () => {
		setCurrent((prev) => prev + 1)
	}

	const prev = () => {
		setCurrent((prev) => prev - 1)
	}

	const steps = [
		{
			title: '基本信息'
		},
		{
			title: '合格标准'
		},
		{
			title: '考试时间'
		}
	]

	return (
		<div className="default-container">
			<div style={{ paddingTop: 20, paddingBottom: 20 }}>
				<Steps type="basic" current={current} onChange={(i) => console.log(i)}>
					{steps.map((item) => (
						<Steps.Step key={item.title} title={item.title} />
					))}
				</Steps>
				{/*<div className="steps-content" style={{ marginTop: 4, marginBottom: 4 }}>*/}
				{/*  {steps[current].content}*/}
				{/*</div>*/}
				<div className="steps-form">
					{current === 0 && (
						<Form style={{ padding: 20, width: '100%' }}>
							<Section text={'基本信息'}>
								<Input field="name" label="考试名称" initValue="考试平台使用" style={{ width: 560 }} />
							</Section>
						</Form>
					)}
					{current === 1 && (
						<Form style={{ padding: 20, width: '100%' }}>
							<Section text={'合格标准'}>
								<div style={{ display: 'flex' }}>
									<InputNumber
										field="pass"
										initValue={60}
										style={{ width: 80 }}
										label={{ text: '及格正确率', required: true }}
									/>
									<InputNumber
										field="number"
										initValue={10}
										style={{ width: 80 }}
										label={{ text: '合格人数', required: true }}
									/>
								</div>
							</Section>
						</Form>
					)}
					{current === 2 && (
						<Form style={{ padding: 20, width: '100%' }}>
							<Section text={'考试时间'}>
								<DatePicker
									field="date"
									type="dateTime"
									initValue={new Date()}
									style={{ width: 272 }}
									label={{ text: '开始时间', required: true }}
								/>
								<div style={{ display: 'flex' }}>
									<Input field="time" label="考试时长" style={{ width: 176 }} initValue={'60'} addonAfter="分钟" />
									<Checkbox initValue={true} noLabel field="auto" style={{ paddingTop: 30, marginLeft: 12 }}>
										到时间自动交卷
									</Checkbox>
								</div>
								<RadioGroup field="type" label="有效时间" direction="vertical" initValue={'always'}>
									<Radio value="always">永久有效</Radio>
									<Radio value="user">自定义有效期</Radio>
								</RadioGroup>
								<RadioGroup
									field="answerTime"
									label="答案放出时间"
									direction="vertical"
									initValue={'always'}
									rules={[{ required: true }]}
								>
									<Radio value="always">自动放出</Radio>
									<Radio value="user">
										<div style={{ display: 'inline-block' }}>
											自定义放出时间
											<Form.DatePicker
												type="dateTimeRange"
												noLabel
												field="customTime"
												style={{ width: 464, display: 'inline-block' }}
											/>
										</div>
									</Radio>
								</RadioGroup>
							</Section>
						</Form>
					)}
				</div>
				<div className="steps-action">
					{current < steps.length - 1 && (
						<Button type="primary" onClick={next}>
							下一步
						</Button>
					)}
					{current === steps.length - 1 && (
						<Button type="primary" onClick={() => console.log('Processing complete!')}>
							创建
						</Button>
					)}
					{current > 0 && (
						<Button style={{ marginLeft: 8 }} onClick={prev}>
							上一步
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Index
