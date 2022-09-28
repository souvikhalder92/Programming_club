import React from 'react';
import './Language.css'

const Language = ({pd}) => {
    const {id,name,description,timeRequired,img} = pd;
    return (
        <div className='program'>
           <img src={img} alt="" /> 
           <h2>{name}</h2>
           <p><small>{description.slice(0,100)}...</small></p>
           <p><small>Time Required: {timeRequired} min</small></p>
           <button className='btn-add'>Add To List</button>
        </div>
    );
};

export default Language;