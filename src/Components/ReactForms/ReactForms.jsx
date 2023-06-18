import { useState } from 'react'

const ReactForms = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        acceptTerms: false
    });

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

  return (
    <section>
        <form>
            <input type="text" placeholder='First Name' onChange={handleChange} value={formData.firstName} name="firstName" /><br />
            <input type="text" placeholder='Last Name' onChange={handleChange} value={formData.lastName} name="lastName" /><br />
            <input type="email" placeholder='johndoe@email.com' onChange={handleChange} value={formData.email} name="email" /><br />
            <textarea placeholder='Write your comments here...' onChange={handleChange} value={formData.comments} name="comments" /><br />
            <input type="checkbox" id='termsCondition' checked={formData.acceptTerms} name="acceptTerms"/>
            <label htmlFor="termsCondition"> Do you agree to our terms and condition?</label>
            {/* RADIO BUTTONS */}
            <br />
            <fieldset>
                <legend>Current employment status</legend>

                <input type="radio" id='unemployed' />
                <label htmlFor="unemployed"> Unemployed</label>
                <br />
                <input type="radio" id='part-time' />
                <label htmlFor="part-time"> Part-time</label>
                <br />
                <input type="radio" id='full-time' />
                <label htmlFor="full-time"> Full-time</label>

            </fieldset>
        </form>
    </section>
  )
}

export default ReactForms