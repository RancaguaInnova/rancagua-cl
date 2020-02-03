import React from 'react'
import { Row, Col } from 'antd'
import { Typography } from 'antd'
import RightArrow from '../RightArrow'
import DataRow from '../../Events/DataRow'
import moment from 'moment'
import styles from './styles.module.sass'

const { Title } = Typography

type Props = {
  news: {
    publishedAt: string
    title: string
  }
}

const MainEvent: React.FC<Props> = ({ news }) => {
  const { publishedAt, title } = news

  return (
    <Row className={styles.container}>
      <Col xs={22} className={styles.mainData}>
        <Title level={3} className={styles.newsTitle}>
          {title}
        </Title>
        <DataRow icon='calendar' theme='outlined' text={moment(publishedAt).format('DD-MM-YYYY')} />
      </Col>
      <RightArrow small />
    </Row>
  )
}

export default MainEvent
