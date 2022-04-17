import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
            <div className='bg-dark p-5 '>
                <p></p>
                <p className='footer-des'><AiOutlineCopyrightCircle></AiOutlineCopyrightCircle> Photographer Services. All Right Reserved. {year} </p>
            </div>
            <div> </div>
        </>
    );
};

export default Footer;