import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import request from '@src/utils/request'

// 定义用户状态接口
interface UserState {
	username: string
	nickname: string
	tenantName: string
	token: string
	role: string
	fetchUserInfo: () => Promise<void>
	logout: () => void
}
const userStore = create<UserState>()(
	persist(
		(set, get) => ({
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
			},
			logout: () =>
				set({
					username: '',
					nickname: '',
					tenantName: '',
					token: '',
					role: ''
				})
		}),
		{
			name: 'userStorage', // 存储中的项目名称，必须是唯一的
			storage: createJSONStorage(() => sessionStorage) // 使用sessionStorage作为存储
		}
	)
)

export default userStore
