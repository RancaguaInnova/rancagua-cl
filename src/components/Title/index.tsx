import React from 'react'
import './styles.sass'

export interface TitleProps {
  children: any
  txt?: string
  style?: any
}

const Title: React.FC<TitleProps> = ({ children, txt, style = {} }) => {
  return (
    <h1 className='title' style={{ ...style }}>
      {txt ? txt : children}
    </h1>
  )
}

export default Title
