import React from 'react';
import { useForm } from 'react-hook-form';
import { useAxiosPost } from '../../hooks/useAxiosPost';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { executePost } = useAxiosPost();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const onSubmit = async (props) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL + '/auth/login';
    try {
      const response = await executePost(apiUrl, props);
      if (response) {
        console.log(response);
        return navigate('/dashboard');
      }
    } catch (error) {
      console.error('Une erreur est survenue', error);
    }
  }

  return (
    <div className="h-screen flex bg-white">

      <div className="w-1/2 flex justify-center items-center bg-gray-50">
        <img
          src="assets/images/login_fuse.svg"
          alt="Fuse illustration"
          className="top-0 left-0 absolute w-44 h-44"
        />
        <img
          src="assets/images/login_astro.svg"
          alt="Astronaut Illustration"
          className="w-80 h-80"
        />
      </div>


      <div className="w-1/2 flex flex-col justify-center items-center p-10">

        <div className="flex items-center mb-10">
          <img src="assets/logo.svg" alt="Derum Logo" className="w-24 h-24" />
        </div>

        <form className="w-3/4 space-y-5" onSubmit={handleSubmit(onSubmit)} >

          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Email"
            class="w-full p-3 bg-gray-200 rounded-md focus:outline-none"
          />
          {errors.email && <span>Le mail est invalid</span>}
          <input
            {...register('password', { required: true, minLength: 4, maxLength: 4 })}
            type="password"
            placeholder="PIN"
            className="w-full p-3 bg-gray-200 rounded-md focus:outline-none"
          />
          {errors.password && <span>Le pin est invalid</span>}

          <button
            type="submit"
            className="w-full p-3 bgyellow text-black rounded-md font-semibold hover:bg-yellow-400"
          >
            Se connecter
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-500">
          Vous n’avez pas de compte ?
          <a href="/register" className="yellow hover:underline">Inscrivez-vous</a>
        </p>
      </div>
    </div>
  );
};

export default Login;