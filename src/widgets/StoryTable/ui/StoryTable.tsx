import React, { useState } from 'react'

import c from './StoryTable.module.scss'

import { AiOutlineDownload, AiOutlineInfoCircle } from 'react-icons/ai'
import { TTranslations } from 'pages/StoryTranslate/model/redux/StoryTranslateSlice'
type TProps = {
  storyItems: TTranslations[]
}
export const StoryTable: React.FC<TProps> = ({ storyItems }) => {
  const [showing, setshowing] = useState(false)
  return (
    <table className={c.storyTable}>
      <thead>
        <tr>
          <th>Название</th>
          <th>Дата загрузки</th>
          <th>Дата завершения</th>
          <th>Состояние</th>
          <th>Скачивание</th>
        </tr>
      </thead>
      <tbody>
        {storyItems
          .map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.data}</td>
                <td>{item.state>0?item.successData:'-'}</td>
                <td>
                  {item.state > 0 ? (
                    <span className={c.success}>Выполнено</span>
                  ) : item.state < 0 ? (
                    <span className={c.catch}>
                      Отменено{' '}
                      <AiOutlineInfoCircle
                        onMouseOver={() => setshowing(true)}
                        onTouchStart={()=>setshowing(!showing)}
                        onMouseOut={() => setshowing(false)}
                      />
                      <div
                        data-tooltip="tooltip"
                        className={showing ? c.tooltip : c.hiddens}
                      >
                        {item.comment}
                      </div>
                    </span>
                  ) : (
                    <span className={c.inProgress}>В процессе</span>
                  )}
                </td>
                <td>{item.state > 0 ? 'Скачать' : 'Ожидайте'}</td>
              </tr>
            )
          })
          .reverse()}
      </tbody>
    </table>
  )
}
