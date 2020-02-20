import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './Pages/Login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LoginPage />, document.getElementById('root'));

// Se você quer que seu aplicativo funcione offline e garregar mais rápido, você pode mudar
// unregister() para register() abaixo. Observe que isso vem com algumas armadilhas.
// Aprenda mais sobre trabalhadores: https://bit.ly/CRA-PWA
serviceWorker.unregister();
