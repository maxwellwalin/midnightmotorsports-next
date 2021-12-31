import { useState } from "react"

export default function Contact() {
    const [contacted, setContacted] = useState(false);

    const [contactFailed, setFailed] = useState([false, ''])

    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        subject: 'Looking For A Part',
        message: ''
    })

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        }).then((res) => {
            if (res.status === 200) {
                setContacted(true)
                setFormState({
                    fullName: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            }
        })
        .catch(err => setFailed([true, err]));
    }

    function handleChange(e) {
        e.preventDefault()

        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='formcontainer'>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input type="text" name="fullName" value={formState.fullName} placeholder="Full Name" required onChange={handleChange}></input>

                <label>Email</label>
                <input type="email" name="email" value={formState.email} placeholder="Email" required onChange={handleChange}></input>

                <label>Choose Subject</label>
                <select name="subject" onChange={handleChange} value={formState.subject} required>
                    <option value="Looking For A Part">Looking For A Part</option>
                    <option value="Looking For A Suggestion">Looking For A Suggestion</option>
                    <option value="Looking For A Custom Part Or Job">Looking For A Custom Part Or Job</option>
                </select>

                <label>Message</label>
                <textarea name="message" value={formState.message} onChange={handleChange} placeholder="Message"></textarea>

                <button className='submitBtn' type="submit" value="Submit">Submit</button>
                {contacted && <div className="alert alert-success mt-4">Your message has been sent. You will receive a reply within 3 business days. Thank you!</div>}
                {contactFailed[0] && <div className="alert alert-danger mt-4">There was an error sending your message. Error: {contactFailed[1]}. Please try again later.</div>}
            </form>
        </div>
    )
}
