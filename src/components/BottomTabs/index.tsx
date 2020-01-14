import React from 'react'
import { Button, Row, Col, Layout, Icon } from 'antd'
import './styles.css'

const { Footer } = Layout

interface BottomTabsProps {
  onHandleMenu: any
}
const BottomTabs: React.FC<BottomTabsProps> = ({ onHandleMenu }) => {
  return (
    <div>
      <Footer className='bottomTabs'>
        <Row>
          <Col span={4} className='btn-box active'>
            <Icon type='home' className='icon' />
            <p className='icon-txt'>Home</p>
          </Col>
          <Col span={4} className='btn-box'>
            <Icon type='audit' className='icon' />
            <p className='icon-txt'>Trámites</p>
          </Col>
          <Col span={4} className='btn-box'>
            <Icon type='container' className='icon' />
            <p className='icon-txt'>Servicios</p>
          </Col>
          <Col span={4} className='btn-box'>
            <Icon type='calendar' className='icon' />
            <p className='icon-txt'>Eventos</p>
          </Col>
          <Col span={4} className='btn-box'>
            <Icon type='read' className='icon' />
            <p className='icon-txt'>Noticias</p>
          </Col>
          <Col span={4} className='btn-box'>
            <Icon type='menu' className='icon' />
            <p className='icon-txt'>Menu</p>
            {/* <Button onClick={onHandleMenu} type='link' block>
              Menu
            </Button> */}
          </Col>
        </Row>
      </Footer>
    </div>
  )
}

export default BottomTabs
