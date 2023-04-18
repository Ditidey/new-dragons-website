import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data =>  setCategories(data))
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Container>
            <h4>All Categories</h4>
            <h4 className='bg-secondary bg-opacity-10 p-3'>National News</h4>
             <div className='m-4'>
                 
                  {
                    categories.map(category => <p key={category.id}>
                             <Link to={`/category/${category.id}`} className='text-dark text-decoration-none hover-bg-secondary'> {category.name}</Link>
                    </p>)
                  }
             </div>
        </Container>
    );
};

export default LeftNav;