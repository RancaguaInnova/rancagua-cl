import React from 'react'
import './styles.sass'

import { List, Avatar, Button, Icon } from 'antd'
import Title from 'components/Title'
const News: React.FC = () => {
  const news: any[] = [
    {
      title: 'Noticia 1',
      description: 'Acá la descripción de la noticia',
      link: '',
      image: 'https://rancagua.cl/plataforma/upload/fotos/389785d677ac78a18cedff122c8ec816.jpg',
    },
    {
      title: 'Noticia 2',
      description: 'Acá la descripción de la noticia',
      link: '',
      image: 'https://rancagua.cl/plataforma/upload/fotos/389785d677ac78a18cedff122c8ec816.jpg',
    },
  ]

  return (
    <section className='section'>
      <Title style={{ fontWeight: 'bold' }}>NOTICIAS</Title>
      <img
        className='newsImg'
        src='https://rancagua.cl/plataforma/upload/fotos/389785d677ac78a18cedff122c8ec816.jpg'
      />
      <List
        className='news-list'
        dataSource={news}
        renderItem={item => (
          <List.Item actions={[<Icon type='right' />]}>
            <List.Item.Meta
              title={<a href={item.link}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
      <Button block className='btn-more'>
        Ver todas las noticias
      </Button>
    </section>
  )
}

export default News
