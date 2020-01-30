import React from 'react'
import { Col, Row, Icon } from 'antd'
import styles from './styles.module.sass'

type Props = {
  date: string
  imageUrl: string
}

const DateSubscriber: React.FC<Props> = ({ date, imageUrl }) => {
  const getMonthAndDay = () => {
    const splited = date.split('-')
    return { month: splited[1], day: splited[2] }
  }

  return (
    <Row className={styles.container} align='middle'>
      <Col className={styles.day} span={24}>
        {getMonthAndDay().day}
      </Col>
      <Col className={styles.month} span={24}>
        {getMonthAndDay().month}
      </Col>
      <Col className={styles.scheduleIcon} span={24}>
        <Icon type='schedule' theme='outlined' />
      </Col>
    </Row>
  )
}

export default DateSubscriber
