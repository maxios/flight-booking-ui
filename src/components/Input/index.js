import React from 'react';
import classnames from 'classnames';
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const Input = ({name, className, ...restProps}) => {
  const { errors, register } = useFormContext();
  const inputClassName = classnames(className, {error: errors[name]})

  return (
    <>
      <input
        ref={register}
        name={name}
        className={inputClassName}
        {...restProps}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="error">{message}</p>}
      />
    </>
  )
}

export default Input;
