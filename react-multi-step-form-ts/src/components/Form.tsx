import {FormEvent } from "react";
import FormInputs from './FormInputs';
import { useForm } from '../context/FormContext'
const Form = () => {
    const {
        setPage,
        data,
        canSubmit,
        prevHide,
        nextHide,
        submitHide
    } = useForm();

    const handlePrev = () => setPage((prev: number) => prev - 1)
    const handleNext = () => setPage((prev: number) => prev + 1)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }
    const content = (
        <form className="form flex-col" onSubmit={handleSubmit}>
            <header className="form-header">
                
                <div className="button-container">
                    <button 
                        type="button" 
                        className={`button ${prevHide}`} 
                        onClick={handlePrev} 
                    >
                        Prev
                    </button>
                    <button 
                        type="button" 
                        className={`button ${nextHide}`} 
                        onClick={handleNext} 
                    >
                        Next
                    </button>
                    <button 
                        type="submit" 
                        className={`button ${submitHide}`} 
                        disabled={!canSubmit}
                    >
                        Submit
                    </button>
                </div>
            </header>
            <FormInputs />
        </form>
    )
    return content
}
export default Form