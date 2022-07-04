import React from 'react';
import Cards from './Cards';

import foto1 from '../img/foto (1).png'
import foto2 from '../img/foto (2).png'
import foto3 from '../img/foto (3).png'

const Box = () => {
    return (
        <div className='box'>
            <ol style={{ textAlign: "center",marginBottom:"1rem",marginTop:'1rem',color:"#EC994B" }}>- Our Services -</ol>
            <h2 style={{ textAlign: "center" }}>Our serve just for you</h2>

            <div className="card">


                <Cards foto={foto1} name='Delivery Food' about='Lorem ipsum dolor sit amet, consectetur ' />
                <Cards foto={foto2} name='Easy to order' about='Lorem ipsum dolor sit amet, consectetur ' />
                <Cards foto={foto3} name='Fastest Delivery' about='Lorem ipsum dolor sit amet, consectetur ' />

            </div>
        </div>
    );
};

export default Box;