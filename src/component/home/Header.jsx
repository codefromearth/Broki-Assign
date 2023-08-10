import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='container'>
   
    <div className='upper-section'>
    <header className='header'>
    
    <h1>Broki</h1>
    <h3>Location</h3>
    </header>
    
    <ul className='menu'>
    <li>Cloud Kitchen</li>
    <li>cafe</li>
    <li>Dine in</li>
    <li>QSR</li>
    <li>take away</li>
    </ul>
    <input type='text' id="inputarea"/>
    </div>
    
    <div className="bottom-section">
      <span>setup included</span>
      <span>price</span>
      <span>Area: Sq ft</span>
    </div>
    
    
   
    </div>
  )
}

export default Header