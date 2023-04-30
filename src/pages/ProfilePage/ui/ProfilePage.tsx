import React, { useState } from 'react'

import c from './ProfilePage.module.scss'
import { useAuthorization } from 'app/model/hook/useAuth'
import InputRHF from 'shared/Inputs/ui/inputRHF'
import { useForm } from 'react-hook-form'
import { Buttons } from 'shared/Buttons/ui/Buttons'
import { useAppDispatch, useAppSelector } from 'app/model/hook/MainHooks'
import { setUserInfo } from 'pages/UserProfilePage/model/redux/UserProfileSlice'

export const ProfilePage: React.FC = React.memo(() => {
  const userInfo = useAppSelector((store) => store?.userPage?.userInfo)
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors, dirtyFields },
  } = useForm()

  const [isEdit, setIsEdit] = useState<string>('')
  const dispatch = useAppDispatch()
  const showHiddeFields = (e: any) => {
    setIsEdit(e?.target.id)
    setFocus(e?.target.id, { shouldSelect: true })
  }
  const onSubmit = (data: any) => {
    dispatch(setUserInfo(data))
    reset()
  }
  return (
    <div className={c.profile}>
      <div className={c.information}>
        <img
          src="https://img.freepik.com/premium-vector/owl-logo-stock-images_15146-61.jpg?w=2000"
          alt=""
        />
        <div className={c.name}>
          <h1>John Doe</h1>
          <p className={c.email}>nik.kol.2015@mail.ru</p>
        </div>
      </div>
      <form className={c.editForm} onSubmit={handleSubmit(onSubmit)}>
        {isEdit === 'username' ? (
          <InputRHF
            name={'username'}
            register={register}
            errors={errors}
            options={{
              required: '',
              value: userInfo.username,
              onBlur: () => {
                setIsEdit('')
                handleSubmit(onSubmit)()
              },
            }}
            autofocus={true}
            label="asdasd"
          />
        ) : (
          <p
            id="username"
            onDoubleClick={(e) => {
              showHiddeFields(e)
            }}
          >
            {userInfo.username}
          </p>
        )}
        {isEdit === 'email' ? (
          <InputRHF
            name={'email'}
            register={register}
            errors={errors}
            options={{
              required: '',
              value: userInfo.email,
              onBlur: () => {
                setIsEdit('')
                handleSubmit(onSubmit)()
              },
            }}
            autofocus={true}
          />
        ) : (
          <p
            id="email"
            onDoubleClick={(e) => {
              showHiddeFields(e)
            }}
          >
            {userInfo.email}
          </p>
        )}
        {/* <InputRHF
          name={'email'}
          register={register}
          errors={errors}
          options={{ required: 'Заполни бля' }}
        />
        <InputRHF
          name={'fullname'}
          register={register}
          errors={errors}
          options={{ required: 'Заполни бля' }}
        />
        <InputRHF
          name={'password'}
          register={register}
          errors={errors}
          options={{ required: 'Заполни бля' }}
        />
        {dirtyFields.password && (
          <InputRHF
            name={'confirmPassword'}
            register={register}
            errors={errors}
            options={{ required: 'Заполни бля' }}
          />
        )} */}
        {/* <Buttons type="withBackground">Сохранить</Buttons> */}
      </form>
    </div>
  )
})
