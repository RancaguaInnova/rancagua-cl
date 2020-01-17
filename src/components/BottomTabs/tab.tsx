import React from 'react'
import { Col, Icon } from 'antd'
import './styles.css'

export interface TabProps {
  onClick?: any
  icon: string
  text?: string
  selected?: boolean
  span?: number
}

const Tab: React.FC<TabProps> = ({ onClick, icon, text = '', selected = false, span = 4 }) => {
  return (
    <div>
      <Col span={span} className={`btn-box`}>
        <button className={`tab-btn ${selected ? 'active' : ''}`} onClick={onClick}>
          <Icon type={icon} className='icon' />
          <p className='icon-txt'>{text}</p>
        </button>
      </Col>
    </div>
  )
}

export default Tab
