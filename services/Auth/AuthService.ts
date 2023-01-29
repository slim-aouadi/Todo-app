import axios from 'axios'
import { FormLogin, FormRegister } from '../../types/User'
export async function registerUser(data: FormRegister) {
  const result = await axios.post(
    'http://localhost:3000/api/auth/register',
    data
  )
  return result
}

export async function loginUser(data: FormLogin) {
  const result = await axios.post('http://localhost:3000/api/auth/login', data)
  return result
}

export async function refreshToken() {
  const result = await axios.get('http://localhost:3000/api/auth/refreshToken')
  return result
}

export async function fetchLoggedUser() {
  const result = await axios.get('http://localhost:3000/api/auth/loggedUser')
  return result
}
