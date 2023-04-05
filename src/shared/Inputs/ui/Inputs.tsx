
import { TProps } from '../model/InputsTypes'
import c from './Inputs.module.scss'

export const Inputs: React.FC<TProps> = ({
  type = 'text',
  name,
  register,
  errors,

  ...props
}) => {
  return (
    <div className={c.inputContainer}>

      <input
        className={`${c.input} ${
          errors && errors[name]?.message ? c.error : ''
        }`}
        {...register}
        type={type}
        {...props}
      />
      {errors && errors[name] && (
        <p className="text-red-500 mt-1">{errors && errors[name].message}</p>
      )}
    </div>
  )
}
