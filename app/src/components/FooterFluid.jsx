import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'
const FooterFluid = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu((e) => !e)
    }



    return (
        <div className={toggleMenu ? 'footer-fluid expanded' : 'footer-fluid'}>

            <div className="row">
                <div className="revanse">
                    <i class="fab fa-facebook"></i>
                <i class="fas fa-envelope"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-twitter"></i>  
                </div>
                <h3>F&D</h3>
              
            </div>


            <div className="footer-link">


                <ul>

                    <h2>Our Product</h2>
                    <li>Support</li>
                    <li>Guede</li>

                </ul>

                <ul>

                    <h2>Terms & policies</h2>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>

                </ul>

                <ul>

                    <h2>Company</h2>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>


                <ul>
                    <h2>Contact</h2>
                    <li>(+62) 893912392190</li>
                    <li>agecnycr@gmail.com</li>
                </ul>


                <ul>
                    <h2>Food Delivery</h2>
                    <li>KFC Delivery</li>
                    <li>Bungo Tanjung Delivery</li>
                </ul>





            </div>

            <div className="toggle-icon" onClick={toggleNav}>
                {toggleMenu ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
            </div>

        </div>
    );
};

export default FooterFluid;