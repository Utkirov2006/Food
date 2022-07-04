import React from 'react';

import footer from '../img/footer.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img className='footer-img' src={footer} />

            <div className="colum">
                <h1>Get more discount if <br /> you order from us</h1>
                <h2>Join with us then you must have get a discount and get promo <br /> from us to you , enjoy and happy to order.</h2>
                <input type="text" placeholder='Your Email Addres'/>
                <button className='get'>Get</button>
            </div>

        </div>
    );
};

export default Footer;