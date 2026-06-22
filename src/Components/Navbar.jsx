import {React} from 'react'
import { Compass} from "lucide-react";
import { Link,useLocation} from "react-router-dom";
function Navbar() {
   const location = useLocation();
   console.log(location.pathname);
   
  return (
    <div className='navbar'>
      <div className="left-nav">
  <Link to = '/' 
  style={{
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none"
  }}
  
  >Project Hub</Link>

  
  <Link to="/" className='left-nav-link'><Compass size={18} />Discover</Link>
</div>
<div className="right-nav">


 

{(location.pathname !== '/createAccount' && 
location.pathname !== '/signup') && (
<Link to="/createAccount" className="login-link">
    Login
  </Link>
)}


<Link to="/createAccount">
  <button className='get-started-btn'>Get Started</button>

</Link>
</div>
    </div>
  )
}

export default Navbar