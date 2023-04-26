import React, { useState } from 'react'
import c from './PopupWindow.module.scss'

type TProps = {
  Open?: boolean
  repres: React.ReactNode
  children?: React.ReactNode
}
export const PopupWindow: React.FC<TProps> = ({ repres, children }) => {
  const [isOpened, setisOpened] = useState(false)
  const closeOpenListener = (state: boolean) => {
    setisOpened(state)
  }
  return (
    <>
      <div onClick={() => closeOpenListener(true)}>{repres}</div>
      {isOpened && (
        <div className={c.popup}>
          <div className={c.bg} onClick={() => closeOpenListener(false)}></div>
          <div className={c.container}>{children}</div>
        </div>
      )}
    </>
  )
}
