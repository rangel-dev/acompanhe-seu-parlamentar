// src/components/Header.jsx
import React from 'react';
import { Title, Group, Box } from '@mantine/core';
import * as TablerIcons from '@tabler/icons-react';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
  return (
    // 1. O Group principal agora tem 'position: "relative"'.
    //    Isso cria um "contexto" para o posicionamento absoluto do nosso botão.
    <Group h="100%" px="md" justify="center" style={{ position: 'relative' }}>
      
      {/* 2. Este grupo interno centraliza o título e o ícone.
          Ele não sabe da existência do botão de tema, então se centraliza perfeitamente. */}
      <Group justify="center">
        <Box component="span" visibleFrom="sm">
          <TablerIcons.IconBuildingBank size={32} />
        </Box>
        <Title order={1} size={{ base: 'h3', sm: 'h1' }}>
          Acompanhe seu Parlamentar
        </Title>
      </Group>

      {/* 3. O BOTÃO DE TEMA AGORA ESTÁ AQUI:
          Envolvemos o ThemeSwitcher em um Box com estilo de posicionamento absoluto.
          Ele "flutua" sobre o header, no canto direito, sem empurrar outros elementos.
      */}
      <Box
        style={{
          position: 'absolute',
          top: '50%', // Centraliza na vertical
          right: 'var(--mantine-spacing-md)', // Distância da direita
          transform: 'translateY(-50%)', // Ajuste fino para centralização vertical perfeita
        }}
      >
        <ThemeSwitcher />
      </Box>

    </Group>
  );
}

export default Header;