import React from 'react'
import moment from 'moment'
import Title from 'components/Title'
import DataRow from 'components/Events/DataRow'
import ViewMoreButton from 'components/ViewMoreButton'
import { Divider, List, Icon, Typography } from 'antd'
import styles from './styles.module.sass'

const { Text } = Typography

const News: React.FC = () => {
  const news = [
    {
      id: 'afs24fasdf24f',
      title: 'Rancagua primera ciudad con PWA',
      subtitle: 'Rancagua lidera el uso de tecnologías en la interacción con los ciudadanos.',
      body: 'Rancagua lidera el uso de tecnologías. Rancagua primera ciudad con PWA',
      publishedAt: '2020-02-07',
      departmentId: 'fDadfWb32',
      tags: ['tecnología', 'internet'],
      imageUrl: 'https://rancagua.cl/plataforma/upload/fotos/389785d677ac78a18cedff122c8ec816.jpg',
      externalUrl: 'https://google.cl',
    },
    {
      id: 'afs24fasdf24f',
      title: 'Rancagua entrega noticias',
      subtitle:
        'A través de esta sección te enterarás de todo lo que ocurre en la comuna de Rancagua.',
      body: 'Rancagua entrega noticias: A través de esta sección te enterarás de todo',
      publishedAt: '2020-02-14',
      departmentId: 'dsCwRG0148',
      imageUrl: 'https://rancagua.cl/plataforma/upload/fotos/389785d677ac78a18cedff122c8ec816.jpg',
      tags: ['noticias', 'actualidad'],
      externalUrl: 'https://google.cl',
    },
    {
      id: 'afs24fasdf24f',
      title: 'Rancagua entrega noticias',
      subtitle: 'A través de esta sección te enterarás de todo',
      body: 'Rancagua entrega noticias: A través de esta sección te enterarás de todo',
      publishedAt: '2020-02-14',
      departmentId: 'dsCwRG0148',
      imageUrl: 'https://rancagua.cl/plataforma/upload/fotos/389785d677ac78a18cedff122c8ec816.jpg',
      tags: ['noticias', 'actualidad'],
      externalUrl: 'https://google.cl',
    },
  ]

  return (
    <section className={styles.news}>
      <Title>NOTICIAS</Title>

      <img
        className={styles.newsImg}
        src='https://rancagua.cl/plataforma/upload/fotos/389785d677ac78a18cedff122c8ec816.jpg'
        alt={news[0].title}
      />
      <List
        className='newsList'
        dataSource={news}
        renderItem={item => (
          <List.Item actions={[<Icon type='right' />]}>
            <a className={styles.linkItem} href={item.externalUrl}>
              <List.Item.Meta
                title={item.title}
                description={
                  <div className={styles.dataRows}>
                    <div className={styles.subtitle}>
                      <Text strong>{item.subtitle}</Text>
                    </div>
                    <DataRow
                      icon='calendar'
                      theme='outlined'
                      text={`${moment(item.publishedAt).format('DD-MM-YYYY')}`}
                    />
                  </div>
                }
              />
            </a>
          </List.Item>
        )}
      />
      <div className={styles.viewMore}>
        <ViewMoreButton text='Ver todas las noticias' />
      </div>
    </section>
  )
}

export default News
