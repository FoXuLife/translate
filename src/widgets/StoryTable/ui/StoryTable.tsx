import React, { useState } from 'react'

import c from './StoryTable.module.scss'

import { AiOutlineDownload, AiOutlineInfoCircle } from 'react-icons/ai'
import { TTranslations } from 'pages/StoryTranslate/model/redux/StoryTranslateSlice'
import { IoCheckmarkDone } from 'react-icons/io5'
import { MdDone } from 'react-icons/md'
import Tooltip from 'shared/Tooltip/ui/Tooltip'
type TProps = {
  storyItems: TTranslations[]
}
export const StoryTable: React.FC<TProps> = ({ storyItems }) => {
  const [showing, setshowing] = useState<number>(0)
  return (
    <div className={c.storyTable}>
      {storyItems.map((item) => {
        return (
          <div
            key={item.id}
            className={`${c.translateCard} ${
              item.state < 0
                ? c.catch 
                : item.state >0
                ? c.success
                : c.inProgress
            }`}
          >
            <p className={c.name}>{item.name}</p>
            <div className={c.datesOrder}>
              {item.data} - {item.state > 0 ? item.successData : '-'}
            </div>
            <div className={c.state}>
              <Tooltip
                type={
                  item.state > 0
                    ? 'success'
                    : item.state < 0
                    ? 'catch'
                    : 'inProgress'
                }
                showing={showing}
                setSowhing={setshowing}
                id={item.id}
                comment={item.comment}
              />
            </div>
            <p className={c.link}>
              {item.state > 0
                ? 'Скачать'
                : item.state === 0
                ? 'Ожидайте'
                : 'Отменено '}
            </p>
          </div>
        )
      })}
    </div>
  )
}
