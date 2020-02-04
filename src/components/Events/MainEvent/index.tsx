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
    imageUrl?: string
    address: {
      streetName: string
      streetNumber: string
    }
    isFree: boolean
  }
}

const MainEvent: React.FC<Props> = ({ event }) => {
  const {
    date,
    imageUrl,
    title,
    address: { streetName, streetNumber },
  } = event
  return (
    <Row className={styles.container}>
      <Col xs={6}>
        <DateSubscriber date={date} imageUrl={imageUrl} small={false} />
      </Col>
      <Col xs={16} className={styles.mainData}>
        <Title level={3} className={styles.eventTitle}>
          {title}
        </Title>
        <DataRow icon='environment' theme='outlined' text={streetName} />
        <DataRow icon='dollar' theme='outlined' text={streetNumber} />
      </Col>
      <RightArrow />
    </Row>
  )
}

export default MainEvent
