import React from 'react'
import styles from './styles.module.css'

import Title from './../../components/Title'

const Services: React.FC = () => {
  const services = [
    {
      title: 'MAPAS',
      icon: '',
      link: '',
    },
    {
      title: 'ORGANIZACIONES COMUNITARIAS',
      icon: '',
      link: '',
    },
    {
      title: 'DECRETOS MUNICIPALES',
      icon: '',
      link: '',
    },
    {
      title: 'TRANSPARENCIA',
      icon: '',
      link: '',
    },
    {
      title: 'BOLSA DE EMPLEO',
      icon: '',
      link: '',
    },
  ]

  return (
    <section className={styles.section}>
      <Title style={{ fontWeight: 'bold' }}>SERVICIOS</Title>

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
      <Button block className='btn-more'>
        Ver todos los Servicios
      </Button>
    </section>
  )
}

export default Services
