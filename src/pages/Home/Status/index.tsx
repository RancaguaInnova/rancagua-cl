import React from 'react'
import { List, Avatar, Badge, Icon } from 'antd'
import moment from 'moment'
import 'moment/locale/es'
import './styles.sass'

import Title from 'components/Title'

const Status: React.FC = () => {
  const title = (
    <div>
      <strong>
        {moment()
          .format('dddd')
          .toUpperCase()}
      </strong>
      {moment()
        .format(' DD MMMM')
        .toUpperCase()}
    </div>
  )
  const iconUrl = '/assets/images/icons/'

  const cards = [
    {
      icon: `${iconUrl}garbage-collector.png`,
      title: 'BASURA',
      description: 'Los camiones de basura se encuentran con un funcionamiento normal',
      warning: false,
      link: '',
    },
    {
      icon: `${iconUrl}traffic.png`,
      title: 'SEMÁFOROS',
      description: 'Algunos semáforos se encuentran con problemas',
      warning: true,
      link: '',
    },
    {
      icon: `${iconUrl}public-buildings.png`,
      title: 'EDIFICIOS PÚBLICOS',
      description:
        'Todos los edificios municipales se encuentran abiertos en los horarios normales de funcionamiento',
      warning: false,
      link: '',
    },
    {
      icon: `${iconUrl}earth.png`,
      title: 'MEDIO AMBIENTE',
      description:
        'Todos los edificios municipales se encuentran abiertos en los horarios normales de funcionamiento',
      warning: false,
      link: '',
    },
  ]

  const warningAlert = {
    title: 'SEMÁFOROS',
    subtitle: 'PRESENTAN PROBLEMAS DE FUNCIONAMIENTO EN EJE ALAMEDA',
    detail: 'Para mas información favor contactar al fono +56 9 5665454',
    link: '',
  }

  return (
    <div>
      <section className='section status'>
        <Title>{title}</Title>
        {/*  {cards.map(card => statusCard(card))} */}
        <List
          grid={{
            gutter: 16,
            xs: 1,
          }}
          dataSource={cards}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <div>
                    <Avatar size={60} src={item.icon} />
                    {item.warning && (
                      <Badge
                        count={
                          <Icon type='exclamation-circle' theme='filled' className='badge-icon' />
                        }
                      />
                    )}
                  </div>
                }
                title={<a href={item.link}>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </section>
      {warningAlert && (
        <div className='warning-msg'>
          <h3>{warningAlert.title}</h3>
          <p>{warningAlert.subtitle}</p>
          <p className='detail'>{warningAlert.detail}</p>
        </div>
      )}
    </div>
  )
}

export default Status
