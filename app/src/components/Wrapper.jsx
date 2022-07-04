import React from 'react';

import logo2 from '../img/logo2.png'


const Wrapper = () => {
    return (
        <div className='wrapper'>

            <div className="logo2">
                <img className='avaras' src={logo2} />
                <div className="wrapper-fluid">
                    <h2 style={{ color: '#EC994B' }}>- What they are say -</h2>

                    <h1 style={{ textAlign: 'inheret' }}>What they are says <br />about us</h1>

                    <div className="olim"><span style={{ position: "relative", left: "7rem", top: "1rem", fontSize: "19px" }}>Erick Smith</span></div>

                    <ol style={{ marginTop: "2rem" }}>“All service provided is so perfect and fast, and <br /> im so happy to order from this company”</ol>
                    
                    <ul style={{marginTop:" 1.5rem", fontSize:" 29px", color:" #FFCC17"}}>
                        <i style={{color:'black'}}>5.0</i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Wrapper;