import { NextPage } from 'next'
import React from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import ErrorMessage from '../../errors/auth.error'
import { LoginForm } from '../../types/User'
import Link from 'next/link'
import { useLogin } from '../../hooks/auth'
import { Formik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'

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
            <div>
              <div className="bg-gray-100 w-64 p-2 flex  mb-3 gap-2">
                <label htmlFor="username">
                  <FaUser className="text-gray-400 " />
                  <span className="sr-only">Username</span>
                </label>
                <input
                  id="username"
                  onChange={props.handleChange}
                  value={props.values.username}
                  className="bg-gray-100 outline-none duration-300 text-sm flex-1 border-b-2 border-solid border-gray-100 max-w-[30ch] focus:border-green-500"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </div>
              {props.errors.username !== undefined ? (
                <ErrorMessage message={props.errors.username} />
              ) : null}
            </div>

            <div>
              <div className="bg-gray-100 w-64 p-2 flex  mb-3 gap-2">
                <label htmlFor="password">
                  <FaLock className="text-gray-400 " />
                  <span className="sr-only">Password</span>
                </label>
                <input
                  id="password"
                  onChange={props.handleChange}
                  value={props.values.password}
                  className="bg-gray-100 outline-none duration-300 text-sm flex-1 border-b-2 border-solid border-gray-100 max-w-[30ch] focus:border-green-500"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              {props.errors.password !== undefined ? (
                <ErrorMessage message={props.errors.password} />
              ) : null}
            </div>
            <button
              type="submit"
              className="border-2 rounded-3xl border-green-500 text-green-500 rounded-fill px-12 py-2 inline-block hover:bg-green-500 hover:text-white mb-5"
            >
              Sign In
            </button>
            <div className="mt-3 mb-3 text-xs text-blue-500 underline">
              <Link href="/auth/register">CREATE NEW ACCOUNT</Link>
            </div>
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
