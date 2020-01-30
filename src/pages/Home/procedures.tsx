import React from 'react'
import './styles.module.css'
import { List, Avatar } from 'antd'
import Title from './../../components/Title'

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
        grid={{
          gutter: 16,
          xs: 1,
        }}
        dataSource={procedures}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.icon} />}
              title={<a href={item.link}>{item.title}</a>}
            />
          </List.Item>
        )}
      />
    </section>
  )
}

export default Procedures
