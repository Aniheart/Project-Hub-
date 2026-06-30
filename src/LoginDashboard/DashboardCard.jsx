import React from 'react'
import { Bold, FolderOpen } from 'lucide-react'
function DashboardCard(props) {
  return (
    <div className='dashboard_card_style' >
    <div className='folder_icon'>
        <props.icon className='foldericonstyle' size={30}/>  
        </div>  
<div>
    <p className='cardDetails' >{props.title}</p>
    <h1 className='dashboard_number'>{props.value}</h1>
</div>
    </div>
  )
}

export default DashboardCard