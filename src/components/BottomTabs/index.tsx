import React from 'react'
import { Row, Layout } from 'antd'
import { Link } from 'react-router-dom'
import { withRouter, RouteComponentProps } from 'react-router'
import Tab from './tab'
import './styles.css'

const { Footer } = Layout

export interface BottomTabsProps extends RouteComponentProps {
  onHandleMenu: any
  match: {
    params: any
    isExact: boolean
    path: string
    url: string
  }
}

const BottomTabs: React.FC<BottomTabsProps> = ({ onHandleMenu, ...props }) => {
  const { location } = props
  return (
    <div>
      <Footer className='bottomTabs'>
        <Row>
          <Link to='/'>
            <Tab icon='home' text='Home' selected={location.pathname === '/'} />
          </Link>
          <Link to='/tramites'>
            <Tab icon='audit' text='Trámites' selected={location.pathname === '/tramites'} />
          </Link>
          <Link to='/servicios'>
            <Tab icon='container' text='Servicios' selected={location.pathname === '/servicios'} />
          </Link>
          <Link to='/eventos'>
            <Tab icon='calendar' text='Eventos' selected={location.pathname === '/eventos'} />
          </Link>
          <Link to='/noticias'>
            <Tab icon='read' text='Noticias' selected={location.pathname === '/noticias'} />
          </Link>
          <Tab icon='menu' text='Menu' onClick={onHandleMenu} />
        </Row>
      </Footer>
    </div>
  )
}

export default withRouter(BottomTabs)
