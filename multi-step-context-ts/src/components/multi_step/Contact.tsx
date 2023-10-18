import { useForm }  from "../../context/FormContext";

const Contact = () => {
    const { data, handleChange } = useForm()
    const content = (
        <>
            <label htmlFor="contactPhone">Phone</label>
            <input
                type="text"
                id="contactPhone"
                name="contactPhone"
                placeholder="123-456-7890"
                pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
                value={data.contactPhone}
                onChange={handleChange}
            />
            <label htmlFor="contactEmail">Email</label>
            <input
                type="text"
                id="contactEmail"
                name="contactEmail"
                placeholder="name@email.com"
                pattern="^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$"
                value={data.contactEmail}
                onChange={handleChange}
            />
        </>
    )
    return content
}
export default Contact