import * as Yup from 'yup'
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
})

export default validationSchema
