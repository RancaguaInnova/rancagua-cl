import React from 'react'
import { Row, Layout } from 'antd'
import Tab from './tab'
import './styles.css'

const { Footer } = Layout

export interface BottomTabsProps {
  onHandleMenu: any
}

const BottomTabs: React.FC<BottomTabsProps> = ({ onHandleMenu }) => {
  return (
    <div>
      <Footer className='bottomTabs'>
        <Row>
          <Tab icon='home' text='Home' />
          <Tab icon='audit' text='Trámites' selected={true} />
          <Tab icon='container' text='Servicios' />
          <Tab icon='calendar' text='Eventos' />
          <Tab icon='read' text='Noticias' />
          <Tab icon='menu' text='Menu' onClick={onHandleMenu} />
        </Row>
      </Footer>
    </div>
  )
}

export default BottomTabs
