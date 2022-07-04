import React from 'react';


import portret1 from '../img/portret (1).png'
import portret2 from '../img/portret (2).png'
import portret3 from '../img/portret (3).png'
import portret4 from '../img/portret (4).png'
import portret5 from '../img/portret (5).png'
import portret6 from '../img/portret (6).png'
import portret7 from '../img/portret (7).png'


const Case = () => {
    return (
        <div className='case'>
            <ul style={{ textAlign: "center", color: "#EC994B" }}>- Popular Delivery -</ul>
            <h1 style={{ textAlign: "center" }}>Trending food</h1>
            <div className="l">
                <img id='id' src={portret7} />
                <img id='id' className='img1' src={portret1} />
                <img id='id' className='img2' src={portret2} />
                <img id='id' className='img3' src={portret3} />
                <img id='id' className='img4' src={portret4} />
                <img id='id' className='img5' src={portret5} />
                <img id='id' className='img6' src={portret6} />
            </div>



        </div>
    );
};

export default Case;