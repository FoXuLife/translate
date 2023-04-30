import React from 'react'

import c from './UserProfilePage.module.scss'
import { SideBarUserProfile } from '../../../widgets/SideBarUserProfile/ui/SideBarUserProfile'
import { Outlet } from 'react-router'
import { useAuthorization } from 'app/model/hook/useAuth'
type TProps = {}

export const UserProfilePage: React.FC<TProps> = () => {
  useAuthorization('/preview')
  return (
    <div className={c.container}>
      <SideBarUserProfile>
        <Outlet />
      </SideBarUserProfile>
    </div>
  )
}
