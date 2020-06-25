import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import '../../global.css'
import '../../Services/api'
import api from '../../Services/api';

export default function NewIncidents() {
    const ondId = localStorage.getItem('ongId');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

   async function handleNewIncendent(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
          await api.post('incidents', data, {
              headers: {
                Authorization: ondId,
              }
          });

          history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso, teste novamente!')
        }
    };

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />

                    <h1>Cadastro novo Caso</h1>
                    <p>descreva o caso detalhadamente para encontar um herói para resolcer isso.</p>
                    <Link className="back-link " to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home</Link>
                </section>

                <form onSubmit={handleNewIncendent}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    ></input>

                    <textarea type="email"
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                    <input
                        placeholder="Valor em Reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    ></input>


                    <button  className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}