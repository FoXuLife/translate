import { NavLink } from 'react-router-dom'

import c from './LiItem.module.scss'
type TProps = {
  href?: string
  children: string
  Icon?: any
  onClick?: () => void
}
const LiItem: React.FC<TProps> = ({ href, children, Icon, onClick }) => {
  return (
    <li className={c.item} onClick={onClick}>
      <NavLink
        className={({ isActive }) => (isActive ? c.active : '')}
        to={`/profile/${href}`}
      >
        {Icon}
        {children}
      </NavLink>
    </li>
  )
}
export default LiItem
