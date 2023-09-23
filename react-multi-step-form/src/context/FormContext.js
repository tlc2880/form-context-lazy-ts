import { createContext, useState, useEffect } from "react"

const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const title = {
        0: 'Personal Details',
        1: 'Contact Details',
        2: 'Address Details',
        3: 'Review'
    }

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        personalFirstName: "",
        personalLastName: "",
        personalAge: "",
        contactPhone: "",
        contactEmail: "",
        addressAddress1: "",
        addressAddress2: "",
        addressCity: "",
        addressState: "",
        addressZipcode: ""
    })

    const handleChange = e => {
        const type = e.target.type
        const name = e.target.name
        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const {
        personalFirst,
        contactEmail,
        addressAddress1,
        ...requiredInputs } = data

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = Object.keys(data)
        .filter(key => key.startsWith('personal') && key !== 'personalFirstName')
        .map(key => data[key])
        .every(Boolean)

    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('contact') && key !== 'contactEmail')
        .map(key => data[key])
        .every(Boolean)

    const canNextPage3 = Object.keys(data)
        .filter(key => key.startsWith('address') && key !== 'contactAddress1')
        .map(key => data[key])
        .every(Boolean)

    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)
  

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    return (
        <FormContext.Provider value={{ title, page, setPage, data, setData, canSubmit, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext 