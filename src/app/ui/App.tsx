import React from 'react'

import { UserProfilePage } from 'pages/UserProfilePage/ui/UserProfilePage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import c from './App.module.scss'
import HomePage from 'pages/HomePage/ui/HomePage'
import { LoginPage } from 'pages/LoginPage/ui/LoginPage'
import { StoryTranslate } from 'pages/StoryTranslate/ui/StoryTranslate'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/profile',
    element: <UserProfilePage />,
    children: [
      {
        path: '/profile/my-translate',
        element: <StoryTranslate />,
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
