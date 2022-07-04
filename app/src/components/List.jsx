import React from 'react';


import imgw from '../img/Ellip1.png'
import imgq from '../img/Ellip2.png'



const List = () => {
    return (
        <div className='list'>
            <ul style={{ textAlign: "center", color: "#EC994B" }}>- What they are say -</ul>
            <h1 style={{ textAlign: "center" }}>Comment for Food</h1>

            <div className="ellipse1"></div>
            <div className='ellipse'>
                <img className='wrap' src={imgw} />
                <img className='wrap2' src={imgq} />
            </div>

            <div className="ellipse2"></div>

            <div className="urn">
                <h4 style={{ margin: "1rem", fontSize: '20px' }}>Bella Wish</h4>
                <ol style={{ margin: "1rem", fontSize: '17px' }}>“All service provided is so perfect and fast, and im so happy to order from this company”</ol>
            </div>
            <div className="urn2">
                <h4 style={{ margin: "1rem", fontSize: '20px' }}><span>Smith Teen</span></h4>
                <ol style={{ margin: "1rem", fontSize: '17px' }}>“All service provided is so perfect and fast, and im so happy to order from this company”</ol>

            </div>


        </div>
    );
};

export default List;