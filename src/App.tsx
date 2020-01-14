import React, { Suspense, lazy, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Header from 'components/Header'
import BottomTabs from 'components/BottomTabs'
import DrawerMenu from 'components/DrawerMenu'
import Loading from 'components/Loading'
import CSS from 'csstype'
import './App.css'

const { Content } = Layout

const Home = lazy(() => import('pages/Home'))
const Events = lazy(() => import('pages/Events'))
const News = lazy(() => import('pages/News'))
const Services = lazy(() => import('pages/Services'))

const contentStyle: CSS.Properties = {
  margin: '74px 8px',
  padding: '8px',
  background: '#fff',
  minHeight: '280px',
}

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Router>
      <div className='App'>
        <Layout>
          <Header />
          <Suspense fallback={<Loading />}>
            <Content style={contentStyle}>
              <Switch>
                <Route path='/' default>
                  <Home />
                </Route>
                <Route path='/eventos'>
                  <Events />
                </Route>
                <Route path='/noticias'>
                  <News />
                </Route>
                <Route path='/servicios'>
                  <Services />
                </Route>
              </Switch>
            </Content>
          </Suspense>
          <BottomTabs
            onHandleMenu={() => {
              setVisible(!visible)
            }}
          />
        </Layout>
      </div>
      <DrawerMenu
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
    </Router>
  )
}

export default App
