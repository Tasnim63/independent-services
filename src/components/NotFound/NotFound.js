import React from 'react';
import './NotFound.css'
import notFound from '../../assets/img/notFound.jpg'
const NotFound = () => {
    return (
        <div className='p-4 mt-5 d-flex'>
            <div>
                <h1 className='p-5 mt-5'><span className='heading'>OOOPS !!!</span> PAGE NOT FOUND</h1>
            </div>
            <div>
                <img className='notFound-img p-2' src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;