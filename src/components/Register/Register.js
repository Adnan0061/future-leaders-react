import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const { googleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'
    console.log(history)
    console.log(location)
    console.log(redirect_url)

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(()=>{
            history.push(redirect_url)
        })
    }

    return (
        <div className='my-5 header-padding'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} />
                <br/>
                <input {...register("email", { required: true })} />
                <br/>
                <input {...register("password", { required: true })} />
                <br/>
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
            </form>
            <hr />
            <button onClick={handleGoogleSignIn}>Google sign In</button>
        </div>
    );
};

export default Register