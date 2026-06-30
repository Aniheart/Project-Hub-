import { Bold } from 'lucide-react'
import React from 'react'
import OneTop1 from './OneTop1'
import DetailsOfDashboard from './DetailsOfDashboard'
import YourProject from './YourProject'
import TeamsYouOn from './TeamsYouOn'
import StatusPage from './StatusPage'
function IntroPage() {
  return (
   <div className='dashboard_Intro_Name'>
   <OneTop1/>
   <DetailsOfDashboard/>
   <YourProject/>
  <TeamsYouOn/>
  <StatusPage/>
       </div>
  )
}

export default IntroPage