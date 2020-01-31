import React from 'react'
import { Row, Col } from 'antd'
import Title from 'components/Title'
import './styles.sass'

const Contact: React.FC = () => {
  return (
    <section className=''>
      <Title style={{ fontWeight: 'bold' }}>CONTACTO</Title>
      <div>
        <Row className='primaryRow row'>
          <Col span={8}>logo_youtube</Col>
          <Col span={8}>logo_twitter</Col>
          <Col span={8}>logo_facebook</Col>
        </Row>
        <Row className='secondaryRow row' style={{ lineHeight: 0.7 }}>
          <Col span={8}>icon</Col>
          <Col span={16}>
            <h3>Central Telefónica</h3>
            <h4>800 20 90 90</h4>
          </Col>
        </Row>
        <Row className='secondaryRow row'>
          <Col span={8}>icon</Col>
          <Col span={16}>
            <h3>
              EDIFICIOS <b>MUNICIPALES</b>
            </h3>
          </Col>
        </Row>
        <Row className='defaultRow row'>
          <Col span={8}>logo_rancagua</Col>
          <Col span={8}>logo_cert</Col>
          <Col span={8}>app_store</Col>
        </Row>
      </div>
    </section>
  )
}

export default Contact
