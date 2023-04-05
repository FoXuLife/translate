import { useState } from 'react'
import c from './RightSide.module.scss'
import Standart from './image/Standart.svg'
import Cockney from './image/Cockney.svg'
import Yorkshire from './image/Yorkshire.svg'
import Geordie from './image/Geordie.svg'
import Cornish from './image/Cornish.svg'
import Scouse from './image/Scouse.svg'
import Welsh from './image/Welsh.svg'
import Brummie from './image/Brummie.svg'

type TProps = {}
export const RightSide: React.FC = () => {
  const [dialect, setdialect] = useState([
    {
      id: 0,
      name: 'Standart',
      flag: Standart,
      example: 'London is the capital of Great Britain',
    },
    {
      id: 1,
      name: 'Cockney',
      flag: Cockney,
      example: "Lahndon is the capital o'Great Britain, mate.",
    },
    {
      id: 2,
      name: 'Brummie',
      flag: Brummie,
      example:
        "Birmingham's the real capital of Great Britain, but London'll do.",
    },
    {
      id: 3,
      name: 'Yorkshire',
      flag: Yorkshire,
      example:
        "Lonnon's t'capital of Great Britain, like.",
    },
    {
      id: 4,
      name: 'Geordie',
      flag: Geordie,
      example:
        "Lundun's the capital o' Great Britain, like.",
    },
    {
      id: 5,
      name: 'Cornish',
      flag: Cornish,
      example:
        "Londundra yw pennskav Breten Veur, an gwella pla an bys.",
    },
    {
      id: 6,
      name: 'Scouse',
      flag: Scouse,
      example:
        "Lern'n is the capitol of Great Britain, la.",
    },
    {
      id: 7,
      name: 'Welsh',
      flag: Welsh,
      example:
        "Llundain yw prifddinas Prydain Fawr.",
    },
  ])
  return (
    <div className={c.rightSide}>
      <h1>Диалекты</h1>
      <div className={c.dialectsItems}>
        {dialect.map((item) => {
          return (
            <div className={c.item} key={item.id}>
              <div className={c.firstLine}>
                <p className={c.title}>{item.name}</p>
                <img src={item.flag} alt="" />
              </div>
              <p className={c.example}>&laquo; {item.example} &raquo;</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
