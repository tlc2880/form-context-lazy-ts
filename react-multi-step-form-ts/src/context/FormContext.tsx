import { 
    createContext, 
    ChangeEvent, 
    ReactElement, 
    useContext, 
    useState 
} from "react"

type DataType = {
    personalFirstName: string,
    personalLastName: string,
    personalAge: string,
    contactPhone: string,
    contactEmail: string,
    addressAddress1: string,
    addressAddress2: string,
    addressCity: string,
    addressState: string,
    addressZipCode: string
}

const initData: DataType = {
    personalFirstName: "",
    personalLastName: "",
    personalAge: "",
    contactPhone: "",
    contactEmail: "",
    addressAddress1: "",
    addressAddress2: "",
    addressCity: "",
    addressState: "",
    addressZipCode: ""
}

const useFormContext = () => {
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
        addressZipCode: ""
    })

    const title = {
        0: 'Personal Details',
        1: 'Contact Details',
        2: 'Address Details',
        3: 'Review'
    }

    const [page, setPage] = useState(0)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const type = e.target.type
        const name = e.target.name
        const value = type === "selectedOptions"
            ? e.target.selectedOptions
            : e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const {
        addressAddress2,
        ...requiredInputs } = data

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = Object.keys(data)
    .filter(key => key.startsWith('personal'))
    .map(key => data[key as keyof typeof data])
    .every(Boolean)

    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('contact'))
        .map(key => data[key as keyof typeof data])
        .every(Boolean)

    const canNextPage3 = Object.keys(data)
        .filter(key => key.startsWith('address') && key !== 'addressAddress2')
        .map(key => data[key as keyof typeof data])
        .every(Boolean)

    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)
        || (page === 2 && !canNextPage3)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    return { 
        handleChange,
        handleSelectChange,
        page,
        setPage,
        title,
        data,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide
    }
}

type UseFormContextType = ReturnType<typeof useFormContext>

const initContextState: UseFormContextType = {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => { },
    handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => { },
    title: {
        0: 'Personal Details',
        1: 'Contact Details',
        2: 'Address Details',
        3: 'Review'
    },
    page: 0,
    setPage: () => { },
    data: initData,
    canSubmit: true,
    disablePrev: true,
    disableNext: true,
    prevHide: '',
    nextHide: '',
    submitHide: ''
}

export const CounterContext = createContext<UseFormContextType>(initContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

export const CounterProvider = ({
    children
}: ChildrenType): ReactElement => {

    return (
        <CounterContext.Provider value={useFormContext()}>
            {children}
        </CounterContext.Provider>
    )
}

type UseFormHookType = {
    data: DataType,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    page: number,
    title: {},
    setPage: React.Dispatch<React.SetStateAction<number>>,
    canSubmit: boolean,
    disablePrev: boolean,
    disableNext: boolean,
    prevHide: string | boolean,
    nextHide: string | boolean,
    submitHide: string | boolean
}

export const useForm = (): UseFormHookType => {
    const { data, handleChange, handleSelectChange, title, page, setPage, canSubmit, disablePrev, disableNext, prevHide, nextHide, submitHide } = useContext(CounterContext)
    return { data, handleChange, handleSelectChange, title, page, setPage, canSubmit, disablePrev, disableNext, prevHide, nextHide, submitHide }
}