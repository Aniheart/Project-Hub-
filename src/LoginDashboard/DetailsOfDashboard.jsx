import React from 'react'
import DashboardCard from './DashboardCard'
import {
  FolderKanban,
  UserPlus,
  Clock3,
} from "lucide-react";
function DetailsOfDashboard() {
    const dashboardStats = [
  {
    id: 1,
    title: "Created",
    value: 0,
    icon: FolderKanban,
  },
  {
    id: 2,
    title: "Joined",
    value: 0,
    icon: UserPlus,
  },
  {
    id: 3,
    title: "Pending",
    value: 1,
    icon: Clock3,
  },
];
  return (



    <div className='dashboard_details_card'>
      {dashboardStats.map((items,idx)=>{
return <DashboardCard
        key={idx}
        id={items.id}
        title ={items.title}
        value={items.value}
        icon = {items.icon}
/>

})}


    </div>
  )
}

export default DetailsOfDashboard