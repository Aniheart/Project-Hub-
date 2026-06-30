import { ArrowBigLeft, ArrowRight, FolderOpen } from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'
function YourProject() {
  return (
    <div className='dashboard_container'>
        
        <h1 className='project_heading' >Your Project</h1>

<div className='project_link'>

    <p className='dashboard_description'>Projects you own and are recruiting for</p>
    <div className='Project_link2'>
<Link to="/" className='discover_more_link'>Discover <ArrowRight className='arrowstyle'/></Link>
 
    </div>
</div>
<div className="projectView">
<FolderOpen/>
<h4>No project yet</h4>
<p className='dashboard_description'>Post your first idea and find teammates.</p>
<div className="add-btn">
            <button className="add_project_btn2">+ Add Project</button>

    </div>

</div>

    </div>
  )
}

export default YourProject