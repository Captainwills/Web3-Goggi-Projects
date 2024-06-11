import { useState } from 'react'
import Form from './components/form';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
function App() {
  const [showForm, setShowForm] = useState(false)
const handleClick=()=>{
  setShowForm(!showForm)
}

  return (
    <div>
      <div className='Header'>
        <h1>GOGGi WALLET</h1>
      </div>

      <div className='Welcome'>
         <h2>Welcome!</h2>
      <h4>A Self Custodian Wallet</h4>
        
          
            <div> <img src= "/digital-wallet.png" width= "45" height= "45"/>
        </div>
          
        
        </div>

      <div className = "statement">
      
      <p>Import Wallet</p>
      
      <p>  or</p>
      <p3>Create a New Wallet</p3>
      </div>
      

      <p className="help-and-suport"
      onClick={handleClick}>
        Need help? Contact Support @GoggiBlockSupport
      
    
      
      </p>
      
      {
        showForm && (<Form/> )
      }
      <p className="read-documentation"> Read-doc.
  
    </p>
    
    </div> )
}

export default App
