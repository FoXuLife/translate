import { TPromptness } from 'pages/HomePage/model/redux/HomePageSlice'

function CostCalculation(textLength: number, settings: TPromptness | null) {
  const extraCharge = settings?.id === 1 ? 0.1 : 0
  return Math.ceil(textLength * 0.5 + extraCharge * textLength * 0.5)
}

export default CostCalculation
