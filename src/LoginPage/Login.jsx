import React from 'react'
import {Link} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
function Login() {
  return (

 
    <div className='login_page'> 
    
 <Link to = '/' 
  style={{
    color: " rgb(102, 69, 247)",
    fontSize: "25px",
    fontWeight: "bold",
    textDecoration: "none"
  }}
  
  >Project Hub</Link>   
<form className='login_form_main'>   
    <div className="login_form1">
        <div style={{display:'flex', flexDirection:'column', gap:7}}>
        <h3>Create your account</h3>
        <p style={{fontSize:12

        }}>Start finding teammates today</p>
   </div>     <button className='login_google_btn' >

           <FcGoogle size={15}  style={{background:'transparent'}}/>  Sign up with Google
        </button>
       
<hr style={{marginTop:15}}/>

    </div>
<div className="login_form2">
<label htmlFor="name" className='labelName'>Name</label>
<input id="username" type="text" placeholder='Your Full Name' required />
<label htmlFor="email" className='labelName'>Email</label>
<input id="username" type="email" placeholder='you@example.com'  required/>
<label htmlFor="password" className='labelName'>Password</label>
<input id="username" type="password" placeholder='At least 6 characters' required />
<button className='login_submit_btn' >

            Create account
        </button>
       <div className="new_accoount_div">
         <p
         style={{fontSize:10
         }}
         >Already have an account? <Link to ='/signup'>Sign up</Link></p>
       </div>
</div>
     </form> 
    </div>
  )
}

export default Login