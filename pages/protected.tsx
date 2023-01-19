import React from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const mutation = useQuery({
    queryKey: ["secret"],
    queryFn: () => fetch("/api/secret").then((r) => r.json()),
  });

  return <div>{JSON.stringify(mutation.data)}</div>;
};

export default Home;
