import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "nome", headerName: "Nome", width: 130 },
  { field: "telefone", headerName: "Telefone", width: 130 },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 120,
  },
  {
    field: "observações",
    headerName: "Observações",
    sortable: true,
    width: 290,
  },
  { field: "ações", headerName: "Ações", width: 60 },
];

const rows = [
  {
    id: 1,
    nome: "Snow Henrique Ziegler de Araujo",
    email: "Jon@gmail",
    telefone: 35,
    observações: "comprou:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: 2,
    nome: "Lannister",
    email: "Cersei@gmail",
    telefone: 42,
    observações: "comprou:xx",
  },
  {
    id: 3,
    nome: "Lannister",
    email: "Jaime@gmail",
    telefone: 45,
    observações: "comprou:xx",
  },
  {
    id: 4,
    nome: "Stark",
    email: "Arya@gmail",
    telefone: 16,
    observações: "comprou:xx",
  },
  {
    id: 5,
    nome: "Targaryen",
    email: "Daenerys@gmail",
    telefone: null,
    observações: "comprou:xx",
  },
  {
    id: 6,
    nome: "Melisandre",
    email: null,
    telefone: 150,
    observações: "comprou:xx",
  },
  {
    id: 7,
    nome: "Clifford",
    email: "Ferrara@gmail",
    telefone: 44,
    observações: "comprou:xx",
  },
  {
    id: 8,
    nome: "Frances",
    email: "Rossini@gmail",
    telefone: 36,
    observações: "comprou:xx",
  },
  {
    id: 9,
    nome: "Roxie",
    email: "Harvey@gmail",
    telefone: 65,
    observações: "mármore no valor 45$ / cpf: 9999999",
  },
];

export function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        className="table-striped shadow-lg border-dark bg-light "
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
