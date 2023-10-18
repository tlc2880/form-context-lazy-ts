import { useForm }  from "../../context/FormContext";

const Address = () => {
    const { data, handleChange, handleSelectChange }  = useForm()

    const content = (
        <>
            <label htmlFor="addressAddress1">Address</label>
            <input
                type="text"
                id="addressAddress1"
                name="addressAddress1"
                placeholder="123 W. Main Street"
                pattern="[\w\d\s.#]{2,}"
                value={data.addressAddress1}
                onChange={handleChange}
            />

            <label htmlFor="addressAddress2"></label>
            <input
                type="text"
                id="addressAddress2"
                name="addressAddress2"
                placeholder="Apt. 2"
                value={data.addressAddress2}
                onChange={handleChange}
            />

            <label htmlFor="addressCity">City</label>
            <input
                type="text"
                id="addressCity"
                name="addressCity"
                placeholder="New York"
                pattern="[\w\d\s.#]{2,}"
                value={data.addressCity}
                onChange={handleChange}
            />

            <label htmlFor="addressState">State</label>
            <select
                id="addressState"
                name="addressState"
                value={data.addressState}
                onChange={handleSelectChange}
            >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>

            <label htmlFor="addressZipCode">Zip Code</label>
            <input
                type="text"
                id="addressZipCode"
                name="addressZipCode"
                placeholder="12345"
                pattern="[0-9]{5}"
                maxLength = {5}
                value={data.addressZipCode}
                onChange={handleChange}
            />
        </>
    )
    return content
}
export default Address