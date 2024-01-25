import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Header from "./Header";

const ProtectedRoute = () => {
  const auth = getAuth();
  const isLoggedIn = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? (
    <Browse />
  ) : (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
  <Header />
  <div className="flex flex-col items-center mt-4">
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
    <span className="ml-2 text-lg font-semibold text-gray-700">Loading...</span>
  </div>
</div>

  );
};

export default ProtectedRoute;
