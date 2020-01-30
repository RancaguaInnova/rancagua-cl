import React from 'react'
import { Row, Col, Typography } from 'antd'

const { Text } = Typography

const DataRow: React.FC = (props: any) => {
  return (
    <Row>
      <Col span={5}>Icon</Col>
      <Col span={19}>
        <Text strong>Centro Cultural Baquedano</Text>
      </Col>
    </Row>
  )
}

export default DataRow
