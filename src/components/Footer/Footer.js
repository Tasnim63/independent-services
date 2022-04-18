import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='container-fluid bg-dark p-5'>
            <div className='row p-3'>

                <div className='d-flex ps-5'>
                    <div> <p className=' text-white'>More About <Link to='/About'>Click Here</Link></p>
                    </div>

                    <div> <p className='footer-des ps-5'><AiOutlineCopyrightCircle></AiOutlineCopyrightCircle> Photographer Services. All Right Reserved. {year}</p>
                    </div>
                    <div className='ps-5 pe-2 ms-5'><p className=' text-white'>Contact us <span className='ms-3'> <BsFacebook /> </span>  <span className='ms-3'> <BsInstagram /></span><span className='ms-3'> <FiTwitter /></span> </p>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default Footer;