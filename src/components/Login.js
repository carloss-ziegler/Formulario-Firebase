import React, { useContext, useRef, useState } from "react";
import "./Login.css";
import LoginIcon from "@mui/icons-material/Login";
import { InputGroup, InputGroupAddon } from "reactstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="main-container container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Entrar</h1>
      <div className="formulario d-flex">
        <div className="col-md-6 p-5 mx-auto shadow-lg bg-light rounded border border-dark">
          <legend className="text-center icone text-dark">
            <AccountCircleIcon />
          </legend>
          <form className="formulario justify-content-between d-flex">
            <div className="form-group">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <button
                    className="btn text-dark btn-outline-dark"
                    type="button"
                  >
                    <EmailIcon />
                  </button>
                </InputGroupAddon>
                <input
                  placeholder="Email"
                  type="email"
                  className="form-control border-dark"
                  ref={emailRef}
                  required
                  autoFocus
                />
              </InputGroup>
            </div>
            <div className="form-group">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <button
                    className="btn text-dark btn-outline-dark"
                    type="button"
                  >
                    <LockIcon />
                  </button>
                </InputGroupAddon>
                <input
                  placeholder="Senha"
                  type="password"
                  className="form-control border-dark"
                  ref={passwordRef}
                  required
                />
              </InputGroup>
            </div>
            <div className="form-group">
              <button
                className="btn mandar btn-block btn-info"
                type="submit"
                onClick={handleSubmit}
              >
                <LoginIcon /> Login
              </button>
            </div>
            {error && (
              <span className="text-center text">
                Email ou senha inválidos!
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
