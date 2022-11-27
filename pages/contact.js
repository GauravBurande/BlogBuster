import React, { useState } from 'react'
import styles from '../styles/contact.module.css'

const Contact = () => {
  
  const [contactInput, setContactInput] = useState({name: '', email: '', phone: '', desc:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(contactInput)

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactInput)
    }).then(res=>res.text())
    .then(data=>{
      console.log('response:', data)
      alert('Thanks for contacting us!')
      setContactInput({name: '', email: '', phone: '', desc:''})
    })
    .catch(err=>{console.error('error:', err)})
  }

  const handleChange = (e) => {
    setContactInput({...contactInput, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Contact</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.formElement}>
                <label htmlFor="name">Enter your name</label>
                <input type="text" name='name' id="name" onChange={handleChange} value={contactInput.name} aria-describedby='name' required/>
              </div>
              <div className={styles.formElement}>
                <label htmlFor="email">Email address</label>
                <input type="email" name='email' id="email" onChange={handleChange} value={contactInput.email} aria-describedby='email' required/>
              </div>
              <div className={styles.formElement}>
                <label htmlFor="phone">Phone number</label>
                <input type="phone" name='phone' id="phone" onChange={handleChange} value={contactInput.phone} aria-describedby='phone' required/>
              </div>
              <div className={styles.formElement}>
                <label htmlFor="Desc">Leave your message here</label>
                <textarea className={styles.textarea} rows={7} type="text" name='desc' id="Desc" onChange={handleChange} value={contactInput.desc} aria-describedby='Desc' required/>
              </div>
              <div className={styles.formElement}>
                <button type='submit' className={styles.submitbtn}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
