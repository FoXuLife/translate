import React, { useEffect, useState } from 'react'

import c from './StoryTranslate.module.scss'

import { StoryTable } from 'widgets/StoryTable/ui/StoryTable'
import { useAppDispatch, useAppSelector } from 'app/model/hook/MainHooks'
import { getTranslates } from 'pages/UserProfilePage/model/redux/UserProfileSlice'

export const StoryTranslate: React.FC = () => {
  const slice = useAppSelector((store) => store?.storySlice)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTranslates())
  }, [])

  return (
    <div className={c.container}>
      <div className={c.storyList}>
        <div className={c.headerStory}>
          <div className={c.title}>
            <h1>Мои Переводы</h1>
            <p>
              Переведено текстов: <span>{slice.items.length} </span>
            </p>
          </div>
          <div className={c.stats}>
            <div className={c.statsItem}>
              <h1>{slice.Success}</h1>
              <p>Выполнено</p>
            </div>
            <div className={c.statsItem}>
              <h1>{slice.inProgress}</h1>
              <p>Выполняется</p>
            </div>
          </div>
        </div>
        <StoryTable storyItems={slice.items} />
      </div>
    </div>
  )
}
