import React, { useEffect, useState } from "react";

import "./Edit.css";

import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Edit = () => {
  const { id } = useParams();
  const docRef = doc(db, "clientes", id);
  const [user, setUser] = useState([]);
  const [newName, setName] = useState("");

  useEffect(() => {
    const getUser = () => {
      getDoc(docRef).then((doc) => {
        setUser(doc.data());
      });
    };
    return getUser();
  }, []);

  const updateClient = () => {
    updateDoc(docRef, {
      nome: newName,
    });
  };

  console.log(newName);

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <h1 className="text-center text-dark display-2 my-4">
          Editar{" "}
          <Link to="/" className="btn voltar btn-dark ml-auto my-4">
            Voltar <BsFillArrowLeftSquareFill />
          </Link>
        </h1>
        <div className="row">
          <div className="col-md-7 p-4 mx-auto shadow-lg">
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nome*"
                  value={user.nome}
                  // onChange={(e) => setState()}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email*"
                  value={user.email}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Telefone*"
                  value={user.telefone}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Observações"
                  value={user.obs}
                />
              </div>
              <div className="form-group row">
                <button className="btn mr-auto ml-3 btn-info" type="submit">
                  Editar <FaUserEdit />
                </button>
                <Link
                  to="/"
                  className="btn cancel ml-auto mr-3 btn-danger"
                  type="submit"
                >
                  Cancelar <MdCancel />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
