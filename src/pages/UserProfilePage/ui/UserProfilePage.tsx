import React from 'react'

import c from './UserProfilePage.module.scss'
import { SideBarUserProfile } from '../../../widgets/SideBarUserProfile/ui/SideBarUserProfile'
import { Outlet } from 'react-router'

export const UserProfilePage: React.FC = () => {
  return (
    <div className={c.container}>
      <SideBarUserProfile>
        <Outlet />
      </SideBarUserProfile>
    </div>
  )
}
