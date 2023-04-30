import React, { useState } from 'react'
import c from './AuthForm.module.scss'
import { Buttons } from 'shared/Buttons/ui/Buttons'
import { FieldValues, useForm } from 'react-hook-form'
import InputRHF from 'shared/Inputs/ui/inputRHF'

type TProps = {
  isRegistr:boolean
}
export const AuthForm: React.FC<TProps> = ({isRegistr}) => {
  const [isRegistration, setIsRegistration] = useState(isRegistr)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const changeStateAuth = (state: boolean) => {
    setIsRegistration(state)
  }
  const onSubmit = (e: FieldValues) => {
    fetch('http://188.120.244.172:8000/login', {
      mode: 'no-cors',
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ email: e.email, password: e.password }),
    })
  }

  return (
    <>
      <div className={c.titleAuth}>
        <h1
          className={!isRegistration ? c.active : ''}
          onClick={() => {
            changeStateAuth(false)
          }}
        >
          Вход
        </h1>
        <h1
          className={isRegistration ? c.active : ''}
          onClick={() => {
            changeStateAuth(true)
          }}
        >
          Регистрация
        </h1>
      </div>
      <form className={c.bodyAuth} onSubmit={handleSubmit(onSubmit)}>
        <InputRHF
          name={'email'}
          register={register}
          placeholder="Email"
          options={{
            required: 'Поле email должно быть заполнено',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: 'Введите email в формате xxx@xxx.xx',
            },
          }}
          errors={errors}
        />

        <InputRHF
          type="password"
          name={'password'}
          register={register}
          errors={errors}
          options={{
            required: 'Поле пароля должно быть заполнено',
            minLength: isRegistration
              ? { value: 8, message: 'Не меньше 8 символов' }
              : '',
          }}
          placeholder="Пароль"
        />

        {isRegistration && (
          <>
            <InputRHF
              name={'confirmPassword'}
              register={register}
              errors={errors}
              options={{
                required: 'Пожалуйста повторите пароль',
                minLength: isRegistration
                  ? { value: 8, message: 'Не меньше 8 символов' }
                  : '',
              }}
              placeholder="Повторите пароль"
            />
          </>
        )}
        <div className={c.submitButtuon}>
          <Buttons type="withBackground">
            {!isRegistration ? 'Войти' : 'Зарегестрироваться'}
          </Buttons>
        </div>
        <p>Не помните пароль?</p>
      </form>
    </>
  )
}
