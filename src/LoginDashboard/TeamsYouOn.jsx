import { ArrowBigLeft, ArrowRight, MoveRight } from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'
function TeamsYouOn
() {
  return (
    <div className='dashboard_container'>
        
        <h1 className='project_heading' >Teams you’re on
</h1>
   <p className='dashboard_description'>Projects where you were accepted as a member</p>
   

<div className="projectView1">


<p className='dashboard_description'>You haven’t joined any teams yet.</p>
<Link to="/" className='discover_more_link' style={{gap:5}}>Find a project<MoveRight size={15} /></Link>


</div>

    </div>
  )
}

export default TeamsYouOn
