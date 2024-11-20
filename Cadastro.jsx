import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro:', username, email, password);
  };

  return (
    <div>
      <Header />
      <main>
        <h2>Cadastrar-se</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </label>
          <label>
            E-mail:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Senha:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Cadastro;
