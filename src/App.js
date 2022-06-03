import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Add from "./components/Add";
import Footer from "./components/Footer";
import Edit from "./components/Edit";
import Login from "./components/Login";

import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route
          exact
          path="/add"
          element={
            <RequiredAuth>
              <Add />
            </RequiredAuth>
          }
        />
        <Route
          exact
          path="/edit/:id"
          element={
            <RequiredAuth>
              <Edit />
            </RequiredAuth>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
