import React from 'react'
import './styles.sass'
import Title from 'components/Title'
import ViewMoreButton from 'components/ViewMoreButton'
import ItemsList, { Item } from 'components/ItemsList'

const Services: React.FC = () => {
  const iconUrl = '/assets/images/icons/'
  const services: Item[] = [
    {
      title: 'MAPAS',
      avatar: { url: `${iconUrl}map.png` },
      link: '',
    },
    {
      title: 'ORGANIZACIONES COMUNITARIAS',
      avatar: { url: `${iconUrl}comunity.png` },
      link: '',
    },
    {
      title: 'DECRETOS MUNICIPALES',
      avatar: { url: `${iconUrl}document.png` },
      link: '',
    },
    {
      title: 'TRANSPARENCIA',
      avatar: { url: `${iconUrl}book.png` },
      link: '',
    },
    {
      title: 'BOLSA DE EMPLEO',
      avatar: { url: `${iconUrl}student.png` },
      link: '',
    },
  ]

  return (
    <section className='section services'>
      <Title>SERVICIOS</Title>

      <ItemsList items={services} />

      <ViewMoreButton text='Ver todos los Servicios' />
    </section>
  )
}

export default Services
