import React, { useEffect, useState } from 'react';
import Language from '../Language/Language';
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
             <div className="activities-container">
              
              {
                 activities.map(pd => <Language  key={pd.id}
                    pd={pd}></Language>)
              }
           </div>
       
           <div className="info-container">
             <p>Cart</p>
           </div>
            
        </div>
    );
};

export default Activity;