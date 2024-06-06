import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./cadastro.css";
import { FaPhoneSquareAlt, FaFilePrescription, FaEnvelope, FaArchive, FaNetworkWired, FaMousePointer, FaMapMarkerAlt, FaBuilding, FaUser, FaRegBuilding, FaRegCreditCard, FaKey } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CadastroFornecedores = ({ onAddFornecedor }) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    nome: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    telefone: Yup.string().required('Telefone é obrigatório').test('telefone-validation', 'Telefone inválido', (value) => {
      const telefoneRegex = /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/;
      return telefoneRegex.test(value);
    }),
    cnpj: Yup.string().required('CNPJ é obrigatório').test('cnpj-validation', 'CNPJ inválido', (value) => {
      const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
      return cnpjRegex.test(value);
    }),
    codigo: Yup.string().required('O codigo é obrigatório'),
    localidade: Yup.string().required('Localidade é obrigatória'),
    site: Yup.string().url('URL inválida').required('Site é obrigatório'),
    cep: Yup.string().required('CEP é obrigatório'),
    bairro: Yup.string().required('Bairro é obrigatório'),
    numero: Yup.string().required('Número é obrigatório'),
    complemento: Yup.string().required('Complemento é obrigatório'),
    tipoAtividade: Yup.string().required('Tipo de Atividade é obrigatório'),
    nomeBanco: Yup.string().required('Nome do Banco é obrigatório'),
    agencia: Yup.string().required('Agência é obrigatória'),
    conta: Yup.string().required('Conta é obrigatória'),
    cpf: Yup.string().required('CPF é obrigatório').test('cpf-validation', 'CPF inválido', (value) => {
      const cpfRegex = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;
      return cpfRegex.test(value);
    }),
    tipoPessoa: Yup.string().required('Tipo de Pessoa é obrigatório'),
  });
  

  const handleSubmit = (values) => {
    onAddFornecedor(values);
    navigate('/lista-fornecedores');
  };

  return (
    <div className="contai">
      <div className="form-contai">
        <h2 className="form-header-cadastro">Cadastro de Fornecedor</h2>
        <Formik
          initialValues={{
            nome: '',
            email: '',
            telefone: '',
            cnpj: '',
            codigo: '',
            Localidade: '', 
            site: '',
            cep: '',
            bairro: '',
            numero: '',
            complemento: '',
            tipoAtividade: '',
            nomeBanco: '',
            agencia: '',
            conta: '',
            cpf: '',
            tipoPessoa: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="two-colum-form-cadastro">
                <div className="column-cadastro">
                  <div className="input-with-icon-cad">
                    <FaUser className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        className="form-input-cad"
                      />
                      <ErrorMessage name="nome" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="input-with-icon-cad">
                    <FaEnvelope className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-input-cad"
                      />
                      <ErrorMessage name="email" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="input-with-icon-cad">
                    <FaPhoneSquareAlt className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        type="text"
                        name="telefone"
                        placeholder="Telefone"
                        className="form-input-cad"
                      />
                      <ErrorMessage name="telefone" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="input-with-icon-cad">
                    <FaFilePrescription className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        type="text"
                        name="cnpj"
                        placeholder="CNPJ"
                        className="form-input-cad"
                      />
                      <ErrorMessage name="cnpj" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="input-with-icon-cad">
                    <FaPhoneSquareAlt className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        type="text"
                        name="codigo"
                        placeholder="Codigo"
                        className="form-input-cad"
                      />
                      <ErrorMessage name="codigo" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="input-with-icon-cad">
                    <FaMapMarkerAlt className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        as="select"
                        name="localidade"
                        className="form-input-cad localidade"
                      >
                        <option value="" label="Selecione a Localidade" />
                        <option value="São Paulo" label="São Paulo" />
                        <option value="Rio de Janeiro" label="Rio de Janeiro" />
                        <option value="Belo Horizonte" label="Belo Horizonte" />
                        <option value="Brasília" label="Brasília" />
                        <option value="Salvador" label="Salvador" />
                        <option value="Curitiba" label="Curitiba" />
                        <option value="Manaus" label="Manaus" />
                        <option value="Recife" label="Recife" />
                        <option value="Porto Alegre" label="Porto Alegre" />
                        <option value="Fortaleza" label="Fortaleza" />
                      </Field>
                      <ErrorMessage name="localidade" component="div" className="error-message" />
                    </div>
                  </div>
                </div>
                <div className="column-cadastro">
                  <div className="input-with-icon-cad">
                    <FaMousePointer className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        type="text"
                        name="site"
                        placeholder="Site"
                        className="form-input-cad"
                      />
                      <ErrorMessage name="site" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="input-with-icon-cad">
                    <FaMapMarkerAlt className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        type="text"
                        name="cep"
                        placeholder="CEP"
                        className="form-input-cad"
                      />
                      <ErrorMessage name="cep" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="input-with-icon-cad">
                    <FaBuilding className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        type="text"
                        name="bairro"
                        placeholder="Bairro"
                        className="form-input-cad"
                      />
                      <ErrorMessage name="bairro" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="input-with-icon-cad">
                    <FaRegBuilding className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        type="text"
                        name="numero"
                        placeholder="Número"
                        className="form-input-cad"
                      />
                      <ErrorMessage name="numero" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="input-with-icon-cad">
                    <FaRegBuilding className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        type="text"
                        name="complemento"
                        placeholder="Complemento"
                        className="form-input-cad"
                      />
                      <ErrorMessage name="complemento" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="input-with-icon-cad">
                    <FaNetworkWired className="input-icon-cad" />
                    <div className="form-input-container">
                      <Field
                        type="text"
                        name="tipoAtividade"
                        placeholder="Tipo de Atividade"
                        className="form-input-cad"
                      />
                      <ErrorMessage name="tipoAtividade" component="div" className="error-message" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bank-details">
                <div className="input-with-icon-cad">
                  <FaArchive className="input-icon-cad" />
                  <div className="form-input-container">
                    <Field
                      type="text"
                      name="nomeBanco"
                      placeholder="Banco"
                      className="form-input-cad"
                    />
                    <ErrorMessage name="nomeBanco" component="div" className="error-message" />
                  </div>
                </div>
                <div className="input-with-icon-cad">
                  <FaArchive className="input-icon-cad" />
                  <div className="form-input-container">
                    <Field
                      type="text"
                      name="agencia"
                      placeholder="Agência"
                      className="form-input-cad"
                    />
                    <ErrorMessage name="agencia" component="div" className="error-message" />
                  </div>
                </div>
                <div className="input-with-icon-cad">
                  <FaRegCreditCard className="input-icon-cad" />
                  <div className="form-input-container">
                    <Field
                      type="text"
                      name="conta"
                      placeholder="Conta"
                      className="form-input-cad"
                    />
                    <ErrorMessage name="conta" component="div" className="error-message" />
                  </div>
                </div>
                <div className="input-with-icon-cad">
                  <FaRegCreditCard className="input-icon-cad" />
                  <div className="form-input-container">
                    <Field
                      type="text"
                      name="cpf"
                      placeholder="CPF"
                      className="form-input-cad"
                    />
                    <ErrorMessage name="cpf" component="div" className="error-message" />
                  </div>
                </div>
                <div className="input-with-icon-cad">
                  <FaKey className="input-icon-cad" />
                  <div className="form-input-container">
                    <Field
                      as="select"
                      name="tipoPessoa"
                      className="form-input-cad pessoa"
                    >
                      <option value="" label="Selecione o Tipo de Pessoa" />
                      <option value="Física" label="Física" />
                      <option value="Jurídica" label="Jurídica" />
                    </Field>
                    <ErrorMessage name="tipoPessoa" component="div" className="error-message" />
                  </div>
                </div>
              </div>
              <div className="button-cad">
                <button type="submit" className="form-button-cad">
                  Cadastrar Fornecedor
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CadastroFornecedores;