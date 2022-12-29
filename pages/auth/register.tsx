import { create } from 'domain'
import { NextPage } from 'next'
import React, { ChangeEvent, useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import { FormRegister } from '../../types/User'
import { registerUser } from '../../services/Auth/AuthService'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const Register: NextPage = () => {
  const [registerForm, setRegisterForm] = useState<FormRegister>({
    username: '',
    password: ''
  })

  const registerUserMutation = useMutation(['register'], registerUser, {
    onSuccess: () => {
      toast.success('Account Created Successfully !')
    },
    onError: () => {
      toast.error('Failed to create an account !')
    }
  })

  const handleRegisterUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    registerUserMutation.mutate(registerForm)
  }

  const handleFormFieldUpdate =
    (fiedName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterForm({ ...registerForm, [fiedName]: e.target.value })
    }

  return (
    <div className="text-dark rounded-2xl shadow-2xl w-2/3 max-w-4xl bg-white text-center">
      <h2 className="p-5 text-3xl sm:text-2xl">Register</h2>

      <div className="py-10 text-2xl sm:text-1xl">Enter your credentials</div>

      <div className="w-10 h-1 bg-green-500 mb-2 inline-block" />

      <form
        className="flex flex-col items-center"
        onSubmit={handleRegisterUser}
      >
        <div className="bg-gray-100 w-64 p-2 flex  mb-3 gap-2">
          <label htmlFor="username">
            <FaUser className="text-gray-400 " />
            <span className="sr-only">Username</span>
          </label>
          <input
            id="username"
            onChange={handleFormFieldUpdate('username')}
            value={registerForm.username}
            className="bg-gray-100 outline-none duration-300 text-sm flex-1 border-b-2 border-solid border-gray-100 max-w-[30ch] focus:border-green-500"
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>

        <div className="bg-gray-100 w-64 p-2 flex  mb-3 gap-2">
          <label htmlFor="password">
            <FaLock className="text-gray-400 " />
            <span className="sr-only">Password</span>
          </label>
          <input
            id="password"
            onChange={handleFormFieldUpdate('password')}
            value={registerForm.password}
            className="bg-gray-100 outline-none duration-300 text-sm flex-1 border-b-2 border-solid border-gray-100 max-w-[30ch] focus:border-green-500"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="border-2 rounded-3xl border-green-500 text-green-500 rounded-fill px-12 py-2 inline-block hover:bg-green-500 hover:text-white mb-5"
        >
          Sign Up
        </button>
        {registerUserMutation.isError
          ? 'An error occured during your registration'
          : null}
      </form>
    </div>
  )
}

export default Register
