import React from 'react'
import './styles.sass'
import { List, Avatar, Icon } from 'antd'
import Title from 'components/Title'
import ViewMoreButton from 'components/ViewMoreButton'

const Procedures: React.FC = () => {
  const iconUrl = '/assets/images/icons/'
  const procedures = [
    {
      title: 'PAGOS',
      icon: `${iconUrl}pay.png`,
      link: '',
    },
    {
      title: 'PATENTES',
      icon: `${iconUrl}plate.png`,
      link: '',
    },
    {
      title: 'LICENCIA DE CONDUCIR',
      icon: `${iconUrl}car.png`,
      link: '',
    },
    {
      title: 'SOLICITUDES',
      icon: `${iconUrl}requests.png`,
      link: '',
    },
    {
      title: 'CERTIFICADOS',
      icon: `${iconUrl}document.png`,
      link: '',
    },
  ]

  return (
    <section className='section procedures'>
      <Title style={{ fontWeight: 'bold' }}>TRÁMITES</Title>

      <List
        className='procedures-list'
        dataSource={procedures}
        renderItem={item => (
          <List.Item actions={[<Icon type='right' />]}>
            <List.Item.Meta
              avatar={<Avatar src={item.icon} />}
              title={<a href={item.link}>{item.title}</a>}
            />
          </List.Item>
        )}
      />
      <ViewMoreButton text='Ver todos los Trámites' />
    </section>
  )
}

export default Procedures
