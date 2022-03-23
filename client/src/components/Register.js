import React from 'react';
import RegisterForm from './RegisterForm';
import { UserProvider } from '../registerContext'


function Register () {

  return (
<>
<main>
  <h2>Register page </h2>
  <p> Welcome to Freedge - Give us some informations about you : </p>
  <UserProvider>
<RegisterForm />
</UserProvider>
</main>
</>
  )
}

export default Register;