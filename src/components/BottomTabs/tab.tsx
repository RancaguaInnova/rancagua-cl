import React from 'react'
import { Col, Icon } from 'antd'
import './styles.sass'

export interface TabProps {
    onClick?: any
    icon: string
    text?: string
    selected?: boolean
    span?: number
    inlineText?: boolean
    offset?: number
}

const Tab: React.FC<TabProps> = ({
    onClick,
    icon,
    text = '',
    selected = false,
    span = 4,
    inlineText = false,
    offset = 0
}) => {
    return (
        <div>
            <Col span={span} offset={offset} className={`btn-box`}>
                <button className={`tab-btn`} onClick={onClick}>
                    <Icon type={icon} className={`icon ${selected ? '' : 'inactive'}`} />
                    {inlineText ? (
                        <span className={`icon-txt ${selected ? '' : 'inactive'}`}>{text}</span>
                    ) : (
                        <p className={`icon-txt ${selected ? '' : 'inactive'}`}>{text}</p>
                    )}
                </button>
            </Col>
        </div>
    )
}

export default Tab
