import { NextPage } from 'next';
import React, { useState } from 'react'
import { FaRegEnvelope, FaLock } from 'react-icons/fa';
import { FormLogin } from '../../types/User';

const login: NextPage = () => {

    const [loginForm, setLoginForm] = useState<FormLogin>({ username: '', password: '' })
    return (
        <div className="login-form-container text-dark rounded-2xl shadow-2xl w-2/3 max-w-4xl bg-white">
            <div className="login-form-title  text-center">
                <div className="p-5">
                    <h2 className="text-3xl">Login</h2>
                </div>
                <div className="py-10">
                    <span>Entre your credentials</span>
                </div>

                <div className="w-10 h-1 bg-green-500 mb-2 inline-block" />
                <div className="flex flex-col items-center">
                    <div className="bg-gray-100 w-64 p-2 flex mb-3 gap-2">
                        <FaRegEnvelope className="text-gray-400 " />
                        <input onChange={e => setLoginForm({ ...loginForm, username: e.target.value })} className="bg-gray-100 outline-none duration-300 text-sm flex-1 border-b-2 border-solid border-white focus:border-cyan-300" type="email" name="email" placeholder='Email' />
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex  mb-3 gap-2">
                        <FaLock className="text-gray-400 " />
                        <input onChange={e => setLoginForm({ ...loginForm, password: e.target.value })} className="bg-gray-100 outline-none text-sm flex-1" type="password" name="email" placeholder='Password' />
                    </div>

                    <button  className="border-2 rounded-3xl border-green-500 text-green-500 rounded-fill px-12 py-2 inline-block hover:bg-green-500 hover:text-white mb-5">Sign In </button>

                </div>
            </div>


        </div>
    )
}

export default login