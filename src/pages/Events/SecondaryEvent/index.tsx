import React from 'react'
import { Row, Col } from 'antd'
import { Typography } from 'antd'
import DataRow from '../DataRow'
import DateSubscriber from '../DateSubscriber'
import RightArrow from '../RightArrow'
import styles from './styles.module.sass'

const { Title } = Typography

type Props = {
  event: {
    date: string
    title: string
    address: {
      streetName: string
      streetNumber: string
    }
  }
}

const MainEvent: React.FC<Props> = ({ event }) => {
  const {
    date,
    title,
    address: { streetName, streetNumber },
  } = event

  return (
    <Row className={styles.container}>
      <Col xs={4}>
        <DateSubscriber date={date} small />
      </Col>
      <Col xs={18} className={styles.mainData}>
        <Title level={3} className={styles.eventTitle}>
          {title}
        </Title>
        <DataRow icon='environment' theme='outlined' text={`${streetName}, ${streetNumber}`} />
        <DataRow icon='clock-circle' theme='outlined' text='19:00 a 21:00' />
        <DataRow icon='dollar' theme='outlined' text='Gratuito' />
      </Col>
      <RightArrow />
    </Row>
  )
}

export default MainEvent
