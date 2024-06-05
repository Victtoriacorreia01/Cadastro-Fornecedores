import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CadastroFornecedores from './Components/CadastroFornecedores/CadastroFornecedores';
import ListaFornecedores from './Components/ListaFornecedores/ListaFornecedores';
import EditarFornecedor from './Components/EditarFornecedor/EditarFornecedor';

function App() {
  const [fornecedores, setFornecedores] = useState([]);

  const addFornecedor = (fornecedor) => {
    setFornecedores([...fornecedores, fornecedor]);
  };

  const deleteFornecedor = (index) => {
    setFornecedores(fornecedores.filter((_, i) => i !== index));
  };

  const updateFornecedor = (index, updatedFornecedor) => {
    const updatedFornecedores = fornecedores.map((fornecedor, i) => 
      i === index ? updatedFornecedor : fornecedor
    );
    setFornecedores(updatedFornecedores);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/cadastrar-fornecedor"
          element={<CadastroFornecedores onAddFornecedor={addFornecedor} />}
        />
        <Route
          path="/lista-fornecedores"
          element={
            <ListaFornecedores
              fornecedores={fornecedores}
              onDeleteFornecedor={deleteFornecedor}
            />
          }
        />
        <Route
          path="/editar-fornecedor/:index"
          element={
            <EditarFornecedor
              fornecedores={fornecedores}
              onUpdateFornecedor={updateFornecedor}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;