import React, { useEffect, useState } from "react";
import "./Home.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";

import { InputGroup, InputGroupAddon, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "clientes");

  const pageReload = () => {
    window.location.reload();
  };

  function deleteDocument(user) {
    var ref = doc(db, "clientes", user.id);

    if (window.confirm("Deseja realmente excluir o cadastro??")) {
      deleteDoc(ref);

      toast.info("Deletado com sucesso, recarregue a tabela!");
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className="container search-container main-container">
      <div className="row justify-content-between py-2 main">
        <Link
          to="/add"
          className="btn novo btn-outline-dark my-4 mr-auto shadow-sm"
        >
          Novo Cadastro <PersonAddIcon />
        </Link>
        <div className="ml-auto mr-auto my-4 d-flex">
          <InputGroup className="main-input">
            <InputGroupAddon addonType="prepend">
              <button class="btn search-icon btn-outline-dark" type="button">
                <PersonSearchIcon />
              </button>
            </InputGroupAddon>
            <input
              placeholder="Consultar..."
              type="text"
              className="search-input border border-dark"
            />
          </InputGroup>
        </div>
        <div className="ml-auto texto">
          <h6>
            Bem Vindo, <br />
            <span className="textoo">
              <strong>Marmoreli</strong>
            </span>
            !
          </h6>
          <button
            className="btn btn-danger ml-auto botao"
            onClick={() => {
              localStorage.removeItem("user");
              toast.info("Usuário desconectado!");
              navigate("/login");
            }}
          >
            <LogoutIcon /> Sair
          </button>
        </div>
      </div>
      <div className="col-md-10 mx-auto my-5 girar">
        <h1 className="text-center text-dark py-1 display-4">Cadastrados</h1>
        <Button
          className="btn btn-info my-2 reload"
          title="Recarregar tabela"
          onClick={pageReload}
        >
          <CachedSharpIcon />
        </Button>
        <table className="table table-hover text-center table-striped shadow">
          <thead className="table-header bg-dark text-white table-bordered">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>
              <th scope="col">Observações</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, id) => (
                <tr key={user.id}>
                  <td>{id + 1}</td>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.telefone}</td>
                  <td>{user.obs}</td>
                  <td>
                    <Link
                      title="Editar cliente"
                      to={`/edit/${user.id}`}
                      className="btn btn-sm btn-warning mr-1 editar"
                    >
                      <EditIcon />
                    </Link>
                    <button
                      title="Deletar cliente"
                      type="button"
                      className="btn btn-sm btn-danger deletar"
                      onClick={() => deleteDocument(user)}
                    >
                      <DeleteSweepIcon />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>Não há cliente</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
