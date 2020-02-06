import React from 'react'
import { Button } from 'antd'
import styles from './styles.module.sass'

type Props = {
  text: string
  onClick?: any
}

const ViewMoreButton: React.FC<Props> = ({ text, onClick = () => {} }) => {
  return (
    <div className={styles.container}>
      <Button block type='default' className={styles.button} onClick={onClick}>
        {text.toUpperCase()}
      </Button>
    </div>
  )
}

export default ViewMoreButton
