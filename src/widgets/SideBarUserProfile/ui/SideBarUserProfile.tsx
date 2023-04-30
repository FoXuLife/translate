import React, { useState } from 'react'

import c from './SideBarUserProfile.module.scss'
import { Logo } from '../../../shared/Logo/ui/Logo'
import Li from '../../../shared/LiItem/ui/LiItem'

import ava from './owl.png'

import { BsTranslate, BsClockHistory } from 'react-icons/bs'
import { HiOutlineUserCircle } from 'react-icons/hi'

import { SearchPanel } from 'entities/SearchPanel/ui/SearchPanel'
import BurgerMenu from 'entities/BurgerMenu/ui/BurgerMenu'
import { IoExitOutline } from 'react-icons/io5'
import { PopupWindow } from 'features/PopupWindow/ui/PopupWindow'
import { useAuthorization } from 'app/model/hook/useAuth'

type TProps = {
  children: React.ReactNode
}

export const SideBarUserProfile: React.FC<TProps> = ({ children }) => {
  const [isOpened, setisOpened] = useState(false)
  const [pages, setPage] = useState([
    {
      id: 0,
      title: 'Мои переводы',
      link: '',
      icon: <BsClockHistory />,
    },
    {
      id: 1,
      title: 'Перевести',
      link: 'translate',
      icon: <BsTranslate />,
    },
    {
      id: 2,
      title: 'Мой профиль',
      link: 'profile',
      icon: <HiOutlineUserCircle />,
    },
    {
      id: 3,
      title: 'Выход',
      link: 'logout',
      icon: '',
    },
  ])
  
  return (
    <div className={c.container}>
      <div className={c.sideBar}>
        <div className={c.logo}>
          <Logo isTextBellow />
          <p>Owl</p>
        </div>
        <nav>
          <ul>
            {pages.map((page) => {
              if (page.link === 'logout') return '';
              return (
                <Li href={page.link} Icon={page.icon} key={page.id}>
                  {page.title}
                </Li>
              )
            })}
          </ul>
        </nav>
        <div className={c.balance}>
          <div className={c.value}>
            <h3>Баланс:</h3>
            <p>192 т.</p>
            {/* <LogoWithoutText /> */}
          </div>
          <PopupWindow repres={<p>Пополнить</p>}></PopupWindow>
        </div>
      </div>
      <article>
        <div className={c.headerBlock}>
          <SearchPanel />
          <div className={c.hiddenBlock}>
            <BurgerMenu isOpened={isOpened} setIsOpened={setisOpened}>
              {pages.map((page) => {
                return (
                  <a href={page.link} key={page.id} onClick={() => setisOpened(false)}>
                    {page.title}
                  </a>
                )
              })}
            </BurgerMenu>
          </div>
          <div className={c.userBlock}>
            <div className={c.user}>
              <img src={ava} alt="" srcSet="" />
              <p className={c.name}>Nikita</p>
              {/* <p className={c.email}>nik.kol.2015@mail.ru</p> */}
            </div>
            <div className={c.exit}>
              <IoExitOutline />
            </div>
          </div>
        </div>
        {children}
      </article>
    </div>
  )
}
