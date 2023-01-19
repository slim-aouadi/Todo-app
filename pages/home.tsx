import React from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import Link from "next/link";

const Home = () => {
  const refreshToken = useRefreshToken();
  return (
    <>
      <div onClick={() => refreshToken()}> Welcome home ! </div>
      <Link href="/protected">Go to protected page</Link>
    </>
  );
};

export default Home;
