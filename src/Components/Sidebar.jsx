import React from 'react';
import './Sidebar.css';
import room from '../Images/room.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
  return (
    <div class="sidebar">
        <p class="sidehead">Home /&nbsp;<b>Product Detail Page</b></p>
        <p class="tags">
            <div class="tagtext">Tags:</div>
            <div class="uppertag">
                <p class="tagcont">Kitchen</p>
                <p class="tagcont">L-Shape</p>
            </div>
                <div class="tagcont l">Sustainable</div>
        </p>
        <div className="contim">
        <div class="images">
            <div><img src={room} alt="room"/></div>
            <div><img class="active" src={room} alt="room"/></div>
            <div><img src={room} alt="room"/></div>
            <div><img src={room} alt="room"/></div>
            
        </div>
        <img class="largeimg active" alt="room" src={room}/>
        
        </div>        

       <FontAwesomeIcon icon={faAngleDown} className="angicn"/>
       
        
        




    </div>
  )
}

export default Sidebar;