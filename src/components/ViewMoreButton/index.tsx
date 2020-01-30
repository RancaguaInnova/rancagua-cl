import React from 'react'
import { Button } from 'antd'
import styles from './styles.module.sass'

type Props = {
  text: string
}

const ViewMoreButton: React.FC<Props> = ({ text }) => {
  return (
    <Button type='default' className={styles.button}>
      {text}
    </Button>
  )
}

export default ViewMoreButton
