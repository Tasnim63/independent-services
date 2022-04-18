import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <><div className='row  bg-dark p-5 '>

            <div className=' d-flex ps-5'>
                <div> <p className=' text-white'>More About <Link to='/About'>Click Here</Link></p></div>
                <div> <p className='footer-des ps-5'><AiOutlineCopyrightCircle></AiOutlineCopyrightCircle> Photographer Services. All Right Reserved. {year}</p></div>
            </div>

        </div>
        </>
    );
};

export default Footer;