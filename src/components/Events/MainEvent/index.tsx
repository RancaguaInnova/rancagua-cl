import React from 'react'
import { Icon, Typography } from 'antd'
import styles from './styles.module.scss'

const { Title } = Typography

type Props = {
  event: {
    date: string
    title: string
    imageUrl: string
    color?: string
  }
}

const MainEvent: React.FC<Props> = ({ event }) => {
  const { date, imageUrl, color, title } = event
  return (
    <div className={styles.gridContainer}>
      <section className={styles.date}>Date</section>
      <main className={styles.title}>{title}</main>
      <section className={styles.data}>Data</section>
      <section className={styles.arrowContainer}>
        <Icon type='right' theme='outlined' className={styles.arrow} />
      </section>
    </div>
  )
}

export default MainEvent
