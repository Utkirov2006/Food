import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu((e) => !e)
    }



    return (
        <div className={toggleMenu ? 'navbar expanded' : 'navbar'}>
            <h1>F&D</h1>




            <ul>

                <li>Home</li>
                <li>Menu</li>
                <li>Services</li>
                <li>Contact</li>

            </ul>

            <div className="user-box">
                <span class="user">
                    <i class="fas fa-shopping-bag bag"></i>
                </span>
                <button className='btn' style={{ border: " 2px solid #EC994B",color:"#EC994B" }}>Register</button>
                <button className='btn' style={{ background: "#EC994B", border: "none" }}> Login</button>
            </div>

            <div className="toggle-icon" onClick={toggleNav}>
                {toggleMenu ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
            </div>




        </div>
    );
};

export default Navbar;