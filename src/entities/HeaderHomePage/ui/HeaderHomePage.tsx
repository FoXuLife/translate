import React, { useState } from 'react'

import c from './HeaderHomePage.module.scss'

import { Logo } from 'shared/Logo/ui/Logo'
import { Buttons } from 'shared/Buttons/ui/Buttons'
import BurgerMenu from 'entities/BurgerMenu/ui/BurgerMenu'
import { AuthPage } from 'pages/AuthPage/ui/AuthPage'
type TProps = {
  setIsOpened: (state: boolean) => void
  isOpened: boolean
}

export const HeaderHomePage: React.FC<TProps> = ({ isOpened, setIsOpened }) => {
  const [StateAuthWindow, setisOpennedAuthWindow] = useState({
    isOpened: false,
    isRegistration: false,
  })
  const openingWindowAuth = (isOpened: boolean, isRegistration: boolean) => {
    setisOpennedAuthWindow({
      ...StateAuthWindow,
      isOpened: isOpened,
      isRegistration: isRegistration,
    })
  }
  return (
    <header className={c.header}>
      <Logo isTextBellow />
      <Buttons
        type={'withBorder'}
        onClickHandle={() => openingWindowAuth(true, false)}
      >
        Войти
      </Buttons>
      <Buttons
        type={'withBackground'}
        onClickHandle={() => openingWindowAuth(true, true)}
      >
        Зарегистрироваться
      </Buttons>
      {StateAuthWindow.isOpened && (
        <AuthPage
          openingWindowAuth={openingWindowAuth}
          isRegistr={StateAuthWindow.isRegistration}
        />
      )}
      <div className={c.hiddenBlock}>
        <BurgerMenu isOpened={isOpened} setIsOpened={setIsOpened}>
          <p
            onClick={() => {
              setIsOpened(false)
              openingWindowAuth(true, false)
            }}
          >
            Войти
          </p>
          <p
            onClick={() => {
              setIsOpened(false)
              openingWindowAuth(true, true)
            }}
          >
            Зарегистрироваться
          </p>
        </BurgerMenu>
      </div>
    </header>
  )
}
