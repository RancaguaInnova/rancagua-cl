import React, { Suspense, lazy, useState, useContext } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { MobileContextProvider, MobileContext } from 'core/providers/contexts/IsMobile'
import dotenv from 'dotenv'

import './App.css'

// Shared Components
import BottomTabs from 'components/BottomTabs'
import DrawerMenu from 'components/DrawerMenu'
import Loading from 'components/Loading'
import Header from 'components/Header'

dotenv.config()

const { Content } = Layout

// Pages
const Home = lazy(() => import('pages/Home'))
const Events = lazy(() => import('pages/Events'))
const News = lazy(() => import('pages/News'))
const Services = lazy(() => import('pages/Services'))
const Procedures = lazy(() => import('pages/Procedures'))

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const isMobile = useContext(MobileContext)
  return (
    <Router>
      <div className='App'>
        <Suspense fallback={<Loading />}>
          <MobileContextProvider>
            <Layout>
              <Header isMobile={isMobile} />
              <Content className={`content${isMobile ? '-mobile' : ''}`}>
                <Switch>
                  <Route path='/eventos'>
                    <Events />
                  </Route>
                  <Route path='/noticias'>
                    <News />
                  </Route>
                  <Route path='/servicios'>
                    <Services />
                  </Route>
                  <Route path='/tramites'>
                    <Procedures />
                  </Route>
                  <Route path='/' default>
                    <Home />
                  </Route>
                </Switch>
              </Content>

              {isMobile && (
                <BottomTabs
                  onHandleMenu={() => {
                    setVisible(!visible)
                  }}
                />
              )}
            </Layout>
          </MobileContextProvider>
        </Suspense>
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
