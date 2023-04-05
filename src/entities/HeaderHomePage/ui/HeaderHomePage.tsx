import React from 'react'

import c from './HeaderHomePage.module.scss'

import { Logo } from 'shared/Logo/ui/Logo'
import { Buttons } from 'shared/Buttons/ui/Buttons'
import BurgerMenu from 'entities/BurgerMenu/ui/BurgerMenu'
type TProps = {
  setIsOpened: (state: boolean) => void
  isOpened: boolean
}

export const HeaderHomePage: React.FC<TProps> = ({ isOpened, setIsOpened }) => {
  return (
    <header className={c.header}>
      <Logo isTextBellow />
      <Buttons type={'withBorder'}>Войти</Buttons>
      <Buttons type={'withBackground'}>Зарегистрироваться </Buttons>
      <div className={c.hiddenBlock}>
        <BurgerMenu isOpened={isOpened} setIsOpened={setIsOpened}>
          <a href="/login">Войти</a>
          <a href="/registration">Зарегистрироваться</a>
        </BurgerMenu>
      </div>
    </header>
  )
}
