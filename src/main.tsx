import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './styles.css';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme appearance="dark" accentColor="indigo" grayColor="mauve" radius="large" scaling="105%">
      <App />
    </Theme>
  </React.StrictMode>,
);
