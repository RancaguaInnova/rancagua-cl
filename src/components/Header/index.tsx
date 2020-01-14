import React from 'react'
import { Layout } from 'antd'
import './styles.css'
import CSS from 'csstype'

const { Header } = Layout

const headerStyle: CSS.Properties = {
  padding: '0px 20px',
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  color: 'black',
  backgroundColor: 'white',
}

const HeaderComponent: React.FC = () => {
  return (
    <div>
      <Header style={headerStyle}>
        <div className='logo'>
          <img src='/assets/images/logo.png' />
        </div>
        TRANSPARENCIA
      </Header>
    </div>
  )
}

export default HeaderComponent
