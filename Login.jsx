
import React from 'react';

const Login = () => {
  return (
    <main>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
};

export default Login;

