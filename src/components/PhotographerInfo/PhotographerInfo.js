import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PhotographerInfo.css'
const PhotographerInfo = ({ photographer }) => {
    const navigate = useNavigate();
    const { img, name, price, description } = photographer;
    return (
        <div className=' col col-12 col-lg-4 col-md-12  gy-3 p-3 '>
            <div className=" shadow rounded-1 " >
                <img src={img} className="img-fluid card-img card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <h5 className="card-title">Price:{price}</h5>
                    <p className="card-describtion">{description}</p>
                    <Link to="/checkout">
                        <button onClick={() => navigate("/signup")} className='btn checkout-button '> Photographer Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PhotographerInfo;