import React from 'react';
import { useLocation } from 'react-router-dom';

const ComingSoonHome = () => {
    const location = useLocation()
    const name = location?.pathname.split('/')[1]
    const upname = name[0].toUpperCase() + name.slice(1)

    return (
        <div>
            <h3 className='text-4xl text-slate-500'>{upname} Section Coming Soon...</h3>
        </div>
    );
};

export default ComingSoonHome;