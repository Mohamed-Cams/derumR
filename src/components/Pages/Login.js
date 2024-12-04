import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      pin: '',
    }
  })

  const onSubmit = (props) => {
   
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

          <img src="assets/logo.svg" alt="Derum Logo" class="w-24 h-24" />

        </div>

        <form className="w-3/4 space-y-5">

          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Email"
            class="w-full p-3 bg-gray-200 rounded-md focus:outline-none"
          />

          <input
            {...register('pin', { required: true, minLength: 4, maxLength: 4 })}
            type="password"
            placeholder="PIN"
            className="w-full p-3 bg-gray-200 rounded-md focus:outline-none"
          />


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