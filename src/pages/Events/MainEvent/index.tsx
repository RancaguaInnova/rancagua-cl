import React from 'react'
import { Row, Col } from 'antd'
import { Typography } from 'antd'
import DataRow from '../DataRow'
import './styles.sass'

const { Title, Text } = Typography

const MainEvent: React.FC = (props: any) => {
  return (
    <Row className='container'>
      <Col xs={8}>Fecha</Col>
      <Col xs={12} className='main-data'>
        <Row>
          <Title level={4} className='event-title'>
            Taller de Teoría y Solfeo
          </Title>
        </Row>
        <Row>
          <DataRow />
        </Row>
      </Col>
    </Row>
  )
}

export default MainEvent