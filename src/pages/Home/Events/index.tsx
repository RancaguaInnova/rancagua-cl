import React from 'react'
import Title from '../../../components/Title'
import MainEvent from '../../../components/Events/MainEvent'
import SecondaryEvent from '../../../components/Events/SecondaryEvent'
import ViewMoreButton from '../../../components/ViewMoreButton'
import styles from './styles.module.sass'
import { List } from 'antd'

const Events: React.FC = () => {
  const events = [
    {
      date: '2020-02-12',
      title: 'Taller de Teoría y Solfeo',
      imageUrl: 'asdfasdfas',
      address: { streetName: 'Centro Cultural Baquedano', streetNumber: '045' },
      isFree: true,
    },
    {
      date: '2020-02-01',
      title: 'Taller "Cultivando Nuestro Patrimonio Natural',
      address: { streetName: 'Centro Ambiental, Millán', streetNumber: '341' },
      isFree: false,
    },
    {
      date: '2020-03-08',
      title: 'Tercera Corrida Familiar',
      address: {
        streetName: 'Centro Deportivo Patricio Mekis, Av. República de Chile',
        streetNumber: '36',
      },
      isFree: true,
    },
  ]

  const mainEvent = events[0]
  const secondaryEvents = events.slice(1)

  return (
    <section className={styles.events}>
      <Title>EVENTOS</Title>

      <MainEvent event={mainEvent} />
      {secondaryEvents.map((event, index) => (
        <SecondaryEvent event={event} key={index} />
      ))}
      <div className={styles.viewMore}>
        <ViewMoreButton text='Ver todos los eventos' />
      </div>
    </section>
  )
}

export default Events
