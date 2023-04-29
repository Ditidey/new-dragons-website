import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, eveniet.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, eveniet.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, eveniet.</p>

            <h5>Back to <Link to='/register'>Register</Link></h5>
        </div>
    );
};

export default Terms;