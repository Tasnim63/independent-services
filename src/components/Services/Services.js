import React, { useState, useEffect } from 'react';
import './Services.css'
import pic1 from '../../assets/img/pic1.png'
import pic2 from '../../assets/img/pic2.png'
import pic3 from '../../assets/img/pic3.png'
import PhotographerInfo from '../PhotographerInfo/PhotographerInfo';
import UseHookUser from '../../Hooks/UseHookUser';
const Services = () => {
    const photographers = UseHookUser('phograpper.json');

    if (photographers.length) {
        photographers.length = 3;
    }
    return (
        <div className=" container-fluid">
            <div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={pic3} class="d-block  img-fluid carosel-img" alt="..." />
                            <div class="carousel-caption  d-md-block">
                                <h3 className=' text-center carousel-heading'>I AM A PHOTOGRAPPER !!!</h3>
                                <p className=' text-start carouser-des'>A photographer setting up a shot with the aid of a tripod.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={pic2} class="d-block  img-fluid carosel-img" alt="..." />
                            <div class="carousel-caption  d-md-block">
                                <h3 className='carousel-heading'>I AM A PHOTOGRAPPER !!!</h3>
                                <p className=' text-start carouser-des'>A photographer setting up a shot with the aid of a tripod.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={pic1} class="d-block  img-fluid carosel-img" alt="..." />
                            <div class="carousel-caption  d-md-block">
                                <h3 className='carousel-heading'>I AM A PHOTOGRAPPER !!!</h3>
                                <p className=' text-start carouser-des'>A photographer setting up a shot with the aid of a tripod.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='row mt-5 p-4'>
                <h1 className='photographer-services'>Photographer Services</h1>
                {
                    photographers.map(photographer => <PhotographerInfo
                        key={photographer.id}
                        photographer={photographer}
                    ></PhotographerInfo>)
                }
            </div>
        </div>
    );
};

export default Services;
{/* <div>
            
<div className='col col-12'>
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={pic1} className="img-fluid carosel-img d-block " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h3 className='carousel-heading'>I AM A PHOTOGRAPPER !!!</h3>
                    <p className='carouser-des'>A photographer setting up a shot with the aid of a tripod.</p>
                </div>
            </div>
            <div className="carousel-item active">
                <img src={pic2} className="img-fluid carosel-img d-block " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h3 className='carousel-heading'>I AM A PHOTOGRAPPER !!!</h3>
                    <p className='carouser-des'>A photographer setting up a shot with the aid of a tripod.</p>
                </div>
            </div>
            <div className="carousel-item active">
                <img src={pic3} className="img-fluid carosel-img d-block " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h3 className='carousel-heading'>I AM A PHOTOGRAPPER !!!</h3>
                    <p className='carouser-des'>A photographer setting up a shot with the aid of a tripod.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>

<div className='row mt-5 p-4'>
    <h1 className='photographer-services'>Photographer Services</h1>
    {
        photographers.map(photographer => <PhotographerInfo
            key={photographer.id}
            photographer={photographer}
        ></PhotographerInfo>)
    }
</div>
</div> */}