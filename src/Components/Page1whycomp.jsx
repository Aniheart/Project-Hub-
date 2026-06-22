import React from 'react'
import { Search,UsersRound,Waypoints } from 'lucide-react'
function Page1whycomp(props) {
    const Icons = props.icon
  return (
    <div className='why_card'>
<div className="icon_div">< Icons style={{color:'rgb(102, 69, 247)' }} size={22}/></div>
  
  <div className="why_text">
<h3 className='card_heading' >{props.heading}</h3>
<p className='card_subtitle'>
{props.subtext}

</p>
  

  </div>
  </div>
  )
}

export default Page1whycomp