import React from 'react';
import './Language.css'

const Language = ({pd,handleAddToList}) => {
    const {id,name,description,timeRequired,img} = pd;
    return (
        <div className='program'>
           <img src={img} alt="" /> 
           <h2>{name}</h2>
           <p><small>{description.slice(0,100)}...</small></p>
           <h4>Time Required: {timeRequired} min</h4>
           <button onClick={() => handleAddToList(pd)} className='btn-add'>Add To List</button>
        </div>
    );
};

export default Language;