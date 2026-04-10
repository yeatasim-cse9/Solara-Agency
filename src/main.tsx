import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { SWRConfig } from 'swr';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SWRConfig 
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
        revalidateOnFocus: false, // Mobile optimization: prevent unneeded network requests
        dedupingInterval: 10000 // Mobile optimization: deduplicate requests over 10s
      }}
    >
      <App />
    </SWRConfig>
  </StrictMode>,
);
