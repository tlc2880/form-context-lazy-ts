import { useForm } from "../../context/FormContext"

const Personal = () => {
    const { data, handleChange } = useForm()
    const content = (
        <div className="flex-col">
            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="personalFirstName">First Name</label>
                    <input
                        type="text"
                        id="personalFirstName"
                        name="personalFirstName"
                        placeholder="Joe"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.personalFirstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="personalLastName">Last Name</label>
                    <input
                        type="text"
                        id="personalLastName"
                        name="personalLastName"
                        placeholder="Doe"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.personalLastName}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="flex-col">
                <label htmlFor="personalAge">Age</label>
                <input
                    type="text"
                    id="personalAge"
                    name="personalAge"
                    placeholder="50"
                    pattern="\b([1-9]|[1-9][0-9]|1[01][0-9]|12[0])\b"
                    maxLength={3}
                    value={data.personalAge}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
    return content
}
export default Personal