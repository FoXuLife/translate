import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from './MainHooks'

export function useAuthorization(redirectPath: string) {
  const isAuth = useAppSelector((store) => store?.userPage?.userInfo?.isAuth)
  const navigate = useNavigate() 
  useEffect(() => {
    if (redirectPath !== '/preview' ? isAuth : !isAuth) {
      navigate(redirectPath)
    }
  }, [redirectPath])
}
