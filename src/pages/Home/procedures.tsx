import React from 'react'
import styles from './styles.module.css'
import { List, Avatar, Button } from 'antd'
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
    <section className={[styles.section, styles.procedures].join(' ')}>
      <Title style={{ fontWeight: 'bold' }}>TRÁMITES</Title>

      <List
        className={styles['procedures-list']}
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

      <Button block className='btn-more'>
        Ver todos los Trámites
      </Button>
    </section>
  )
}

export default Procedures
