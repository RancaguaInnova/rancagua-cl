import React from 'react'
import { Layout } from 'antd'
import './styles.css'

const { Header } = Layout

const MobileHeader: React.FC = () => {
  return (
    <div>
      <Header
        style={{
          padding: '0px 20px',
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          color: 'black',
          backgroundColor: 'white',
        }}
      >
        <div className='logo-mobile'>
          <img src='/assets/images/logo.png' alt='Rancagua' />
        </div>
        TRANSPARENCIA
      </Header>
    </div>
  )
}

export default MobileHeader
