import { useState } from 'react'
import c from './RightSide.module.scss'
import { TDialect } from 'pages/HomePage/model/redux/HomePageSlice'

type TProps = {
  dialects: TDialect[]
}
export const RightSide: React.FC<TProps> = ({ dialects }) => {
  return (
    <div className={c.rightSide}>
      <h1>Диалекты</h1>
      <div className={c.dialectsItems}>
        {dialects.map((item) => {
          return (
            <div className={c.item} key={item.id}>
              <div className={c.firstLine}>
                <p className={c.title}>{item.name}</p>
                <img src={item.flag} alt="" />
              </div>
              <p className={c.example}>&laquo; {item.example} &raquo;</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
