import React, { useEffect, useState } from 'react';

const UseHookUser = (url) => {
    const [photographers, setPhotographers] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPhotographers(data))
    }, [])
    return photographers;
};

export default UseHookUser;