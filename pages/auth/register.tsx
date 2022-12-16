import { create } from 'domain';
import { NextPage } from 'next';
import React, { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa';
import { FormRegister } from '../../types/User';
import { registerUser } from '../../services/Auth/AuthService';

const Register: NextPage = () => {

    const [registerForm, setRegisterForm] = useState<FormRegister>({ username: '', password: '' })

    const handleRegisterUser = async (data: FormRegister) => {
        try {
            await registerUser(data);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="login-form-container text-dark rounded-2xl shadow-2xl w-2/3 max-w-4xl bg-white">
            <div className="login-form-title  text-center">
                <div className="p-5">
                    <h2 className="text-3xl sm:text-2xl">Register</h2>
                </div>
                <div className="py-10 text-2xl sm:text-1xl">
                    <span>Enter your credentials</span>
                </div>

                <div className="w-10 h-1 bg-green-500 mb-2 inline-block" />
                <div className="flex flex-col items-center">
                    <div className="bg-gray-100 w-64 p-2 flex  mb-3 gap-2">
                        <FaUser className="text-gray-400 " />
                        <input onChange={e => setRegisterForm({ ...registerForm, username: e.target.value })} value={registerForm.username} className="bg-gray-100 outline-none duration-300 text-sm flex-1 border-b-2 border-solid border-gray-100 max-w-[30ch] focus:border-green-500" type="text" name="username" placeholder='Username' />
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex  mb-3 gap-2">
                        <FaLock className="text-gray-400 " />
                        <input onChange={e => setRegisterForm({ ...registerForm, password: e.target.value })} value={registerForm.password} className="bg-gray-100 outline-none duration-300 text-sm flex-1 border-b-2 border-solid border-gray-100 max-w-[30ch] focus:border-green-500" type="password" name="email" placeholder='Password' />
                    </div>

                    <button onClick={() => handleRegisterUser(registerForm)} className="border-2 rounded-3xl border-green-500 text-green-500 rounded-fill px-12 py-2 inline-block hover:bg-green-500 hover:text-white mb-5"> Sign Up </button>
                </div>
            </div>


        </div>
    )
}

export default Register