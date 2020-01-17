import React from 'react'
import './styles.css'

import DesktopHeader from './desktop'
import MobileHeader from './mobile'

export interface HeaderProps {
  isMobile: boolean
}

const HeaderComponent: React.FC<HeaderProps> = ({ isMobile }) => {
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

export default HeaderComponent
