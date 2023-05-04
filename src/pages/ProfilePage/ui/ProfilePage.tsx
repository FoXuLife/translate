import React, { useState } from 'react'

import c from './ProfilePage.module.scss'
import { useAppSelector } from 'app/model/hook/MainHooks'
import ChangeMailnInfo from './Forms/ChangeMailnInfo/ChangeMailnInfo'
import ChangePassword from './Forms/ChangePassword/ChangePassword'

export const ProfilePage: React.FC = React.memo(() => {
  const userInfo = useAppSelector((store) => store?.userPage)
  const { username, email } = userInfo.userInfo
  

  return (
    <div className={c.profile}>
      <div className={c.information}>
        <img
          src="https://img.freepik.com/premium-vector/owl-logo-stock-images_15146-61.jpg?w=2000"
          alt=""
        />
        <div className={c.name}>
          <h1>{username}</h1>
          <p className={c.email}>{email}</p>
        </div>
      </div>
      <div className={c.title}>Смена данных</div>
      <ChangeMailnInfo
        username={username}
        email={email}
        status={userInfo.status}
      />
      <div className={c.title}> Смена пароля</div>
      <ChangePassword  />
    </div>
  )
})
