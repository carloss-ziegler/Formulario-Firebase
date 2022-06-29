import { useState } from "react";
import * as React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import { toast } from "react-toastify";

const Add = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newObs, setNewObs] = useState("");
  const usersCollectionRef = collection(db, "clientes");
  const navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();

    addDoc(usersCollectionRef, {
      nome: newName,
      email: newEmail,
      telefone: newPhone,
      obs: newObs,
    });
    toast.success("Cliente adicionado com sucesso!", {
      theme: "colored",
    });
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-2 display-2">Cadastro</h1>
      <div className="row formulario">
        <div className="col-md-6 p-5 mx-auto shadow-lg bg-white">
          <legend className="text-center icone text-dark">
            <PersonAddAltRoundedIcon />
          </legend>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Nome *"
                name="name"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
                required
                autoFocus
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                onChange={(event) => {
                  setNewEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Telefone *"
                name="phone"
                onChange={(event) => {
                  setNewPhone(event.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Observações"
                name="obs"
                onChange={(event) => {
                  setNewObs(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-block btn-success"
                type="submit"
                onClick={createUser}
              >
                Cadastrar <BsFillCheckCircleFill />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
