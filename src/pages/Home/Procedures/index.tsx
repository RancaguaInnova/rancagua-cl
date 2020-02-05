import React from 'react'
import './styles.sass'
import Title from 'components/Title'
import ItemsList, { Item } from 'components/ItemsList'
import ViewMoreButton from 'components/ViewMoreButton'

const Procedures: React.FC = () => {
  const iconUrl = '/assets/images/icons/'
  const procedures: Item[] = [
    {
      title: 'PAGOS',
      avatar: { url: `${iconUrl}pay.png` },
      link: '',
    },
    {
      title: 'PATENTES',
      avatar: { url: `${iconUrl}plate.png` },
      link: '',
    },
    {
      title: 'LICENCIA DE CONDUCIR',
      avatar: { url: `${iconUrl}car.png` },
      link: '',
    },
    {
      title: 'SOLICITUDES',
      avatar: { url: `${iconUrl}requests.png` },
      link: '',
    },
    {
      title: 'CERTIFICADOS',
      avatar: { url: `${iconUrl}document.png` },
      link: '',
    },
  ]

  return (
    <section className='section procedures'>
      <Title style={{ fontWeight: 'bold' }}>TRÁMITES</Title>

      <ItemsList items={procedures} />

      <ViewMoreButton text='Ver todos los Trámites' />
    </section>
  )
}

export default Procedures
