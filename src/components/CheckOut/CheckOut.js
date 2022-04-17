import React from 'react';
import UseHookUser from '../../Hooks/UseHookUser';
import PhotographerInfo from '../PhotographerInfo/PhotographerInfo';

const CheckOut = () => {
    const photographers = UseHookUser('phograpper.json');
    return (
        <div>
            <div className='row mt-5 p-4'>
                <h1 className='photographer-services'>All Photographer </h1>
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

export default CheckOut;