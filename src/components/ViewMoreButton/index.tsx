import React from 'react'
import { Button } from 'antd'
import styles from './styles.module.sass'

type Props = {
  text: string
}

const ViewMoreButton: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.container}>
      <Button block type='default' className={styles.button}>
        {text.toUpperCase()}
      </Button>
    </div>
  )
}

export default ViewMoreButton
