import { queryClient } from 'configs/queryClient';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyOptions } from 'configs/notifyOptions';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppRoutes } from 'routes';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ToastContainer {...notifyOptions} />
        <QueryClientProvider client={queryClient}>
            <AppRoutes />
            <ReactQueryDevtools buttonPosition="bottom-right" />
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
