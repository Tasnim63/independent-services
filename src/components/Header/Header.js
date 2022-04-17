import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import logo from '../../assets/img/logo.jpg'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from '../../Firebase/Firesbase.init';
const Header = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
        });
    }, [])
    const handdleLogout = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }
    return (
        <div>
            <nav className=" navbar navbar-expand-lg shadow-sm navbar-light bg-gray  ">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img height={50} className="rounded-circle" src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <CustomLink className="nav-link " aria-current="page" to="/services">Services</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link " to="/checkout">CheckOut</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link " to="/blogs">Blogs</CustomLink>
                            </li>
                            {
                                user?.uid ? (<button className='logout-button' onClick={handdleLogout}>Logout</button>) : (<li className="nav-item">
                                    <CustomLink className="nav-link" to="/login">Login</CustomLink>
                                </li>)
                            }
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;