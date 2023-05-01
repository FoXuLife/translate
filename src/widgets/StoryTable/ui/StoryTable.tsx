import React, { useState } from 'react'

import c from './StoryTable.module.scss'

import { AiOutlineDownload, AiOutlineInfoCircle } from 'react-icons/ai'
import { TTranslations } from 'pages/StoryTranslate/model/redux/StoryTranslateSlice'
import { IoCheckmarkDone } from 'react-icons/io5'
import { MdDone } from 'react-icons/md'
type TProps = {
  storyItems: TTranslations[]
}
export const StoryTable: React.FC<TProps> = ({ storyItems }) => {
  const [showing, setshowing] = useState<null | number>()
  return (
    <div className={c.storyTable}>
      {storyItems.map((item) => {
        return (
          <div
            key={item.id}
            className={`${c.translateCard} ${
              item.price < 100
                ? c.oneLevelShadow
                : item.price < 200
                ? c.twoLevelShadow
                : c.treeLevelShadow
            }`}
          >
            <p className={c.name}>{item.name}</p>
            <div className={c.datesOrder}>
              {item.data} - {item.state > 0 ? item.successData : '-'}
            </div>

            <div className={c.state}>
              {item.state > 0 ? (
                <span className={c.success}>
                  <IoCheckmarkDone
                    onMouseOver={() => setshowing(item.id)}
                    onTouchStart={() => setshowing(0)}
                    onMouseOut={() => setshowing(0)}
                  />
                  <div
                    data-tooltip="tooltip"
                    className={showing === item.id ? c.tooltip : c.hiddens}
                  >
                    {item.comment ? item.comment : 'Выполнено'}
                  </div>
                </span>
              ) : item.state < 0 ? (
                <span className={c.catch}>
                  <AiOutlineInfoCircle
                    onMouseOver={() => setshowing(item.id)}
                    onTouchStart={() => setshowing(0)}
                    onMouseOut={() => setshowing(0)}
                  />
                  <div
                    data-tooltip="tooltip"
                    className={showing === item.id ? c.tooltip : c.hiddens}
                  >
                    {item.comment}
                  </div>
                </span>
              ) : (
                <span className={c.inProgress}>
                  <MdDone
                    onMouseOver={() => setshowing(item.id)}
                    onTouchStart={() => setshowing(0)}
                    onMouseOut={() => setshowing(0)}
                  />
                  <div
                    data-tooltip="tooltip"
                    className={showing === item.id ? c.tooltip : c.hiddens}
                  >
                    {item.comment ? item.comment : 'В процессе выполнения'}
                  </div>
                </span>
              )}
            </div>
            <p className={c.link}>{item.state > 0 ? 'Скачать' : 'Ожидайте'}</p>
          </div>
        )
      })}
    </div>
  )
}
