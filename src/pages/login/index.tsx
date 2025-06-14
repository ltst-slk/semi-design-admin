import React, { useEffect } from 'react'
import { Carousel, Typography, Space, Form, Toast, Button, Notification } from '@douyinfe/semi-ui'
import userStore from '@src/store/common/user'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { login } from '@src/api/user/login'

const { Title, Paragraph } = Typography

const style = {
	width: '100%',
	height: '100%'
}

const titleStyle = {
	position: 'absolute',
	top: '100px',
	left: '100px'
}

const colorStyle = {
	color: '#1C1F23'
}

const renderLogo = () => {
	return (
		<img
			src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/semi_logo.svg"
			alt="semi_logo"
			style={{ width: 87, height: 31 }}
		/>
	)
}

const imgList = [
	'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-1.png',
	'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-2.png',
	'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-3.png'
]

const textList = [
	['Semi 设计管理系统', '从 Semi Design，到 Any Design', '快速定制你的设计系统，并应用在设计稿和代码中'],
	['Semi 物料市场', '面向业务场景的定制化组件，支持线上预览和调试', '内容由 Semi Design 用户共建'],
	['Semi 设计/代码模板', '高效的 Design2Code 设计稿转代码', '海量 Figma 设计模板一键转为真实前端代码']
]

const Index: React.FC = () => {
	const navigate = useNavigate()
	const fetchUserInfo = userStore((state) => state.fetchUserInfo)
	const userToken = userStore((state) => state.token)
	useEffect(() => {
		console.log('userToken', userToken)
		if (userToken) {
			navigate('/dashboard/workbeach')
		}
	}, [userToken])
	const handleSubmit = async (values: { userName: string; password: string; acceptedTerms: boolean }) => {
		console.log('values', values)
		const loginParam = {
			username: values.userName,
			password: values.password,
			acceptedTerms: values.acceptedTerms
		}
		console.log('loginParam', loginParam)
		const res = await login(loginParam)
		// 登录失败
		const { code, msg, data } = res
		if (code !== 200) {
			Notification.error({ content: msg, position: 'top', duration: 3 })
			return
		}
		// 登录成功
		const { token, nickname } = data

		await fetchUserInfo()
		Notification.success({ title: nickname, content: msg, position: 'top', duration: 3 })
		console.log('after', userStore.getState().username)
		// 跳转工作台
		navigate('/dashboard/workbeach')
		// const { userName } = values
		// const token = '1234567AAAAA'
		// const role = 'admin'
		// const userInfo = { username: userName, token, role }
		// userStore.setState({ username: userInfo.username })
		// userStore.setState({ token: userInfo.token })
		// userStore.setState({ role: userInfo.role })
		// console.log('userStore', userStore.getState())
	}
	return (
		<div className="container">
			<div className="banner">
				<div className="banner-inner">
					<Carousel style={style} autoPlay={{ interval: 1500, hoverToPause: true }} theme="dark">
						{imgList.map((src, index) => {
							return (
								<div
									key={index}
									style={{
										justifyContent: 'center',
										height: '100%',
										flexDirection: 'column',
										display: 'flex',
										alignItems: 'center',
										backgroundSize: 'cover',
										backgroundImage: `url('${src}')`
									}}
								>
									<Space vertical align="start" spacing="medium">
										{renderLogo()}
										<Title heading={2} style={colorStyle}>
											{textList[index][0]}
										</Title>
										<Space vertical align="start">
											<Paragraph style={colorStyle}>{textList[index][1]}</Paragraph>
											<Paragraph style={colorStyle}>{textList[index][2]}</Paragraph>
										</Space>
									</Space>
								</div>
							)
						})}
					</Carousel>
				</div>
			</div>
			<div className="login-form">
				<Form onSubmit={(values) => handleSubmit(values)} style={{ width: 400 }}>
					{({ formState, values, formApi }) => (
						<>
							<Form.Input
								field="userName"
								label="用户名"
								style={{ width: '100%' }}
								placeholder="请输入用户名"
							></Form.Input>
							<Form.Input field="password" label="密码" style={{ width: '100%' }} placeholder="请输入密码"></Form.Input>
							<Form.Checkbox field="acceptedTerms" noLabel>
								我同意用户服务协议
							</Form.Checkbox>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
								<p>
									<span>Or</span>
									<Button
										theme="borderless"
										style={{ color: 'var(--semi-color-primary)', marginLeft: 10, cursor: 'pointer' }}
									>
										注册
									</Button>
								</p>
								<Button disabled={!values.acceptedTerms} htmlType="submit" type="tertiary">
									登录
								</Button>
							</div>
						</>
					)}
				</Form>
			</div>
		</div>
	)
}

export default Index
