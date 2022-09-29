import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Language from '../Language/Language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrin } from '@fortawesome/free-solid-svg-icons'

import './Activity.css'

const Activity = () => {
    const [activities,setActivities] = useState([]);
    

    useEffect(()=>{
          fetch('activity.json')
          .then(res => res.json())
          .then(data => setActivities(data))
    },[])
    return (
        <div className='activity-container'>
         <div>
             <Header></Header>
             <div className="activities-container">
          
          {
             activities.map(pd => <Language  key={pd.id}
                pd={pd}></Language>)
          }
       </div>
         </div>
            
       
           <div className="info-container">
            <div className='info'>
              <h4><FontAwesomeIcon icon={faFaceGrin}></FontAwesomeIcon> Souvik Halder</h4>
              <p><small>Fullstack Developer</small></p>
              <p><small>souvikhalder205@gmail.com</small></p>
            </div>
            <div className='details'>
              <div className='details1'>
                <p>15+</p>
                <p>Projects</p>
                </div>
               <div className="details2">
                <p>8+
                </p>
                <p>Happy clients</p>
               </div>
            
            </div>
            <div className="break">
              <h2>Add A Break</h2>
              <div>
              <button className='btn1'>10min</button>
              <button className='btn2'>20min</button>
              <button className='btn3'>30min</button>
              <button className='btn4'>40min</button>
              </div>
            </div>
           </div>
            
        </div>
    
    );
};

export default Activity;