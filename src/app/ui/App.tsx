import React from 'react'

import { UserProfilePage } from 'pages/UserProfilePage/ui/UserProfilePage'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import c from './App.module.scss'

import HomePage from 'pages/HomePage/ui/HomePage'

import { StoryTranslate } from 'pages/StoryTranslate/ui/StoryTranslate'
import { TranslatePage } from 'pages/TranslatePage/ui/TranslatePage'
import { ProfilePage } from 'pages/ProfilePage/ui/ProfilePage'

const router = createBrowserRouter([
  {
    path: '/preview',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <UserProfilePage />,
    children: [
      {
        index: true,
        element:  <StoryTranslate />,
      },
      {
        path: '/translate',
        index: false,
        element: <TranslatePage />,
      },
      {
        path: '/profile',
        index: false,
        element: <ProfilePage />,
      },
    ],
  },
])
function App() {
  return (
    <div className={c.app}>   
      <RouterProvider router={router} />
    </div>
  )
}

export default App
