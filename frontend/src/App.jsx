import { AppShell } from '@mantine/core';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <AppShell
      header={{ height: 80 }}
      padding="md" 
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <HomePage />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;