import React, { useState } from 'react'
import c from './../InputStyle.module.scss'
import InputRHF from 'shared/Inputs/ui/inputRHF'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from 'app/model/hook/MainHooks'
import {
  changeMainInfo,
  setStatus,
  setUserInfo,
} from 'pages/UserProfilePage/model/redux/UserProfileSlice'

type TProps = {
  username: string | null
  email: string | null
  status: string | null
}

export default function ChangeMailnInfo({ username, email, status }: TProps) {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [changedField, setChangetField] = useState<string>('')
  const onSubmit = async (data: any) => {
    try {
      const result = await dispatch(changeMainInfo(data)).unwrap()
      if (result) {
        setTimeout(() => {
          dispatch(setStatus(null))
        }, 1000)

        reset()
      }
    } catch {
      console.log('21')
    }
  }
  return (
    <form className={c.editForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={c.itemsForm}>
        <div className={c.formItem}>
          <InputRHF
            name={'username'}
            register={register}
            errors={errors}
            options={{
              required: '',
              value: username,
              onBlur: () => {
                setChangetField('username')
                handleSubmit(onSubmit)()
              },
            }}
          />
          {changedField === 'username' ? (
            status === 'pending' ? (
              <div className={`${c.loadingicon} ${c.impetus}`} />
            ) : status === 'error' ? (
              'Ошибка'
            ) : status === 'success' ? (
              <div className={c.checkmark} />
            ) : (
              ''
            )
          ) : (
            ''
          )}
        </div>
        <div className={c.formItem}>
          <InputRHF
            name={'email'}
            register={register}
            errors={errors}
            options={{
              required: '',
              value: email,
              onBlur: () => {
                setChangetField('email')
                handleSubmit(onSubmit)()
              },
            }}
          />
          {changedField === 'email' ? (
            status === 'pending' ? (
              <div className={`${c.loadingicon} ${c.impetus}`} />
            ) : status === 'error' ? (
              'Ошибка'
            ) : status === 'success' ? (
              <div className={c.checkmark} />
            ) : (
              ''
            )
          ) : (
            ''
          )}
        </div>
      </div>
    </form>
  )
}
