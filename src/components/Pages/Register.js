import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAxiosPost } from '../../hooks/useAxiosPost';


const Register = () => {
  const navigate = useNavigate();
  const { data, error, executePost } = useAxiosPost();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      prenom: '',
      nom: '',
      email: '',
      numero: '',
      pin: '',
      confirmerPin: '',
    }
  })


  const onSubmit = (props) => {
    const response = executePost('', props);
    if (response && response.status === 200) {
      return navigate('/login');
    }

  }



  return (
    <div className="h-screen flex bg-white">

      <div className="w-1/2 flex justify-center items-center bg-gray-50">
        <img
          src="/assets/images/register_fuse.svg"
          alt="illustration fuse"
          className="bottom-0 left-0 w-32 h-32 absolute"
        />
        <img
          src="/assets/images/register_astro.svg"
          alt="Astronaut Illustration"
          className="w-3/4"
        />
      </div>


      <div className="w-1/2 flex flex-col justify-center items-center p-10">

        <div className="flex items-center mb-10">
          <img src="/assets/logo.svg" alt="Derum Logo" className="w-24 h-24 mr-3" />
        </div>


        <form className="w-3/4 space-y-5" onSubmit={handleSubmit(onSubmit)}>

          <div className="flex space-x-4">
            <input
              {...register('prenom', { required: true })}
              placeholder="Prénom"
              className="flex-1 p-3 bg-gray-200 rounded-md focus:outline-none"
            />

            <input
              {...register('nom', { required: true })}
              placeholder="Nom"
              className="flex-1 p-3 bg-gray-200 rounded-md focus:outline-none"
            />
          </div>
          {/* A revoir pour le pplacement des erreurs de saisis */}
          {errors.prenom && <span>Le prenom est invalid</span>}
          {errors.nom && <span>Le nom est invalid</span>}

          <div className="flex space-x-4">
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Email"
              className="flex-1 p-3 bg-gray-200 rounded-md focus:outline-none"
            />
            <input
              {...register('numero', { required: true })}
              placeholder="Numéro"
              className="flex-1 p-3 bg-gray-200 rounded-md focus:outline-none"
            />
          </div>
          {errors.email && <span>Le mail est invalid</span>}
          {errors.numero && <span>Le numero est invalid</span>}

          <div className="flex space-x-4">
            <input
              {...register('pin', { required: true, minLength: 4, maxLength: 4 })}
              type="password"
              placeholder="PIN"
              className="flex-1 p-3 bg-gray-200 rounded-md focus:outline-none"
            />
            <input
              {...register('confirmerPin', { required: true })}
              type="password"
              placeholder="Confirmer PIN"
              className="flex-1 p-3 bg-gray-200 rounded-md focus:outline-none"
            />
          </div>
          {errors.pin && <span>Le pin est invalid</span>}


          <button
            type="submit"
            className="w-full p-3 bgyellow text-black rounded-md font-semibold "
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;