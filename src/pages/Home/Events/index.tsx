import React from 'react'
import Title from 'components/Title'
import DateSubscriber from 'components/Events/DateSubscriber'
import DataRow from 'components/Events/DataRow'
import ViewMoreButton from 'components/ViewMoreButton'
import { List, Icon } from 'antd'
import styles from './styles.module.sass'

const Events: React.FC = () => {
  const events = [
    {
      date: '2020-02-07',
      time: '19:30',
      title: 'Taller de Teoría y Solfeo',
      description: 'Aprende teoría musica y solfeo. Mejora tu interpretación y lectura musical',
      imageUrl: 'asdfasdfas',
      address: { streetName: 'Centro Cultural Baquedano', streetNumber: '' },
      externalUrl: 'https://google.cl',
      isFree: true,
    },
    {
      date: '2020-02-20',
      time: '16:00',
      title: 'Taller Cultivando Nuestro Patrimonio Natural',
      description: 'Aprende teoría musica y solfeo. Mejora tu interpretación y lectura musical',
      imageUrl: 'asdfasdfas',
      address: { streetName: 'Centro Ambiental', streetNumber: '' },
      externalUrl: 'https://google.cl',
      isFree: false,
    },
    {
      date: '2020-03-08',
      time: '20:30',
      title: 'Tercera Corrida Familiar',
      description: 'Aprende teoría musica y solfeo. Mejora tu interpretación y lectura musical',
      imageUrl: 'asdfasdfas',
      address: {
        streetName: 'Centro Deportivo Patricio Mekis',
        streetNumber: '',
      },
      externalUrl: 'https://google.cl',
      isFree: true,
    },
  ]

  return (
    <section className={styles.events}>
      <Title>EVENTOS</Title>

      <img
        className={styles.eventsImg}
        src='https://rancagua.cl/plataforma/upload/fotos/389785d677ac78a18cedff122c8ec816.jpg'
        alt={events[0].title}
      />
      <List
        className='eventsList'
        dataSource={events}
        renderItem={item => (
          <List.Item actions={[<Icon type='right' />]}>
            <a className={styles.linkItem} href={item.externalUrl}>
              <List.Item.Meta
                avatar={<DateSubscriber date={item.date} imageUrl={item.imageUrl} small />}
                title={item.title}
                description={
                  <div className={styles.dataRows}>
                    <DataRow
                      icon='environment'
                      theme='outlined'
                      text={`${item.address.streetName}`}
                    />
                    <DataRow icon='clock-circle' theme='outlined' text={`${item.time}`} />
                    <DataRow
                      icon='dollar'
                      theme='outlined'
                      text={item.isFree ? 'Gratuito' : 'Pagado'}
                    />
                  </div>
                }
              />
            </a>
          </List.Item>
        )}
      />
      <div className={styles.viewMore}>
        <ViewMoreButton text='Ver todos los eventos' />
      </div>
    </section>
  )
}

export default Events
