import React from 'react'
import { List, Avatar } from 'antd'
import moment from 'moment'
import 'moment/locale/es'
import './styles.module.css'

import Title from './../../components/Title'

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

  const cards = [
    {
      icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: 'BASURA',
      description: 'Los camiones de basura se encuentran con un funcionamiento normal',
      warning: false,
      link: '',
    },
    {
      icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: 'SEMÁFOROS',
      description: 'Algunos semáforos se encuentran con problemas',
      warning: false,
      link: '',
    },
    {
      icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: 'EDIFICIOS PÚBLICOS',
      description:
        'Todos los edificios municipales se encuentran abiertos en los horarios normales de funcionamiento',
      warning: false,
      link: '',
    },
    {
      icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
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

  const statusCard = (val: any) => <div> aca el val del card</div>

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
                avatar={<Avatar src={item.icon} />}
                title={<a href={item.link}>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </section>
      <div className='warning-msg'>
        <h3>{warningAlert.title}</h3>
        <p>{warningAlert.subtitle}</p>
        <p className='detail'>{warningAlert.detail}</p>
      </div>
    </div>
  )
}

export default Status
