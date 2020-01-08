import React from 'react'
import { Drawer } from 'antd'
import './styles.css'

interface DrawerMenuProps {
	onClose: any
	visible: boolean
}
const DrawerMenu: React.FC<DrawerMenuProps> = ({ onClose, visible = false }) => {
	return (
		<Drawer title="Menú" placement="right" closable={true} onClose={onClose} visible={visible}>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Drawer>
	)
}

export default DrawerMenu
