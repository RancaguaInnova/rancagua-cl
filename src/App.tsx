import React, { Suspense, lazy, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { isMobile } from 'mobile-device-detect'

// Shared Components
import Header from 'components/Header'
import BottomTabs from 'components/BottomTabs'
import DrawerMenu from 'components/DrawerMenu'
import Loading from 'components/Loading'

import './App.css'

const { Content } = Layout

// Pages
const Home = lazy(() => import('pages/Home'))
const Events = lazy(() => import('pages/Events'))
const News = lazy(() => import('pages/News'))
const Services = lazy(() => import('pages/Services'))

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Router>
      <div className='App'>
        <Layout>
          <Header isMobile={isMobile} />
          <Suspense fallback={<Loading />}>
            <Content className={`content${isMobile ? '-mobile' : ''}`}>
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

          {isMobile && (
            <BottomTabs
              onHandleMenu={() => {
                setVisible(!visible)
              }}
            />
          )}
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
