import React from 'react'
import useRefreshToken from '../hooks/useRefreshToken'

const Home = () => {
  const refreshToken = useRefreshToken()
  return <div onClick={() => refreshToken()}> Welcome home ! </div>
}

export default Home
