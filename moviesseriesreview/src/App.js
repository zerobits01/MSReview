import React from 'react';
import NavBar from './components/navbar/navbar';
import AuthContextProvider from './context/auth/authContextProvider';
import './App.css';

function App() {
  return ( // now i have passed auth data to all childs
    <AuthContextProvider>
      <NavBar />
    </AuthContextProvider>

  );
}

export default App;
