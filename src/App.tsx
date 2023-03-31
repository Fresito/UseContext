import React from 'react';

import { Routes } from './components/router/Routes';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './components/hooks/UserContext';

function App() {
  return (
    <UserProvider>
        <RouterProvider router={Routes}/>
    </UserProvider>
  );
}

export default App;
