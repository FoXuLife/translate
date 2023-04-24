import c from './Buttons.module.scss'
type TProps = {
  type: 'clear' | 'withBorder' | 'withBackground'
  children: React.ReactNode
  disabled?: boolean
  onClickHandle?: any
}
export const Buttons: React.FC<TProps> = ({
  type,
  children,
  disabled,
  onClickHandle,

}) => {
  const className = `${c.buttons} 
    ${
      type === 'clear'
        ? ''
        : type === 'withBorder'
        ? c.withBorder
        : c.withBackground
    } ${disabled ? c.disable : ''}`
  return (
    <button className={className} disabled={disabled} onClick={onClickHandle}>
      {children}
    </button>
  )
}
