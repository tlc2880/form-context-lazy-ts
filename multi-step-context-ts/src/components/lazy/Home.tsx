import { FormProvider } from '../../context/FormContext'
import Form from "../multi_step/Form"

export const Home = () => {
  return (
    <>
      <FormProvider>
        <h2 className='center'>Multi-Step Form TypeScript</h2>
        <h2 className='center'>Version 2.1, Context API, Lazy Loading, Error-Boundary</h2>
        <Form />
      </FormProvider>
    </>
  )
}
