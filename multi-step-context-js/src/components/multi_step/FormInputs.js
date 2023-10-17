import Personal from "./Personal"
import Address from "./Address"
import Contact from "./Contact"
import Review from "./Review"

import useFormContext from "../../hooks/useFormContext"

const FormInputs = () => {
    const { page } = useFormContext()
    const display = {
        0: <Personal />,
        1: <Contact />,
        2: <Address />,
        3: <Review />
    }
    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )
    return content
}
export default FormInputs