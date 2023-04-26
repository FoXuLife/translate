import React, { useState } from 'react'

import c from './HeaderHomePage.module.scss'

import { Logo } from 'shared/Logo/ui/Logo'
import { Buttons } from 'shared/Buttons/ui/Buttons'
import BurgerMenu from 'entities/BurgerMenu/ui/BurgerMenu'
import { PopupWindow } from '../../../features/PopupWindow/ui/PopupWindow'
import { AuthForm } from 'entities/AuthForm/ui/AuthForm'
type TProps = {
  setIsOpened: (state: boolean) => void
  isOpened: boolean
}

export const HeaderHomePage: React.FC<TProps> = ({ isOpened, setIsOpened }) => {
  return (
    <header className={c.header}>
      <Logo isTextBellow />
      <div className={c.hiddenButton}>
        <PopupWindow repres={<Buttons type={'withBorder'}>Войти</Buttons>}>
          <AuthForm isRegistr={false} />
        </PopupWindow>
        <PopupWindow
          repres={<Buttons type={'withBackground'}>Зарегистрироваться</Buttons>}
        >
          <AuthForm isRegistr={true} />
        </PopupWindow>
      </div>
      <div className={c.hiddenBlock}>
        <BurgerMenu isOpened={isOpened} setIsOpened={setIsOpened}>
          <PopupWindow repres={<p className={c.navText}>Вход</p>}>
            <AuthForm isRegistr={false} />
          </PopupWindow>
          <PopupWindow repres={<p className={c.navText}>Регистрация</p>}>
            <AuthForm isRegistr={true} />
          </PopupWindow>
        </BurgerMenu>
      </div>
    </header>
  )
}
