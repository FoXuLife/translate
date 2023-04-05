import React, { useState } from 'react'

import c from './SideBarUserProfile.module.scss'
import { Logo } from '../../../shared/Logo/ui/Logo'
import Li from '../../../shared/LiItem/ui/LiItem'

import ava from './owl.png'

import { BsTranslate, BsClockHistory } from 'react-icons/bs'
import { SearchPanel } from 'entities/SearchPanel/ui/SearchPanel'
import BurgerMenu from 'entities/BurgerMenu/ui/BurgerMenu'

type TProps = {
  children: React.ReactNode
}

export const SideBarUserProfile: React.FC<TProps> = ({ children }) => {
  const [isOpened, setisOpened] = useState(false)
  return (
    <div className={c.container}>
      <div className={c.sideBar}>
        <div className={c.logo}>
          <Logo isTextBellow />
          <p>Owl</p>
        </div>
        <nav>
          <ul>
            <Li href="my-translate" Icon={<BsClockHistory />}>
              Мои Переводы
            </Li>
            <Li href="" Icon={<BsTranslate />}>
              Перевести
            </Li>
          </ul>
        </nav>
        <div className={c.user}>
          <img src={ava} alt="" srcSet="" />
          <p className={c.name}>Nikita</p>
          <p className={c.email}>nik.kol.2015@mail.ru</p>
        </div>
      </div>
      <article>
        <div className={c.searchBlock}>
          <SearchPanel />
          <div className={c.hiddenBlock}>
            <BurgerMenu isOpened={isOpened} setIsOpened={setisOpened}>
              <a href="my-translate">Мои Переводы</a>
              <a href="">Перевести</a>
            </BurgerMenu>
          </div>
        </div>
        {children}
      </article>
    </div>
  )
}
