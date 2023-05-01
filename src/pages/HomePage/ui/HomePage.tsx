import React from 'react'

import c from './HomePage.module.scss'
import { LeftSide } from '../../../widgets/LeftSideMainPage/ui/LeftSide'
import { RightSide } from '../../../widgets/RightSideMainPage/ui/RightSide'
import { useAppSelector } from 'app/model/hook/MainHooks'
import { useAuthorization } from 'app/model/hook/useAuth'

export default function HomePage() {
  const languages = useAppSelector((store) => store.homePage.languages)
  useAuthorization('/')
  return (
    <div className={c.containerHomePage}>
      <LeftSide />
      <RightSide dialects={languages[0].dialects} />
    </div>
  )
}
