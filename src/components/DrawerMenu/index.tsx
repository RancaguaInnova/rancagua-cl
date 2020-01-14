import React from 'react'
import { Drawer } from 'antd'
import './styles.css'

export enum DrawerPlacement {
  right = 'right',
  top = 'top',
  bottom = 'bottom',
  left = 'left',
}

export interface DrawerMenuProps {
  onClose: any
  visible: boolean
  placement?: DrawerPlacement
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  onClose,
  visible = false,
  placement = 'right',
}) => {
  return (
    <Drawer title='Menú' placement={placement} closable={true} onClose={onClose} visible={visible}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

export default DrawerMenu
