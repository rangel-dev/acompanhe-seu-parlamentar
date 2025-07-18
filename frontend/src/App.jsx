// src/App.jsx
import { AppShell } from '@mantine/core';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage'; // Vamos criar esta página agora

// 1. Importe Routes e Route
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AppShell header={{ height: 80 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        {/* 2. O Routes define a área onde as páginas serão trocadas */}
        <Routes>
          {/* Rota para a home page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Rota para a página de perfil. :id é um parâmetro dinâmico */}
          <Route path="/parlamentar/:id" element={<ProfilePage />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;