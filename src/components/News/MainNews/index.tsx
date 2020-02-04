import React from 'react'
import { Row, Col } from 'antd'
import { Typography } from 'antd'
import DataRow from '../../Events/DataRow'
import RightArrow from '../RightArrow'
import moment from 'moment'
import styles from './styles.module.sass'

const { Title, Text } = Typography

type Props = {
  news: {
    title: string
    body: string
    publishedAt: string
    imageUrl: string
  }
}

const MainNews: React.FC<Props> = ({ news }) => {
  const { publishedAt, imageUrl, title, body } = news
  return (
    <Row className={styles.container}>
      <Col xs={24}>
        <img src={imageUrl} alt='Imagen Noticia Principal' className={styles.image} />
      </Col>
      <Col xs={22} className={styles.mainData}>
        <Title level={3} className={styles.newsTitle}>
          {title}
        </Title>
        <Text strong className={styles.newsSubTitle}>
          {body}
        </Text>
        <div className={styles.dateContainer}>
          <DataRow
            icon='calendar'
            theme='outlined'
            text={moment(publishedAt).format('DD-MM-YYYY')}
          />
        </div>
      </Col>
      <RightArrow />
    </Row>
  )
}

export default MainNews
