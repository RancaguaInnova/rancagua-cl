import React from 'react'
import { Row, Col, Icon, Typography } from 'antd'

const { Text } = Typography

type Props = {
  icon: string
  theme: 'filled' | 'outlined' | 'twoTone'
  text: string
}

const DataRow: React.FC<Props> = ({ icon, theme, text }) => {
  return (
    <Row>
      <Col xs={3}>
        <Icon type={icon} theme={theme} />
      </Col>
      <Col xs={19}>
        <Text strong>{text}</Text>
      </Col>
    </Row>
  )
}

export default DataRow
