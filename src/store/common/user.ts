import create from 'zustand'

export interface userState {
	username: string
	token: string
	role: string
}

const userStore = create<userState>((set, get) => ({
	username: '',
	token: '',
	role: ''
}))

export default userStore
