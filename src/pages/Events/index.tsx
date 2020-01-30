import React from 'react'
import Title from '../../components/Title'
import MainEvent from './MainEvent'
import './styles.sass'

const Events: React.FC = () => {
  return (
    <div>
      <section className='section events'>
        <Title style={{ fontWeight: 'bold', paddingTop: '1rem', paddingBottom: '1rem' }}>
          EVENTOS
        </Title>
        <MainEvent />
      </section>
    </div>
  )
}

export default Events
