import React from 'react'
import { FaRegEnvelope, FaLock } from 'react-icons/fa';
const login = () => {
    return (
        <div className="login-form-container text-dark rounded-2xl shadow-2xl w-2/3 max-w-4xl bg-white">
            <div className="login-form-title  text-center">
                <div className="p-5">
                    <h2 className="text-3xl">Login</h2>
                </div>
                <div className="py-10">
                    <span>Entre your credentials</span>
                </div>
                <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>

                <div className="flex flex-col items-center">

                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                        <FaRegEnvelope className="text-gray-400 m-2" />
                        <input className="bg-gray-100 outline-none text-sm flex-1" type="email" name="email" placeholder='Email' />
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                        <FaLock className="text-gray-400 m-2" />
                        <input className="bg-gray-100 outline-none text-sm flex-1" type="password" name="email" placeholder='Password' />
                    </div>

                    <a href="#" className="border-2 rounded-3xl border-green-500 text-green-500 rounded-fill px-12 py-2 inline-block hover:bg-green-500 hover:text-white mb-5">Sign Up </a>

                </div>
            </div>


        </div>
    )
}

export default login