import React from 'react'
import styles from './styles.module.sass'
import { List, Avatar, Icon } from 'antd'

export type Item = {
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
}

type Props = {
  items: Item[]
  style?: any
}

const ItemsList: React.FC<Props> = ({ items, style = {} }) => {
  const defaultActions = [<Icon type='right' />]
  return (
    <div className={styles.listContainer}>
      <List
        style={style}
        className={styles.itemsList}
        dataSource={items}
        renderItem={(item: Item) => {
          // Actions
          const actions = item.actions ? item.actions : defaultActions

          // Support avatar & icon

          // Icon
          const icon =
            item.icon && item.icon.type ? (
              <Icon type={item.icon.type} className={styles.icon} />
            ) : null
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
            <List.Item actions={actions} className={styles.listItem}>
              <List.Item.Meta
                className={styles.meta}
                avatar={avatar}
                title={
                  <a href={item.link} className={styles.metaTitle}>
                    {item.title}
                  </a>
                }
                description={description}
              />
            </List.Item>
          )
        }}
      />
    </div>
  )
}

export default ItemsList
