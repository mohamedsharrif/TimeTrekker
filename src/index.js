import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/pajes/Login';
import Contact from './components/pajes/Contact';
import Home from './components/pajes/Home';
import NotFound from './components/utils/NotFound';
import Register from './components/global/Register';
import { AppProvider } from './context/AppContext';
import Tasks from './components/pajes/Tasks';
import Faq from './components/pajes/faqs/Faq';
import Faqs from './components/pajes/faqs/Faqs';

const routerProvider = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/tasks',
        element: <Tasks />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/faq',
        element: <Faqs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      
     
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={routerProvider} />
    </AppProvider>

  </React.StrictMode>
);


