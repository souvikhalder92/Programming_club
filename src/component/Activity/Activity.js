import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Language from '../Language/Language';


import './Activity.css'

const Activity = () => {
    const [activities,setActivities] = useState([]);
    const [info,setInfo] = useState([])
    

    useEffect(()=>{
          fetch('activity.json')
          .then(res => res.json())
          .then(data => setActivities(data))
    },[])
     const handleAddToList = (activity) =>
     {
     const newInfo = [...info,activity];
     setInfo(newInfo);
     

     } 
    return (
        <div className='activity-container'>
         <div>
             <Header></Header>
             <div className="activities-container">
          
          {
             activities.map(pd => <Language  key={pd.id}
                pd={pd}
                handleAddToList={handleAddToList}></Language>)
          }
       </div>
         </div>
       
           <div className="info-container">
              <Info info={info}></Info>
           </div>
            
        </div>
    
    );
};

export default Activity;