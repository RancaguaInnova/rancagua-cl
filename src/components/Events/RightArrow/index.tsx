import React from 'react'
import { Col, Icon } from 'antd'
import styles from './styles.module.sass'

const RightArrow: React.FC = () => (
  <Col xs={2} className={styles.arrow}>
    <Icon type='right' theme='outlined' className={styles.arrow} />
  </Col>
)

export default RightArrow
