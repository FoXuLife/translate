import React from 'react'

import c from './SearchPanel.module.scss'
import { Inputs } from 'shared/Inputs/ui/Inputs'

import { BsSearch } from 'react-icons/bs'

type TProps = {}

export const SearchPanel: React.FC<TProps> = ({}) => {
  return (
    <div className={c.searchBlock}>
      <BsSearch />
      <Inputs name={'search'} type={'search'} placeholder={'Поиск'} />
    </div>
  )
}
