import React from 'react';
import { FormProvider } from '@/contexts/FormContext';
import { LoginFormSchema } from '@/schemas.js';
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  return (
    <div className="login__container h-100 d-flex center-center">
      <FormProvider schema={LoginFormSchema}>
        <LoginForm/>
      </FormProvider>
    </div>
  )
}

export default LoginPage;
