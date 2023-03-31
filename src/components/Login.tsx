import React, { useContext } from 'react'
import { UserContext } from './hooks/UserContext';
import { User } from './interfaces/User';

export const Login = () => {

  const { user, updateUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login</h1>

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

      <button 
        className='btn btn-primary'
        onClick={() => updateUser(new User(1, "Jorge", "Almeida"))}
      >
        Modificar contexto
      </button>

    </div>
  )
}
