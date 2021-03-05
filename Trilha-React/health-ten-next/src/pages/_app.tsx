import '../styles/global.css';


import { CountdownProvider } from '../contexts/CountdownContext';
import { useEffect } from 'react';
import api from '../services/api';

function MyApp({ Component, pageProps }) {
  
  return (    

      <CountdownProvider>
        
        <Component {...pageProps} />

      </CountdownProvider>
      
  )
}

export default MyApp
