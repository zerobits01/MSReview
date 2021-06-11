import './App.css';
import React from 'react';
import NavBar from './components/navbar/navbar';
import AuthContextProvider from './context/auth/authContextProvider';

function App() {
    return ( // now i have passed auth data to all childs
      <AuthContextProvider>
        <NavBar />
      </AuthContextProvider>
    );
}

export default App;
