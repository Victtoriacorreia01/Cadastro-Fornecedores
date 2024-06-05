import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css';

function EditarFornecedor({ fornecedores, onUpdateFornecedor }) {
  const { index } = useParams();
  const fornecedor = fornecedores[index];
  const [nome, setNome] = useState(fornecedor?.nome || '');
  const [email, setEmail] = useState(fornecedor?.email || '');
  const [telefone, setTelefone] = useState(fornecedor?.telefone || '');
  const [cnpj, setCnpj] = useState(fornecedor?.cnpj || '');
  const [contato, setContato] = useState(fornecedor?.contato || '');
  const [localidade, setLocalidade] = useState(fornecedor?.localidade || '');
  const [site, setSite] = useState(fornecedor?.site || '');
  const [cep, setCep] = useState(fornecedor?.cep || '');
  const [bairro, setBairro] = useState(fornecedor?.bairro || '');
  const [numero, setNumero] = useState(fornecedor?.numero || '');
  const [complemento, setComplemento] = useState(fornecedor?.complemento || '');
  const [tipoAtividade, setTipoAtividade] = useState(fornecedor?.tipoAtividade || '');
  const [nomeBanco, setNomeBanco] = useState(fornecedor?.nomeBanco || '');
  const [agencia, setAgencia] = useState(fornecedor?.agencia || '');
  const [conta, setConta] = useState(fornecedor?.conta || '');
  const [cpf, setCpf] = useState(fornecedor?.cpf || '');
  const [tipoPessoa, setTipoPessoa] = useState(fornecedor?.tipoPessoa || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (!fornecedor) {
      navigate('/lista-fornecedores');
    }
  }, [fornecedor, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fornecedorAtualizado = { 
      nome, 
      email, 
      telefone, 
      cnpj, 
      contato, 
      localidade, 
      site, 
      cep, 
      bairro, 
      numero, 
      complemento, 
      tipoAtividade, 
      nomeBanco, 
      agencia, 
      conta, 
      cpf, 
      tipoPessoa 
    };
    onUpdateFornecedor(parseInt(index, 10), fornecedorAtualizado);
    navigate('/lista-fornecedores');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-header">Editar Fornecedor</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Contato"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Localidade"
            value={localidade}
            onChange={(e) => setLocalidade(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Site"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Número"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Tipo de Atividade"
            value={tipoAtividade}
            onChange={(e) => setTipoAtividade(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Nome do Banco"
            value={nomeBanco}
            onChange={(e) => setNomeBanco(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Agência"
            value={agencia}
            onChange={(e) => setAgencia(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Conta"
            value={conta}
            onChange={(e) => setConta(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
            className="form-input"
          />
          <select
            value={tipoPessoa}
            onChange={(e) => setTipoPessoa(e.target.value)}
            required
            className="form-input"
          >
            <option value="">Selecione o Tipo de Pessoa</option>
            <option value="Física">Física</option>
            <option value="Jurídica">Jurídica</option>
          </select>
          <div className='button'>
          <button type="submit" className="form-button">
            Atualizar Fornecedor
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarFornecedor;