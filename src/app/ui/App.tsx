import React from 'react'

import { UserProfilePage } from 'pages/UserProfilePage/ui/UserProfilePage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import c from './App.module.scss'

import HomePage from 'pages/HomePage/ui/HomePage'
import { AuthPage } from 'pages/AuthPage/ui/AuthPage'
import { StoryTranslate } from 'pages/StoryTranslate/ui/StoryTranslate'
import { TranslatePage } from 'pages/TranslatePage/ui/TranslatePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <AuthPage />,
  },
  {
    path: '/profile',
    
    element: <UserProfilePage />,
    children: [
      {
        index: true,
        element: <StoryTranslate />,
      },
      {
        path: '/profile/translate',
        index: false,
        element: <TranslatePage />,
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
