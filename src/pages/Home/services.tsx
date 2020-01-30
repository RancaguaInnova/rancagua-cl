import React from 'react'
import styles from './styles.module.css'

import Title from './../../components/Title'

const Services: React.FC = () => {
  return (
    <section className={styles.section}>
      <Title style={{ fontWeight: 'bold' }}>SERVICIOS</Title>
    </section>
  )
}

export default Services
