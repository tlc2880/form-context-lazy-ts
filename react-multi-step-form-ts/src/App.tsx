import Form from "./components/Form"
import { CounterProvider } from "./context/FormContext"

function App() {

  return (
    <>
      <CounterProvider>
        <Form />
      </CounterProvider>
    </>
  )
}

export default App
