import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='p-5'>
            <div className=''>
                <h2 className='blogs-qus'> Difference between authorization and authentication?</h2>
                <p className='blogs-des'>authentication is a the process of verifying who someone is, whereas authorization is the process of verifying  specific applications,  data  and files, a user has access to.In authentication process, users or persons are verified.While in this process, users or persons are validated.On other hand,Authentication needs usually user’s login details.While Authorization needs user’s privilege or security levels.</p>
            </div>
            <div>
                <h2 className='blogs-qus'> Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='blogs-des'>I use firebase because Firebase helps you build and run successful app and grow and make it a quality app.Basically, Authentication by a server entails the use of a user name and password.And Other ways to authenticate can be through voice recognition, cards,fingerprints,Token-based authentication,Certificate-based authentication , and retina scans .</p>
            </div>
            <div>
                <h2 className='blogs-qus'>What other services does firebase provide other than authentication?</h2>
                <p className='blogs-des'>There are many services which Firebase provides, Most useful of them are:
                    1. Cloud Firestore.
                    2. Cloud Functions.
                    3.Authentication.
                    4.Hosting.
                    5. Cloud Storage.
                    6. Google Analytics.
                    7.Predictions.
                    8.Cloud Messaging.</p>
            </div>
        </div>


    );
};

export default Blogs;