import Personal from "./Personal"
import Address from "./Address"
import Contact from "./Contact"
import Review from "./Review"
import { useForm } from '../../context/FormContext'

const FormInputs = () => {
    const { page } = useForm()
    const display = {
        0: <Personal />,
        1: <Contact />,
        2: <Address />,
        3: <Review />
    }
    const content = (
        <div className="form-inputs flex-col">
            {display[page as keyof typeof display]}
        </div>
    )
    return content
}
export default FormInputs