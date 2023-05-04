import c from './Buttons.module.scss'
type TProps = {
  type: 'clear' | 'withBorder' | 'withBackground' | 'withBlackBorder'
  children: React.ReactNode
  disabled?: boolean
  onClickHandle?: () => void
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
        : type === 'withBlackBorder'
        ? c.withBlackBorder
        : c.withBackground
    } ${disabled ? c.disable : ''}`
  return (
    <button className={className} disabled={disabled} onClick={onClickHandle}>
      {children}
    </button>
  )
}
