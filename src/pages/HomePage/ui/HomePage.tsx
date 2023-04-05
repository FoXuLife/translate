import React from 'react'

import c from './HomePage.module.scss'
import { LeftSide } from '../../../widgets/LeftSideMainPage/ui/LeftSide'
import { RightSide } from '../../../widgets/RightSideMainPage/ui/RightSide'

export default function HomePage() {
  return (
    <div className={c.containerHomePage}>
      <LeftSide />
      <RightSide/>
    </div>
  )
}
