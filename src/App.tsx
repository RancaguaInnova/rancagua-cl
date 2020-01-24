import React, { Suspense, lazy, useState, useContext } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import MobileContextProvider from 'core/providers/contexts/isMobile'
import { MobileContext } from 'core/providers/contexts/isMobile'

import './App.css'

// Shared Components
import BottomTabs from 'components/BottomTabs'
import DrawerMenu from 'components/DrawerMenu'
import Loading from 'components/Loading'
import Header from 'components/Header'

const { Content } = Layout

// Pages
const Home = lazy(() => import('pages/Home'))
const Events = lazy(() => import('pages/Events'))
const News = lazy(() => import('pages/News'))
const Services = lazy(() => import('pages/Services'))

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
