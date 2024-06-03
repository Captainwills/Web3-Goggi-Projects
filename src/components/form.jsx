import React from 'react'

function Form() {

      const handleSubmit = (e) => {
        e.preventDefault()
        alert('submitting')
      } 
  return (
    <div>
      <form className='supportForm' onSubmit={handleSubmit}> 
      
      <input type= "text" id = "username" name = "username" placeholder = "Enter Username here"/><br/><br/>

      <input type = "email" id = "e-mail" name = "e-mail" placeholder = "Enter Email here @mail.com "/><br/>
      <br/>
      <input type = "text" id = "message" name = "message" placeholder = "Type Your Message here...."/><br/>
      <br/>
      <button type = "submit">Submit </button>
      </form>
    </div>
  )
}

export default Form

