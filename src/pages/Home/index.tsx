import React from 'react'
import Status from './status'
import Procedures from './procedures'
import Services from './services'
import Events from '../Events'
import News from './news'
import Contact from './contact'
import './styles.scss'

const Home: React.FC = () => {
  return (
    <div className='page-content home'>
      <Status />
      <Procedures />
      <Services />
      <Events />
      <News />
      <Contact />
    </div>
  )
}

export default Home
