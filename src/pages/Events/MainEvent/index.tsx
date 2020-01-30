import React from 'react'
import { Row, Col } from 'antd'
import { Icon, Typography } from 'antd'
import DataRow from '../DataRow'
import DateSubscriber from '../DateSubscriber'
import styles from './styles.module.sass'

const { Title, Text } = Typography

type Props = {
  date: string
  title: string
  imageUrl: string
}

const MainEvent: React.FC<Props> = ({ date, title, imageUrl }) => {
  return (
    <Row className={styles.container}>
      <Col xs={5}>
        <DateSubscriber date={date} imageUrl={imageUrl} />
      </Col>
      <Col xs={18} className={styles.mainData}>
        <Title level={3} className={styles.eventTitle}>
          {title}
        </Title>
        <DataRow icon='environment' theme='outlined' text='Centro Cultural Baquedano' />
        <DataRow icon='clock-circle' theme='outlined' text='19:00 a 21:00' />
        <DataRow icon='dollar' theme='outlined' text='Gratuito' />
      </Col>
      <Col xs={1} className={styles.arrow}>
        <Icon type='right' theme='outlined' />
      </Col>
    </Row>
  )
}

export default MainEvent
