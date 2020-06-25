import React, { useState} from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'
import '../../Services/api';




import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../Services/api';

export default function Logon() {

   const [id, setId] = useState('');
   const history = useHistory();


   async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('profile');
            console.log(response.data.name);
        } catch (err) {
            alert('Falha no login, verifique seu codigo de acesso!');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero" />

                <form onSubmit={handleLogin}>
                    <h1 alt="Faça seu Cadastro">Faça seu Cadastro</h1>

                    <input 
                    placeholder="Seu ID" type="text"
                    value={id}
                    onChange={e => setId(e.target.value)}></input>
                    <button className="button" type="submit">Entar</button>

                    <Link className="back-link "to="/register">
                        <FiLogIn size={16} color="#E02041"/> 
                        Não tenho Cadastro</Link>
                        
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
    );
}