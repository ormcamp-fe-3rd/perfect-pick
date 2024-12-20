import './styles/index.css';
{
  /* <script defer src="/__/firebase/11.1.0/firebase-app-compat.js"></script>; */
}



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
