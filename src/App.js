/* eslint-disable no-unused-vars */
import React from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Private from "./components/Private";
import LandingPage from "./pages/LandingPage";
import Itinerary from "./pages/Itinerary";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <Private>
                <Account />
              </Private>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
