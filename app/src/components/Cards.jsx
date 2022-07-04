import React from 'react';

const Cards = (props) => {
    return (
        <div className='cards'>
            <img src={props.foto} />
            <h2 style={{textAlign:"center"}}>{props.name}</h2>
            <h3 style={{textAlign:"center"}}>{props.about}</h3>

            
        </div>
    );
};

export default Cards;