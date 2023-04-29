import React, { useContext, useState } from 'react';
import { contextProvider } from '../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {userLogin} = useContext(contextProvider);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0';

    const handleLogin =(event)=>{
              event.preventDefault();
              const form = event.target;
              const email = form.email.value;
              const password = form.password.value;

              userLogin(email, password)
              .then(result =>{
                const loggedUser = result.user;
                console.log(loggedUser)
                setError('')
                navigate(from, {replace:true})
              })
              .catch(error =>{
                setError(error.message)
              })
    }
    return (
        <div className='container mx-auto'>
            <h2>Login Please</h2>
            <form action="" onSubmit={handleLogin} >
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" name="email" id="email" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" name="password" id="password" required/>
                </div>
                <p className='text-danger'>{error}</p>
                <input type="submit" value="Login" />
            </form>
            <Link to='/register'>New to Here? Register</Link>
        </div>
    );
};

export default Login;