import React from 'react';
import './CheckOut.css';

import about1 from '../../assets/img/about1.png';
import about2 from '../../assets/img/about2.png';
import about3 from '../../assets/img/about3.png';
const CheckOut = () => {

    return (
        <div>
            <div className=' mt-3 p-4'>
                <h1 className='photographer-services'>All Photographer </h1>
                <div className='row'>
                    <div className='d-flex p-3 my-3'>
                        <div className='p-5 m-3 mt-3' >
                            <h2 className='name'>Frans Lanting</h2>
                            <h4 >Phone:  +746454223</h4>
                            <h4>Price:  $4534</h4>
                            <p className='describetion'>A professional Photographer does such work whish put in bellow.<br></br>
                                1.Editorial Photography. magazines, 2.supplements, newspapers and websites. ...
                                3. Advertising Photography. ...
                                4.  Portrait Photography. ...
                                5. Food & Drink Photography. ...
                                6. Cookbook Photography. ...
                                7. restaurant & Hospitality Photography. ...
                                8. Event Photography. ...
                                9. Social Media and Email Marketing 10.Photography.</p>
                        </div>
                        <div >
                            <img className='me-2 rounded-2' src={about1} alt="" />
                        </div>
                    </div>
                    <div className=' d-flex p-3 my-3'>
                        <div className='p-3 mt-3'>
                            <img className='me-2 rounded-2' src={about2} alt="" />
                        </div>
                        <div className='p-5 m-3 mt-3'>
                            <h2 className='name'>Robert Capa</h2>
                            <h4 >Phone:  +876554223</h4>
                            <h4>Price:  $9534</h4>
                            <p className='describetion'>A professional Photographer does such work whish put in bellow.<br></br>
                                1.Editorial Photography. magazines, 2.supplements, newspapers and websites. ...
                                3. Advertising Photography. ...
                                4.  Portrait Photography. ...
                                5. Food & Drink Photography. ...
                                6. Cookbook Photography. ...
                                7. restaurant & Hospitality Photography. ...
                                8. Event Photography. ...
                                9. Social Media and Email Marketing 10.Photography.</p>
                        </div>

                    </div>
                    <div className=' d-flex p-3 my-3'>
                        <div className='p-5 m-3 mt-3'>
                            <h2 className='name'>Dorothea Lange</h2>
                            <h4 >Phone:  +23233454223</h4>
                            <h4>Price:  $5344</h4>
                            <p className='describetion'>A professional Photographer does such work whish put in bellow.<br></br>
                                1.Editorial Photography. magazines, 2.supplements, newspapers and websites. ...
                                3. Advertising Photography. ...
                                4.  Portrait Photography. ...
                                5. Food & Drink Photography. ...
                                6. Cookbook Photography. ...
                                7. restaurant & Hospitality Photography. ...
                                8. Event Photography. ...
                                9. Social Media and Email Marketing 10.Photography.</p>
                        </div>
                        <div>
                            <img className='me-2 rounded-2' src={about3} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;