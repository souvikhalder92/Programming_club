import React from 'react';
import './Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrin,faCode,faContactBook } from '@fortawesome/free-solid-svg-icons'

const Info = ({info}) => {

    let total = 0;

    for(const activity of info)
    {

        total = parseInt(total + activity.timeRequired); 
        
    }
  
    return (
        <div>
             <div className='info'>
              <h4><FontAwesomeIcon icon={faFaceGrin}></FontAwesomeIcon> Souvik Halder</h4>
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
              <button className='btn1'>10min</button>
              <button className='btn2'>30min</button>
              <button className='btn3'>45min</button>
              <button className='btn4'>60min</button>
             
              </div>
            </div>
            <div className="exercise">
              <h2>Exercise Details</h2>
              <div className="time">
                <p>Exercise Time: {total}min</p>
              </div>
              <div className="break-time">
                <p>Break Time:</p>
              </div>
            </div>
            <div className="complete">
              <button className='btn-com'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Info;