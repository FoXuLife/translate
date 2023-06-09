// переделать на рендер внутри этой компоненты , а не в родительских
import React, { Children } from 'react'

import c from './BurgerMenu.module.scss'
import { NavLink } from 'react-router-dom'

type TProps = {
  isOpened: boolean
  setIsOpened: (state: boolean) => void
  children:JSX.Element | JSX.Element[]
}

export const BurgerMenu: React.FC<TProps> = ({
  setIsOpened,
  isOpened,
  children,
}) => {
  return isOpened ? (
    <div className={c.hamburgerMenu}>
      <div
        className={`${c.hamburger} ${c.opened}`}
        onClick={() => setIsOpened(false)}
      >
        <span className={c.hamburgerItem}></span>
        <span className={c.hamburgerItem}></span>
      </div>
      <nav>
        {Children.map(children, (child) => {
          if (child?.props?.repres) {
            return child
          } else {
            return (
              <NavLink to={child?.props?.href} {...child.props}>
                {child?.props?.children}
              </NavLink>
            )
          }
        })}
      </nav>
    </div>
  ) : (
    <div
      className={`${c.hamburger} ${c.closed}`}
      onClick={() => setIsOpened(true)}
    >
      <span className={c.hamburgerItem}></span>
      <span className={c.hamburgerItem}></span>
      <span className={c.hamburgerItem}></span>
    </div>
  )
}

export default React.memo(BurgerMenu)
