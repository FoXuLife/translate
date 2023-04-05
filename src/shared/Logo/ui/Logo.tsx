import c from './Logo.module.scss'
import { LogoWithoutText } from './LogoWithoutText'
import { LogoWithText } from './LogoWithText'

type TProps = {
  isTextBellow?: boolean
}
export const Logo: React.FC<TProps> = ({ isTextBellow = false }) => {
  return (
    <div className={c.logo}>
      {isTextBellow ? (
        <>
          <LogoWithoutText />
        </>
      ) : (
        <LogoWithText />
      )}
    </div>
  )
}
