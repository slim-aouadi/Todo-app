import { NextPage } from 'next'
import React from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import ErrorMessage from '../../errors/auth.error'
import { LoginForm } from '../../types/User'
import { useLogin } from '../../hooks/auth'
import { Formik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { FormControl } from '../../components/ui/Form/FormControl/FormControl'
import { FormInput } from '../../components/ui/Form/Input/FormInput'
import { ButtonCta } from '../../components/ui/Form/Button/ButtonCta'
import { ButtonLink } from '../../components/ui/Form/Button/ButtonLink'
import { FormFooter } from '../../components/ui/Form/FormFooter/FormFooter'

const Login: NextPage = () => {
  const { mutate: login, isError } = useLogin()

  const initialValues = {
    username: '',
    password: ''
  }

  return (
    <div className="text-dark rounded-2xl shadow-2xl w-2/3 max-w-4xl text-center bg-color-card">
      <h2 className="p-5 text-3xl sm:text-2xl text-color-base">Login</h2>

      <div className="py-10 text-2xl sm:text-1xl text-color-base">
        Enter your credentials
      </div>

      <div className="w-10 h-1 bg-green-500 mb-2 inline-block" />
      <Formik
        validationSchema={toFormikValidationSchema(LoginForm)}
        onSubmit={values => {
          login(values)
        }}
        initialValues={initialValues}
      >
        {props => (
          <form
            className="flex flex-col items-center"
            onSubmit={props.handleSubmit}
          >
            <FormControl
              id="username"
              name="username"
              label="username"
              labelElement={<FaUser className="text-gray-400 " />}
              placeholder="Username"
            >
              {fieldProps => <FormInput type="text" {...fieldProps} />}
            </FormControl>

            <FormControl
              id="password"
              name="password"
              label="password"
              labelElement={<FaLock className="text-gray-400 " />}
              placeholder="Password"
            >
              {fieldProps => <FormInput type="password" {...fieldProps} />}
            </FormControl>

            <FormFooter>
              <ButtonCta>Sign In</ButtonCta>
              <ButtonLink to="/auth/register">CREATE A NEW ACCOUNT</ButtonLink>
            </FormFooter>

            {isError ? (
              <ErrorMessage message={'An error occured during auth'} />
            ) : null}
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Login
