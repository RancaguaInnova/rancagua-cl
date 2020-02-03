import React from 'react'
import { Col, Icon } from 'antd'
import styles from './styles.module.sass'

type Props = {
  small?: boolean
}

const RightArrow: React.FC<Props> = ({ small }) => (
  <Col xs={2} className={small ? styles.smallArrow : styles.arrow}>
    <Icon type='right' theme='outlined' />
  </Col>
)

export default RightArrow
