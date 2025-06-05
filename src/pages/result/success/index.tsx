import React from 'react'
import { Empty } from '@douyinfe/semi-ui'
import { IllustrationSuccess, IllustrationSuccessDark } from '@douyinfe/semi-illustrations'

const Index: React.FC = () => {
	return (
		<div className="default-container">
			<Empty
				title={'访问成功'}
				image={<IllustrationSuccess style={{ width: 400, height: 400 }} />}
				darkModeImage={<IllustrationSuccessDark style={{ width: 400, height: 400 }} />}
				description="这是成功页"
			></Empty>
		</div>
	)
}

export default Index
