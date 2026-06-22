import { Sparkles,ArrowRight ,CircleCheck} from 'lucide-react'
import React from 'react'
import bg from '../assets/bg.jpg';
function MainContent() {
  return (
    <div className='main-content' 
  //   style={{
  //   backgroundImage: `url(${bg})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center'
  // }}

    >
        <div className="meta-tag">
          <Sparkles style={{color: 'rgb(102, 69, 247)'}} size={14} />
Now in beta
</div>
<h1 className='title' >Find Your Next <span className='title-ship'>Teamates <br /> Here</span></h1>
<p className='subtitle'>ProjectHub is where students, developers, and designers post project <br />ideas — and find the teammates who can pull them off.</p>
<div className="main-btns">
<button className="strt-blding-btn">Start Building Free<ArrowRight style={{backgroundColor:"white"}} size={25}/></button>
<button className="browse-btn">Browse Project</button>
</div>
<div className="bottom-main-tags">
  <ul className='tags'>
    <li className='verified-tags'><CircleCheck style={{color: 'green'}} size={15} />No credit card</li>
    <li className='verified-tags'><CircleCheck style={{color: 'green'}} size={15} /> Free forever</li>
    <li className='verified-tags'><CircleCheck style={{color: 'green'}} size={15} /> 60 second signup</li>
  </ul>
</div>

    </div>
  )
}

export default MainContent