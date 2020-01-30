import React, { useState } from 'react'
import { Col, Row, Icon } from 'antd'
import styles from './styles.module.sass'
import moment from 'moment'

type Props = {
  date: string
  imageUrl?: string
  small: boolean
}

const DateSubscriber: React.FC<Props> = ({ date, imageUrl, small }) => {
  const [momentDate, setMomentDate] = useState(() => {
    const momented = moment(date)
    return {
      day: momented.format('DD'),
      month: momented
        .format('MMM')
        .toUpperCase()
        .slice(0, 3),
    }
  })

  return (
    <Row className={styles.container} align='middle'>
      <Col className={small ? styles.daySmall : styles.day} span={24}>
        {momentDate.day}
      </Col>
      <Col className={small ? styles.monthSmall : styles.month} span={24}>
        {momentDate.month}
      </Col>
      <Col className={small ? styles.scheduleIconSmall : styles.scheduleIcon} span={24}>
        <Icon type={small ? 'calendar' : 'schedule'} theme='outlined' />
      </Col>
    </Row>
  )
}

export default DateSubscriber
