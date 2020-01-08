import React from 'react'
import { Button, Row, Col } from 'antd'
import './styles.css'

interface TabsProps {
	onHandleMenu: any
}
const Tabs: React.FC<TabsProps> = ({ onHandleMenu }) => {
	return (
		<div className="bottomBar">
			<Row>
				<Col span={4}>col-4</Col>
				<Col span={4}>col-4</Col>
				<Col span={4}>col-4</Col>
				<Col span={4}>col-4</Col>
				<Col span={4}>col-4</Col>
				<Col span={4}>
					<Button onClick={onHandleMenu} type="link" block>
						Menu
					</Button>
				</Col>
			</Row>
		</div>
	)
}

export default Tabs
