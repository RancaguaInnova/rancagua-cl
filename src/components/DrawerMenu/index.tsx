import React from 'react'
import { Drawer } from 'antd'
import styles from './styles.module.sass'

export enum DrawerPlacement {
    right = 'right',
    top = 'top',
    bottom = 'bottom',
    left = 'left'
}

const DrawerTitle: React.FC = () => {
    return (
        <div className={styles.title}>
            <img className={styles.imgTitle} src='/assets/images/logo_white.png' />
        </div>
    )
}

export interface DrawerMenuProps {
    onClose: any
    visible: boolean
    placement?: DrawerPlacement
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ onClose, visible = false, placement = 'right' }) => {
    return (
        <Drawer title={<DrawerTitle />} placement={placement} closable={true} onClose={onClose} visible={visible}>
            <p>MUNICIPIO</p>
            <p>CIUDAD</p>
            <p>UNIDADES</p>
        </Drawer>
    )
}

export default DrawerMenu
