import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();
const rootElement = document.getElementById("root");
render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  rootElement
);


