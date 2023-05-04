import React, { useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import c from './Tooltip.module.scss'
import { MdDone } from 'react-icons/md'
import { IoCheckmarkDone } from 'react-icons/io5'

type TProps = {
  type: 'catch' | 'success' | 'inProgress'
  showing: number
  setSowhing: (id: number) => void
  id: number
  comment: string
}

export default function Tooltip({
  type,
  showing,
  setSowhing,
  id,
  comment,
}: TProps) {
  const Icon =
    type === 'catch'
      ? AiOutlineInfoCircle
      : type === 'inProgress'
      ? MdDone
      : IoCheckmarkDone
  return (
    <span
      className={
        type === 'catch'
          ? c.catch
          : type === 'success'
          ? c.success
          : c.inProgress
      }
    >
      <Icon
        onMouseOver={() => setSowhing(id)}
        onTouchStart={() => setSowhing(0)}
        onMouseOut={() => setSowhing(0)}
      />
      <div
        data-tooltip="tooltip"
        className={showing === id ? c.tooltip : c.hiddens}
      >
        {comment
          ? comment
          : type === 'catch'
          ? 'Отменено'
          : type === 'success'
          ? 'Выполнено'
          : 'В процессе выполнения'}
      </div>
    </span>
  )
}
