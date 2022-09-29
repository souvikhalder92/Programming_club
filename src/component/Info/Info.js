import React, { useEffect, useState } from 'react';
import './Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrin,faCode,faContactBook } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Info = ({info}) => {
    const [time,setTime] = useState(0);
   
    let total = 0;

    for(const activity of info)
    {
    

        total = parseInt(total + activity.timeRequired); 
        
    }
    

    const handleToast = () => toast("Wow!!!You Completed Your Exercise!");
  

    const timeSet = (time) =>
    {
      
      
     setTime(time); 
     localStorage.setItem('time',JSON.stringify(time)); 
       

    }
    useEffect(() => {
    
        const preTime = localStorage.getItem('time');
        if(preTime)
        {
            setTime(preTime);
        }       
       

    },[time])


  
    return (
        <div>
             <div className='info'>
              <h2><FontAwesomeIcon icon={faFaceGrin}></FontAwesomeIcon> Souvik Halder</h2>
              <p><small><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> Fullstack Developer</small></p>
              <p><small><FontAwesomeIcon icon={faContactBook}></FontAwesomeIcon> souvikhalder205@gmail.com</small></p>
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
              <button onClick={() => timeSet(10)} className='btn1'>10min</button>
              <button onClick={() => timeSet(30)}className='btn2'>30min</button>
              <button onClick={() => timeSet(45)} className='btn3'>45min</button>
              <button onClick={() => timeSet(60)} className='btn4'>60min</button>
             
              </div>
            </div>
            <div className="exercise">
              <h2>Exercise Details</h2>
              <div className="time">
                <p>Exercise Time: {total}min</p>
              </div>
              <div className="break-time">
                <p>Break Time: {time}min</p>
              </div>
            </div>
            <div className="complete">
              <button onClick={handleToast} className='btn-com'>Activity Completed</button>
              <ToastContainer/>
            </div>
        </div>
    );
};

export default Info;