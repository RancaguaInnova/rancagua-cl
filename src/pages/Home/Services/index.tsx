import React from 'react'
import './styles.sass'
import { List, Avatar, Icon } from 'antd'
import Title from 'components/Title'
import ViewMoreButton from 'components/ViewMoreButton'

const Services: React.FC = () => {
  const iconUrl = '/assets/images/icons/'
  const services = [
    {
      title: 'MAPAS',
      icon: `${iconUrl}map.png`,
      link: '',
    },
    {
      title: 'ORGANIZACIONES COMUNITARIAS',
      icon: `${iconUrl}comunity.png`,
      link: '',
    },
    {
      title: 'DECRETOS MUNICIPALES',
      icon: `${iconUrl}document.png`,
      link: '',
    },
    {
      title: 'TRANSPARENCIA',
      icon: `${iconUrl}book.png`,
      link: '',
    },
    {
      title: 'BOLSA DE EMPLEO',
      icon: `${iconUrl}student.png`,
      link: '',
    },
  ]

  return (
    <section className='section services'>
      <Title>SERVICIOS</Title>

      <List
        className='services-list'
        dataSource={services}
        renderItem={item => (
          <List.Item actions={[<Icon type='right' />]}>
            <List.Item.Meta
              avatar={<Avatar src={item.icon} />}
              title={<a href={item.link}>{item.title}</a>}
            />
          </List.Item>
        )}
      />

      <ViewMoreButton text='Ver todos los Servicios' />
    </section>
  )
}

export default Services
