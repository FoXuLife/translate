import React, { ChangeEvent, useState } from 'react'

import c from './SearchPanel.module.scss'
import Inputs from 'shared/Inputs/ui/Inputs'

import { BsSearch } from 'react-icons/bs'

type TProps = {}

export const SearchPanel: React.FC<TProps> = ({}) => {
  const [searchParam, setSearchParam] = useState<string>()
  const changeSearchParams = (param: ChangeEvent<HTMLInputElement>) => {
    if (param) {
      setSearchParam(param.target.value)
    }
  }
  return (
    <div className={c.searchBlock}>
      <BsSearch />
      <Inputs
        value={searchParam}
        name={'search'}
        type={'search'}
        placeholder={'Поиск'}
        onChange={changeSearchParams}
      />
    </div>
  )
}
