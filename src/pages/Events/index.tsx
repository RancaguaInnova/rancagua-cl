import React from 'react'
import Title from '../../components/Title'
import MainEvent from './MainEvent'
import SecondaryEvent from './SecondaryEvent'
import styles from './styles.module.sass'

const Events: React.FC = () => {
  return (
    <div>
      <section className={styles.events}>
        <Title>EVENTOS</Title>
        <MainEvent
          date='2020-02-12'
          title='Taller de Teoría y Solfeo'
          imageUrl='https://promocionmusical.es/wp-content/uploads/2018/12/que-es-una-partitura.jpg'
        />
        <SecondaryEvent date='2020-03-01' title='Taller "Cultivando Nuestro Patrimonio Natural' />
      </section>
    </div>
  )
}

export default Events
