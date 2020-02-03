import React from 'react'
import Title from '../../components/Title'
import MainEvent from './MainEvent'
import SecondaryEvent from './SecondaryEvent'
import ViewMoreButton from '../../components/ViewMoreButton'
import styles from './styles.module.sass'

const mainEvent = {
  date: '2020-02-12',
  title: 'Taller de Teoría y Solfeo',
  imageUrl: 'https://promocionmusical.es/wp-content/uploads/2018/12/que-es-una-partitura.jpg',
  color: '#4DACE9',
}

const secondaryEvents = [
  {
    date: '2020-02-01',
    title: 'Taller "Cultivando Nuestro Patrimonio Natural',
    address: { streetName: 'Centro Ambiental, Millán', streetNumber: '341' },
  },
  {
    date: '2020-03-08',
    title: 'Tercera Corrida Familiar',
    address: {
      streetName: 'Centro Deportivo Patricio Mekis, Av. República de Chile',
      streetNumber: '36',
    },
  },
]

const Events: React.FC = () => {
  return (
    <section className={styles.events}>
      <Title>EVENTOS</Title>
      <MainEvent event={mainEvent} />
      {secondaryEvents.map(event => (
        <SecondaryEvent event={event} />
      ))}
      <ViewMoreButton text='Ver todos los eventos' />
    </section>
  )
}

export default Events
