import { FormRegister } from "../../types/User";
import axios from "axios";
import { toast } from "react-toastify";
export async function registerUser(data: FormRegister) {
  try {
    const result = await axios.post(
      "http://localhost:3000/api/auth/register",
      data
    );
    toast.success("Account Created Successfully !");
    return result;
  } catch (error) {}
}
