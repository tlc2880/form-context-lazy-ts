import { FormProvider } from '../../context/FormContext'
import Form from "../multi_step/Form"

export const Home = () => {
  return (
    <>
      <FormProvider>
        <h2 className='center'>Multi-Step Form JS</h2>
        <h2 className='center'>Version 2.0 using Context API</h2>
        <Form />
      </FormProvider>
    </>
  )
}
