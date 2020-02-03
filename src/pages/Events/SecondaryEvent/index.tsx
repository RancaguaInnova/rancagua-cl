import React from 'react'
import { Row, Col } from 'antd'
import { Typography } from 'antd'
import DataRow from '../DataRow'
import DateSubscriber from '../DateSubscriber'
import RightArrow from '../RightArrow'
import styles from './styles.module.sass'

const { Title } = Typography

type Props = {
  date: string
  title: string
}

const MainEvent: React.FC<Props> = ({ date, title }) => {
  return (
    <Row className={styles.container}>
      <Col xs={4}>
        <DateSubscriber date={date} small />
      </Col>
      <Col xs={18} className={styles.mainData}>
        <Title level={3} className={styles.eventTitle}>
          {title}
        </Title>
        <DataRow icon='environment' theme='outlined' text='Centro Cultural Baquedano' />
        <DataRow icon='clock-circle' theme='outlined' text='19:00 a 21:00' />
        <DataRow icon='dollar' theme='outlined' text='Gratuito' />
      </Col>
      <RightArrow />
    </Row>
  )
}

export default MainEvent