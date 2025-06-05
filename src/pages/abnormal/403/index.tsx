import React from 'react'
import { Empty } from '@douyinfe/semi-ui'
import { IllustrationNoAccess, IllustrationNoAccessDark } from '@douyinfe/semi-illustrations'

const Index: React.FC = () => {
	return (
		<div className="default-container">
			<Empty
				title={'403'}
				image={<IllustrationNoAccess style={{ width: 400, height: 400 }} />}
				darkModeImage={<IllustrationNoAccessDark style={{ width: 400, height: 400 }} />}
				description="403 无权限访问"
			></Empty>
		</div>
	)
}

export default Index
