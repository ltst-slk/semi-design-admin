import create from 'zustand'
import request from '@src/utils/request'

export interface userState {
	username: string
	nickname: string
	tenantName: string
	token: string
	role: string
	fetchUserInfo: () => void
}

const userStore = create<userState>((set, get) => ({
	username: '',
	nickname: '',
	tenantName: '',
	token: '',
	role: '',
	fetchUserInfo: async () => {
		const res = await request({
			url: '/userinfo',
			method: 'get'
		})
		const { username, nickname, tenantName, token, role } = res.data
		set({
			username,
			nickname,
			tenantName,
			token,
			role
		})
	}
}))

export default userStore
