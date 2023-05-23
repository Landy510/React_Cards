import './App.css'
import CardsLogic from './shared/components/cards/Card'

const source = [
  {
    burnedStart: '1,600',
    burnedEnd: '3,000',
    type: '',
    burn: '',
    btnUrl: '',
  },
  {
    burnedStart: '',
    burnedEnd: '',
    type: 'weight',
    burn: '606',
    btnUrl: '',
  },
  {
    burnedStart: '',
    burnedEnd: '',
    type: 'aerobic',
    burn: '438',
    btnUrl: '',
  },
  {
    burnedStart: '',
    burnedEnd: '',
    type: '',
    burn: '',
    btnUrl: 'https://www.google.com.tw/',
  },
]

function App() {
  return (
    <>
      <CardsLogic source={source}></CardsLogic>
    </>
  )
}

export default App
