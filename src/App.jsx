
import './App.css'
import Card from './components/Card/Card'
import { InputWithButton } from './components/Search/Input/InputWithButton'

function App() {

  return (
    <>
    <main className="absolute flex justify-center items-center flex-col gap-3 min-w-full min-h-screen px-10 bg-bg-primary font-mono">
        <InputWithButton />
        <Card />
      </main>
    </>
  )
}

export default App
