import React from 'react'
import { Row, Col, Icon, Typography } from 'antd'
import styles from './styles.module.sass'

const { Text } = Typography

type Props = {
  icon: string
  theme: 'filled' | 'outlined' | 'twoTone'
  text: string
}

const DataRow: React.FC<Props> = ({ icon, theme, text }) => {
  return (
    <Row className={styles.container}>
      <Col xs={2}>
        <Icon type={icon} theme={theme} />
      </Col>
      <Col xs={20}>
        <Text strong>{text}</Text>
      </Col>
    </Row>
  )
}

export default DataRow
