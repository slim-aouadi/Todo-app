import { useMutation } from '@tanstack/react-query'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import ErrorMessage from '../../errors/auth.error'
import { loginUser } from '../../services/Auth/AuthService'
import { FormLogin } from '../../types/User'
import validationSchema from '../../validation/login.validation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login: NextPage = () => {
  const router = useRouter()
  const [loginForm, setLoginForm] = useState<FormLogin>({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState<FormLogin>({
    username: '',
    password: ''
  })

  const loginUserMutation = useMutation(['login'], loginUser, {
    onSuccess: data => {
      toast.success('Logged in successfully !')
      router.push('/home')
    },
    onError: () => {
      toast.error('Check your credentials !')
    }
  })

  const handleRegisterUser = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    validationSchema
      .validate(loginForm, { abortEarly: false })
      .then(() => {
        setErrors({
          username: '',
          password: ''
        })
        loginUserMutation.mutate(loginForm)
      })
      .catch(error => {
        const errors = error.inner.reduce((acc: any, err: any) => {
          acc[err.path] = err.message
          return acc
        }, {})
        setErrors(errors)
      })
  }

  const handleFormFieldUpdate =
    (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm({ ...loginForm, [fieldName]: e.target.value })
    }

  return (
    <div className="text-dark rounded-2xl shadow-2xl w-2/3 max-w-4xl bg-white text-center">
      <h2 className="p-5 text-3xl sm:text-2xl">Login</h2>

      <div className="py-10 text-2xl sm:text-1xl">Enter your credentials</div>

      <div className="w-10 h-1 bg-green-500 mb-2 inline-block" />

      <form
        className="flex flex-col items-center"
        onSubmit={handleRegisterUser}
      >
        <div>
          <div className="bg-gray-100 w-64 p-2 flex  mb-3 gap-2">
            <label htmlFor="username">
              <FaUser className="text-gray-400 " />
              <span className="sr-only">Username</span>
            </label>
            <input
              id="username"
              onChange={handleFormFieldUpdate('username')}
              value={loginForm.username}
              className="bg-gray-100 outline-none duration-300 text-sm flex-1 border-b-2 border-solid border-gray-100 max-w-[30ch] focus:border-green-500"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>

          {'username' in errors && errors.username !== '' ? (
            <ErrorMessage message={errors.username} />
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
              onChange={handleFormFieldUpdate('password')}
              value={loginForm.password}
              className="bg-gray-100 outline-none duration-300 text-sm flex-1 border-b-2 border-solid border-gray-100 max-w-[30ch] focus:border-green-500"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          {'password' in errors && errors.password !== '' ? (
            <ErrorMessage message={errors.password} />
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
        {loginUserMutation.isError ? 'An error occured during auth' : null}
      </form>
    </div>
  )
}

export default Login
