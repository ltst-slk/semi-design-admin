import { MockMethod } from 'vite-plugin-mock'
import { LoginParam } from '../src/api/user/login'
export default [
	{
		url: '/api/userinfo',
		method: 'get',
		timeout: '300',
		response: {
			code: 200,
			msg: '用户信息获取成功',
			data: {
				username: 'admin',
				nickname: '管理员',
				tenantName: '加一科技有限公司',
				token: 'ABCDEFG',
				refreshToken: 'refreshTokenABCDEFG',
				role: 'admin'
			}
		}
	},
	{
		url: '/api/login',
		method: 'post',
		timeout: 200,
		response: (body: LoginParam) => {
			const { username, password, acceptedTerms, loginType } = body
			// return {
			//   code: 5001,
			//   msg: '用户名或密码错误',
			//   data: null,
			// }
			return {
				code: 200,
				msg: '欢迎进入Semi-design-admin',
				data: {
					username: username,
					nickname: '管理员',
					role: 'admin',
					token: 'ABCDEFG',
					refreshToken: 'refreshTokenABCDE'
				}
			}
		}
	},
	{
		url: '/api/logout',
		method: 'post',
		timeout: 200,
		response: {
			code: 200,
			data: {
				username: 'admin'
			}
		}
	}
] as MockMethod[]
