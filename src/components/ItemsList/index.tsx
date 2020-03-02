import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.sass'
import { List, Avatar, Icon } from 'antd'

export type Item = {
    id: string
    actions?: any[]
    avatar?: {
        url: string
    }
    icon?: {
        type: string
    }
    title: string
    link: string
    description?: string
    ranking?: number
}

type Props = {
    items: Item[]
    style?: any
}

const ItemsList: React.FC<Props> = ({ items, style = {} }) => {
    console.log('style', style)
    const defaultActions = [ <Icon type='right' /> ]
    return (
        <div className={styles.listContainer}>
            <List
                style={style}
                className={`${styles.itemsList} ${style.list}`}
                dataSource={items}
                renderItem={(item: Item) => {
                    // Actions
                    const actions = item.actions ? item.actions : defaultActions

                    // Support avatar & icon

                    // Icon
                    const icon =
                        item.icon && item.icon.type ? <Icon type={item.icon.type} className={styles.icon} /> : null
                    // Avatar
                    const avatar =
                        item.avatar && item.avatar.url ? (
                            <Avatar size='large' src={item.avatar.url} className={styles.avatar} />
                        ) : (
                            icon
                        )

                    // Description
                    const description = item.description || ''

                    return (
                        <Link to={item.link}>
                            <List.Item actions={actions} className={`${styles.listItem} ${style.listItem}`}>
                                <List.Item.Meta
                                    className={`${styles.meta} ${style.meta}`}
                                    avatar={avatar}
                                    title={<p className={`${styles.metaTitle} ${style.metaTitle}`}>{item.title}</p>}
                                    description={description}
                                />
                            </List.Item>
                        </Link>
                    )
                }}
            />
        </div>
    )
}

export default ItemsList
