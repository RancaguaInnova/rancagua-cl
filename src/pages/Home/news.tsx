import React from 'react'
import styles from './styles.module.css'

import Title from './../../components/Title'
const News: React.FC = () => {
  return (
    <div>
      <section className={[styles.section, styles.procedures].join(' ')}>
        <Title style={{ fontWeight: 'bold' }}>NOTICIAS</Title>
      </section>
    </div>
  )
}

export default News
