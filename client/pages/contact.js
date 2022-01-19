import { useState } from "react"
import styled from "styled-components"
import Head from 'next/head'

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
                console.log('IT WORKED!!!')
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
        <Container>
            <Head>
                <title>
                    {`Midnight Motorsports | Contact Us`}
                </title>
            </Head>
            <Form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <Input type="text" name="fullName" value={formState.fullName} placeholder="Full Name" required onChange={handleChange}></Input>

                <label>Email</label>
                <Input type="email" name="email" value={formState.email} placeholder="Email" required onChange={handleChange}></Input>

                <label>Choose Subject</label>
                <Select name="subject" onChange={handleChange} value={formState.subject} required>
                    <Option value="Looking For A Part">Looking For A Part</Option>
                    <Option value="Looking For A Suggestion">Looking For A Suggestion</Option>
                    <Option value="Looking For A Custom Part Or Job">Looking For A Custom Part Or Job</Option>
                </Select>

                <label>Message</label>
                <Textarea name="message" value={formState.message} onChange={handleChange} placeholder="Message"></Textarea>

                <SubmitBtn className='submitBtn' type="submit" value="Submit">Submit</SubmitBtn>
                {contacted && <div className="alert alert-success mt-4">Your message has been sent. You will receive a reply within 3 business days. Thank you!</div>}
                {contactFailed[0] && <div className="alert alert-danger mt-4">There was an error sending your message. Error: {contactFailed[1]}. Please try again later.</div>}
            </Form>
        </Container>
    )
}

const Container = styled.div`
    height: 74.7vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 20px;

    @media (max-width: 450px) {
        width: 320px;
    }
`
  
const Input = styled.input`
    background: none;
    border-radius: 8px;
    color: white;
    padding: 10px;
    font-weight: bold;
    border: 2px solid white;

    &:hover {
        box-shadow: 0px 0px 1px 1px white; 
    }

    &:focus {
        box-shadow: 0px 0px 2px 2px white; 
    }
`

const Select = styled.select`
    background: none;
    color: white;
    padding: 10px;
    border: 2px solid white;
    border-radius: 8px;

    &:hover {
        box-shadow: 0px 0px 1px 1px white;  
    }

    &:focus {
        box-shadow: 0px 0px 2px 2px white; 
    }
`

const Option = styled.option`
    background: rgb(15, 3, 71);
    color: white;
    padding: 10px;
    border: 2px solid white;
    border-radius: 8px;
`

const Textarea = styled.textarea`
    background: none;
    color: white;
    padding: 10px;
    border: 2px solid white;
    border-radius: 8px;

    &:hover {
        box-shadow: 0px 0px 1px 1px white;  
    }

    &:focus {
        box-shadow: 0px 0px 2px 2px white; 
    }
`

const SubmitBtn = styled.button`
    display: flex;
    justify-items: center;
    color: #0B132B;
    margin-top: 20px;
    padding: 1rem;
    border-radius: 8px;
    background: #6FFFE9;
    transition: 400ms;
    font-weight: bolder;
    display: inline-block;

    &:hover {
        transition: 400ms;
        background-color: #6fffe990;
        box-shadow: 0px 0px 1px 1px white; 
    }
`