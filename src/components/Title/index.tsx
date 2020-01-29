import React from 'react'
import './styles.css'

export interface TitleProps {
  children: any
  txt?: string
  color?: string
  style?: any
}

const Title: React.FC<TitleProps> = ({ children, color, txt, style = {} }) => {
  const txtColor = color ? color : '#ED1847'
  return (
    <h1 className='title' style={{ ...style, color: txtColor }}>
      {txt ? txt : children}
    </h1>
  )
}

export default Title
