import Form from "./components/Form"
import { CounterProvider } from "./context/FormContext"

function App() {

  return (
    <>
      <CounterProvider>
        <h2 className='center'>Multi-Step Form</h2>
        <h2 className='center'>Version 2.1, Context API, Typescript</h2>
        <Form />
      </CounterProvider>
    </>
  )
}

export default App
