import React from 'react'
import { Layout, Menu, Row, Col } from 'antd'
import './styles.css'

const { Header } = Layout

const DesktopHeader: React.FC = () => {
  return (
    <div>
      <Header
        style={{
          padding: '0px 5px',
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          color: 'black',
          backgroundColor: 'white',
        }}
      >
        <Row>
          {/*  <Col span={1}>
            <button
              style={{
                width: '100%',
                height: '100%',
                padding: 0,
                margin: 0,
                border: 'none',
                backgroundColor: '#ed1646',
              }}
            >
              MENU
            </button>
          </Col> */}
          <Col span={7}>
            <button
              style={{
                width: '20%',
                padding: 0,
                margin: 0,
                border: 'none',
                float: 'left',
                backgroundColor: '#ed1646',
              }}
            >
              MENU
            </button>
            <div className='logo'>
              <img src='/assets/images/logo.png' alt='Rancagua' />
            </div>
          </Col>
          <Col span={14}>
            <Menu
              mode='horizontal'
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '16px', fontSize: '0.8rem', padding: '24px 16px 5px' }}
            >
              <Menu.Item key='1'>INICIO</Menu.Item>
              <Menu.Item key='2'>TRÁMITES</Menu.Item>
              <Menu.Item key='3'>SERVICIOS</Menu.Item>
              <Menu.Item key='4'>EVENTOS</Menu.Item>
              <Menu.Item key='5'>NOTICIAS</Menu.Item>
              <Menu.Item key='6'>TRANSPARENCIA</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    </div>
  )
}

export default DesktopHeader
