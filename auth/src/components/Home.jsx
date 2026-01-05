import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  return <div>Welcome back, {location.state.id}</div>;
};

export default Home;
