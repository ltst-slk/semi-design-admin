import request, { Response } from '@src/utils/request'

/**
 * 用户登录参数
 * username : 用户名
 * password : 密码
 * acceptedTerms : 是否接受用户协议
 * loginType : 用户登录类型
 */
export type LoginParam = {
	username?: string
	password?: string
	acceptedTerms?: boolean
	loginType?: number
}

/**
 * 用户登录
 * @param body
 */
export async function login(body: LoginParam): Promise<Response> {
	return request({
		url: `/login`,
		method: 'post'
	})
}

/**
 * 用户登出
 */
export async function loginOut() {
	return request({
		url: `/loginOut`,
		method: 'get'
	})
}
