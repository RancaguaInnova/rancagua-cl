import React from 'react'
import Title from '../../components/Title'
import MainEvent from './MainEvent'
import SecondaryEvent from './SecondaryEvent'
import ViewMoreButton from '../../components/ViewMoreButton'
import styles from './styles.module.sass'

const secondaryEvents = [
  { date: '2020-03-01', title: 'Taller "Cultivando Nuestro Patrimonio Natural' },
]

const Events: React.FC = () => {
  return (
    <section className={styles.events}>
      <Title>EVENTOS</Title>
      <MainEvent
        date='2020-02-12'
        title='Taller de Teoría y Solfeo'
        imageUrl='https://promocionmusical.es/wp-content/uploads/2018/12/que-es-una-partitura.jpg'
        color='#4DACE9'
      />
      {secondaryEvents.map(event => (
        <SecondaryEvent date={event.date} title={event.title} />
      ))}
      <ViewMoreButton text='Ver todos los eventos' />
    </section>
  )
}

export default Events
