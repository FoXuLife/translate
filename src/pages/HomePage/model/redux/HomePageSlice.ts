import { createSlice } from '@reduxjs/toolkit'
import Standart from 'pages/HomePage/ui/image/Standart.svg'
import Cockney from 'pages/HomePage/ui/image/Cockney.svg'
import Yorkshire from 'pages/HomePage/ui/image/Yorkshire.svg'
import Geordie from 'pages/HomePage/ui/image/Geordie.svg'
import Cornish from 'pages/HomePage/ui/image/Cornish.svg'
import Scouse from 'pages/HomePage/ui/image/Scouse.svg'
import Welsh from 'pages/HomePage/ui/image/Welsh.svg'
import Brummie from 'pages/HomePage/ui/image/Brummie.svg'

export type TDialect = {
  id: number
  name: string
  flag: string
  example: string
}
export type TLanguge = {
  id: number
  name: string
  dialects: TDialect[]
}
export type TStyleTranslate = {
  id: number
  name: string
}
export type TPromptness = {
  id: number
  name: string
  percent: number | null
}
export type TInitialState = {
  languages: TLanguge[]
  styleTranslate: TStyleTranslate[]
  promptness: TPromptness[]
}

const initialState: TInitialState = {
  languages: [
    {
      id: 1,
      name: 'Английский',
      dialects: [
        {
          id: 1,
          name: 'Standart',
          flag: Standart,
          example: 'London is the capital of Great Britain',
        },
        {
          id: 2,
          name: 'Cockney',
          flag: Cockney,
          example: "Lahndon is the capital o'Great Britain, mate.",
        },
        {
          id: 3,
          name: 'Brummie',
          flag: Brummie,
          example:
            "Birmingham's the real capital of Great Britain, but London'll do.",
        },
        {
          id: 4,
          name: 'Yorkshire',
          flag: Yorkshire,
          example: "Lonnon's t'capital of Great Britain, like.",
        },
        {
          id: 5,
          name: 'Geordie',
          flag: Geordie,
          example: "Lundun's the capital o' Great Britain, like.",
        },
        {
          id: 6,
          name: 'Cornish',
          flag: Cornish,
          example: 'Londundra yw pennskav Breten Veur, an gwella pla an bys.',
        },
        {
          id: 7,
          name: 'Scouse',
          flag: Scouse,
          example: "Lern'n is the capitol of Great Britain, la.",
        },
        {
          id: 8,
          name: 'Welsh',
          flag: Welsh,
          example: 'Llundain yw prifddinas Prydain Fawr.',
        },
      ],
    },
  ],
  styleTranslate: [
    { id: 1, name: 'Свободный стиль' },
    { id: 2, name: 'Технический' },
    { id: 3, name: 'Разговорный' },
    { id: 4, name: 'Художественный' },
  ],
  promptness: [
    { id: 1, name: 'Срочно', percent: 10 },
    { id: 2, name: 'Не срочно', percent: null },
  ],
}

const HomePageSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
})

export const {} = HomePageSlice.actions
export default HomePageSlice.reducer
