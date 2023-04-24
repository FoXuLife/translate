import { useState } from 'react'
import { Buttons } from '../../../shared/Buttons/ui/Buttons'
import c from './LeftSide.module.scss'
import { HeaderHomePage } from 'entities/HeaderHomePage/ui/HeaderHomePage'
type TProps = {}
export const LeftSide: React.FC<TProps> = () => {
  const [isOpened, setIsOpened] = useState(false)
  
  return (
    <div className={c.leftSide}>
      <HeaderHomePage isOpened={isOpened} setIsOpened={setIsOpened} />
    
      <article>
        <>
          <h1 className={c.title}>Перевод от носителей языка</h1>
          <p className={c.textBody}>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          </p>
        </>
        <>
          <Buttons type={'withBackground'}>Попробовать бесплатно</Buttons>
          <p className={c.warning}>
            Доступен 1 бесплатный текст, до 1000 символов
          </p>
        </>
      </article>
    </div>
  )
}
