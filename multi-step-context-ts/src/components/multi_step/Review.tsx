import { useForm }  from "../../context/FormContext";

const Review = () => {
    const { data } = useForm()

    const content = (
        <>
            <h4>Personal Details:</h4>
            <label htmlFor="personalFirstName">First Name: {data.personalFirstName}</label>
            <label htmlFor="personalFirstName">Last Name: {data.personalLastName}</label>
            <label htmlFor="personalAge">Age: {data.personalAge}</label> 
            <br />
            <h4>Contact Details:</h4>
            <label htmlFor="contactPhone">Phone: {data.contactPhone}</label>
            <label htmlFor="contactEmail">Email: {data.contactEmail}</label>
            <br />
            <h4>Address Details:</h4>
            <label htmlFor="addressAddress1">Address 1: {data.addressAddress1}</label>
            <label htmlFor="addressAddress2">Address 2: {data.addressAddress2}</label>
            <label htmlFor="addressCity">City: {data.addressCity}</label>
            <label htmlFor="addressState">State: {data.addressState}</label>
            <label htmlFor="addressZipCode">Zipcode: {data.addressZipCode}</label>
        </>
    )

    return content
}
export default Review