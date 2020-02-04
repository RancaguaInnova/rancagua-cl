import React from 'react'
import { Row, Col, Icon, Avatar } from 'antd'
import Title from 'components/Title'
import './styles.sass'

const Contact: React.FC = () => {
  return (
    <section className=''>
      <Title style={{ fontWeight: 'bold' }}>CONTACTO</Title>
      <div>
        <Row className='primaryRow row'>
          <Col span={8}>
            <Avatar src='/assets/images/icons/youtube-inverse.png' />
          </Col>
          <Col span={8}>
            <Avatar src='/assets/images/icons/twitter-inverse.png' />
          </Col>
          <Col span={8}>
            <Avatar src='/assets/images/icons/facebook-inverse.png' />
          </Col>
        </Row>
        <Row className='secondaryRow row' style={{ lineHeight: 0.7 }}>
          <Col span={8}>
            <Avatar shape='square' src='/assets/images/icons/contact-inverse.png' />
          </Col>
          <Col span={16}>
            <h3>Central Telefónica</h3>
            <h4>800 20 90 90</h4>
          </Col>
        </Row>
        <Row className='secondaryRow row'>
          <Col span={8}>
            <Avatar shape='square' src='/assets/images/icons/buildings-inverse.png' />
          </Col>
          <Col span={16}>
            <h3>
              EDIFICIOS <b>MUNICIPALES</b>
            </h3>
          </Col>
        </Row>
        <Row className='defaultRow row'>
          <Col span={8}>
            <Avatar shape='square' size='large' src='/assets/images/icons/rancagua-circle.png' />
          </Col>
          <Col span={8}>
            <Avatar
              shape='square'
              size='large'
              src='/assets/images/icons/certification-circle.png'
            />
          </Col>
          <Col span={8}>
            <Avatar shape='square' size='large' src='/assets/images/icons/store-circle.png' />
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Contact
