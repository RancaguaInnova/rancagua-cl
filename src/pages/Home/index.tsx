import React from 'react'
import Notifications from './notifications'
import './styles.css'

const Home: React.FC = () => {
	return (
		<div className="Home">
			Soy la home
			<Notifications />
		</div>
	)
}

export default Home
