import React, { useCallback } from 'react'
import c from './../InputStyle.module.scss'
import InputRHF from 'shared/Inputs/ui/inputRHF'
import { useAppDispatch } from 'app/model/hook/MainHooks'
import { useForm } from 'react-hook-form'
import { setUserInfo } from 'pages/UserProfilePage/model/redux/UserProfileSlice'
import { Buttons } from 'shared/Buttons/ui/Buttons'
type TProps = {}
export default function ChangePassword({}: TProps) {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  })
  const onSubmit = (data: any) => {
    dispatch(setUserInfo(data))
    reset()
  }
  const password = watch('newPassword', '')
  const repeatPassword = watch('confirmPassword', '')

  const validateRepeatPassword = () => {
    return repeatPassword === password
  }
  return (
    <form className={c.editForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={c.itemsForm}>
        <div className={c.formItem}>
          <p className={c.label}>Старый пароль</p>
          <InputRHF
            type="password"
            name={'oldPassword'}
            register={register}
            errors={errors}
            options={{
              required: 'Введите старый пароль',
            }}
          />
        </div>
        <div className={c.formItem}>
          <p className={c.label}>Новый пароль</p>
          <InputRHF
            type="password"
            name={'newPassword'}
            register={register}
            errors={errors}
            options={{
              require: 'Введите новый пароль',
              validate: validateRepeatPassword,
            }}
          />
        </div>
        {dirtyFields.newPassword && (
          <div className={`${c.formItem} ${c.confirmPassword}`}>
            <p className={c.label}>Повторите пароль</p>
            <InputRHF
              type="password"
              name={'confirmPassword'}
              register={register}
              errors={{}}
              options={{
                require: 'Введите повторный пароль',
                validate: validateRepeatPassword,
              }}
            />
          </div>
        )}
      </div>
      {validateRepeatPassword() || <p className={c.error}>Пароли не совпадают</p>}
      <Buttons type="withBlackBorder">Сменить пароль</Buttons>
    </form>
  )
}
