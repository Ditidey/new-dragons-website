import React, { useContext, useState } from 'react';
import { contextProvider } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const {userRegister} = useContext(contextProvider);
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);

    const handleAccept =event=>{
        setAccept(event.target.checked)
    }
    const handleRegister =(event)=>{
              event.preventDefault();
              const form = event.target;
              const name = form.name.value;
              const photo = form.photo.value;
              const email = form.email.value;
              const password = form.password.value;

              userRegister(email, password)
              .then(result =>{
                const loggedUser = result.user;
                console.log(loggedUser)
                setError('')
              })
              .catch(error =>{
                setError(error.message)
              })
    }
    return (
        <div className='container'>
            <h2 className='ms-5'>Register Please</h2>
            <form action="" onSubmit={handleRegister}>
                <div>
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" name="name" id="name" required/>
                </div>
                <div>
                    <label htmlFor="photo">Photo URL</label> <br />
                    <input type="text" name="photo" id="photo" required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" name="email" id="email" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" name="password" id="password" required/>
                </div> <br />
                <input 
                onClick={handleAccept}
                type="checkbox" 
                name="check" id="check"    
                />
                <label className='ms-2'>{<>Accept <Link to='/terms'>Terms & Condition</Link></>}</label>
                <p className='text-danger'>{error}</p>
                <input type="submit" value="Register" disabled={!accept}/>
            </form> <br />
            <Link to='/login'>Already register? Login</Link>
        </div>
    );
};

export default Register;