import React from 'react'
import './styles.sass'
import { List, Avatar, Icon } from 'antd'
import Title from 'components/Title'
import ViewMoreButton from 'components/ViewMoreButton'

const Procedures: React.FC = () => {
  const procedures = [
    {
      title: 'PAGOS',
      icon: '',
      link: '',
    },
    {
      title: 'PATENTES',
      icon: '',
      link: '',
    },
    {
      title: 'LICENCIA DE CONDUCIR',
      icon: '',
      link: '',
    },
    {
      title: 'SOLICITUDES',
      icon: '',
      link: '',
    },
    {
      title: 'CERTIFICADOS',
      icon: '',
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
