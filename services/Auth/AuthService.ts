import { FormRegister } from '../../types/User'
import axios from 'axios'
export async function registerUser(data: FormRegister) {
  try {
    const result = await axios.post(
      'http://localhost:3000/api/auth/register',
      data
    )
    return result
  } catch (error) {}
}
