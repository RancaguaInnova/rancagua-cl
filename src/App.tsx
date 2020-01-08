import React, { Suspense, lazy, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Tabs from 'components/Tabs'
import DrawerMenu from 'components/DrawerMenu'
import Loading from 'components/Loading'

import './App.css'

const Home = lazy(() => import('pages/Home'))
const Events = lazy(() => import('pages/Events'))
const News = lazy(() => import('pages/News'))
const Services = lazy(() => import('pages/Services'))

const App: React.FC = () => {
	const [visible, setVisible] = useState(false)
	return (
		<Router>
			<div className="App">
				<Header />
				<Suspense fallback={<Loading />}>
					<Switch>
						<Route path="/" default>
							<Home />
						</Route>
						<Route path="/eventos">
							<Events />
						</Route>
						<Route path="/noticias">
							<News />
						</Route>
						<Route path="/servicios">
							<Services />
						</Route>
					</Switch>
				</Suspense>
				<Tabs
					onHandleMenu={() => {
						setVisible(!visible)
					}}
				/>
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
