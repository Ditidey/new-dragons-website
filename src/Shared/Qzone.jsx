import React from 'react';
import qzone1 from '../assets/qZone1.png'
import qzone2 from '../assets/qZone2.png'
import qzone3 from '../assets/qZone3.png'
import bg from '../assets/bg.png'
import { Button } from 'react-bootstrap';
const Qzone = () => {
    return (
        <div>
            <div className='bg-secondary bg-opacity-10 text-center p-3 my-4'>
               <img src={qzone1} alt="" />
               <img src={qzone2} alt="" />
               <img src={qzone3} alt="" />
            </div>
            <div className='position-relative'>
                <img src={bg} alt=""  />
                 <div className="position-absolute">
                 <h4  >Create an amazing News paper</h4>
                <p >Explores thousands of option and easy to read. One click find many resources and more.</p>
                <Button   variant="danger">Learn More</Button>
                 </div>
            </div>
        </div>
    );
};

export default Qzone;