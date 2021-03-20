import React from 'react';
import { useDispatch } from 'react-redux';
import Input from '@/components/Input';
import { authenticate } from '@/actions/users';
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useFormContext();

  const onSubmit = data => {
    dispatch(authenticate(data))
      .then(console.log)
      .catch(console.log)
  }

  return (
    <div className="login-page">
      <div className="login__form">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <Input name="email" type="text" placeholder="Email"/>
          <input ref={register} name="password" type="password" placeholder="Password"/>
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p className="error">{message}</p>}
          />
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
