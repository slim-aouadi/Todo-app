import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchLoggedUser } from '../services/Auth/AuthService'

const Home = () => {
  const mutation = useQuery({
    queryKey: ['auth'],
    queryFn: fetchLoggedUser
  })

  return <div className="text-white"> Welcome home </div>
}

/* export async function getServerSideProps() {
  const loggedUser = await fetchLoggedUser()
  return {
    props: {
      loggedUser
    } // will be passed to the page component as props
  }
} */

export default Home
