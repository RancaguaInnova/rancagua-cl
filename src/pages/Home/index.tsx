import React from 'react'
import Status from './status'
import Procedures from './procedures'
import Services from './services'
import Events from '../Events'
import News from './news'
import Contact from './contact'
import styles from './styles.module.css'

const Home: React.FC = () => {
  return (
    <div className={[styles['page-content'], styles['home']].join(' ')}>
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
