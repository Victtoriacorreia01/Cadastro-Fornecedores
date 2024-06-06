import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function ListaFornecedores({ fornecedores, onDeleteFornecedor }) {
  return (
    <div className="lista-fornecedores-container">
      <h2 className="page-header">Lista de Fornecedores</h2>
      {fornecedores.length === 0 ? (
        <h3>Não há fornecedores cadastrados!</h3>
      ) : (
        <div className="fornecedores-grid">
          {fornecedores.map((fornecedor, index) => (
            <div className="fornecedor" key={index}>
              <p><strong>Nome:</strong> {fornecedor.nome}</p>
              <p><strong>Email:</strong> {fornecedor.email}</p>
              <p><strong>Telefone:</strong> {fornecedor.telefone}</p>
              <p><strong>Localidade:</strong> {fornecedor.localidade}</p>
              <p><strong>Cnpj:</strong> {fornecedor.cnpj}</p>
              <p><strong>Codigo:</strong> {fornecedor.codigo}</p>
              <p><strong>Site:</strong> {fornecedor.site}</p>
              <p><strong>Cep:</strong> {fornecedor.cep}</p>
              <p><strong>Bairro:</strong> {fornecedor.bairro}</p>
              <p><strong>Numero:</strong> {fornecedor.numero}</p>
              <p><strong>Complemento:</strong> {fornecedor.complemento}</p>
              <p><strong>Tipo de Atividade:</strong> {fornecedor.tipoAtividade}</p>
              <p><strong>Banco:</strong> {fornecedor.nomeBanco}</p>
              <p><strong>Agencia:</strong> {fornecedor.agencia}</p>
              <p><strong>Conta:</strong> {fornecedor.conta}</p>
              <p><strong>CPF:</strong> {fornecedor.cpf}</p>
              <p><strong>Tipo de pessoa:</strong> {fornecedor.tipoPessoa}</p>
              <div className="fornecedor-buttons">
                <Link className="editar-link" to={`/editar-fornecedor/${index}`}>Editar</Link>
                <button className="excluir-button" onClick={() => onDeleteFornecedor(index)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaFornecedores;
