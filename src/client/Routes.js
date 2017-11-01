import React from 'react';
import HomePage from './pages/HomePage';
import App from './App';
import UsersListPage from './pages/UsersListPage';
import AdminsListPage from './pages/AdminsListPage';
import NotFound from './pages/NotFound';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...NotFound
      }
    ]
  }
];
