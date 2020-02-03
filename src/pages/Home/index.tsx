import React from 'react'
import Status from './Status'
import Procedures from './Procedures'
import Services from './Services'
import Events from './Events'
import News from './News'
import Contact from './Contact'
import './styles.sass'

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
