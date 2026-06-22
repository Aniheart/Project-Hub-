import React from 'react'
import Page1whycomp from './Page1whycomp'
import { Search,UsersRound,Waypoints } from 'lucide-react'
import bg from '../assets/bg.jpg';

function Main_content_2() {
    const featureCards = [
  {
    icon: Search,
    heading: "Find the right team",
    subtext:
      "Filter by skills, tech stack, and category to discover projects that match your ambitions.",
  },
  {
    icon: UsersRound,
    heading: "Apply in one click",
    subtext:
      "Send a short pitch to project owners. They accept or reject — no awkward back-and-forth.",
  },
  {
    icon: Waypoints,
    heading: "Built for builders",
    subtext:
      "Designed to feel like the tools you already love: Linear, GitHub, Notion. Dark, fast, sharp.",
  },
];
    return (
        <div className='main-content' style={{paddingTop:10}} 
        //  style={{
        //     backgroundImage: `url(${bg})`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat:'repeat',
        //     }}
        >
            <div className="meta-tag-why">WHY PROJECT HUB?</div>
            
            <h1 className='why_title' >Project ideas die without teams. <br />We
                <span className='title-ship'> <b>fix</b> </span> that.
            </h1>
            <div className="whycomponent">
        {featureCards.map(function(detail,idx)
        {
            return  <Page1whycomp
            key = {idx}
            icon ={detail.icon}
            heading={detail.heading}
            subtext ={detail.subtext}
            />
        })}
            </div>
        

        </div>
    )
}

export default Main_content_2