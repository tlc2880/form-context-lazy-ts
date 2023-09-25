import Form from "./components/Form"
import { FormProvider } from './context/FormContext'

function App() {

  return (
    <FormProvider>
      <h2 className='center'>Multi-Step Form</h2>
      <h2 className='center'>Version 2.0 using Context API</h2>
      <Form />
    </FormProvider>
  )

}

export default App;
