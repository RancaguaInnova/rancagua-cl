import React from 'react'
import { Row, Layout } from 'antd'
import { Link } from 'react-router-dom'
import { withRouter, RouteComponentProps } from 'react-router'
import Tab from './tab'
import './styles.sass'

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
    const { location, history } = props
    const paths = location.pathname.split('/')
    const showBack = paths.length > 2

    const tabs = (
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
    )

    const backTab = (
        <Row>
            <Tab icon='left' text='VOLVER' selected onClick={() => history.goBack()} span={4} />
            <Link to='/'>
                <Tab icon='home' text='Home' selected={location.pathname === '/'} offset={12} />
            </Link>
            <Tab icon='menu' text='Menu' onClick={onHandleMenu} />
        </Row>
    )

    return (
        <div>
            <Footer className='bottomTabs'>{showBack ? backTab : tabs}</Footer>
        </div>
    )
}

export default withRouter(BottomTabs)
