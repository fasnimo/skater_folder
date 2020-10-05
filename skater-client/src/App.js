import React from 'react';
import NavBar from "./components/NavBar"
import ReviewContainer from "./components/ReviewContainer"
import Router from "./components/Router"

const App = () => {
  return (
    <>
      <NavBar />
      <Router />
      <ReviewContainer />
    </>
  );
}

export default App;
