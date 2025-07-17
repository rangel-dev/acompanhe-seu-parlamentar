// src/components/Header.jsx
import React from 'react';
import { Title, Group, Box } from '@mantine/core';
import * as TablerIcons from '@tabler/icons-react';

function Header() {
  return (
    <Group justify="center" h="100%">
      <Box component="span" visibleFrom="sm">
        <TablerIcons.IconBuildingBank size={32} />
      </Box>
      <Title
        order={1}
        size={{ base: 'h3', sm: 'h1' }}
      >
        Acompanhe seu Parlamentar
      </Title>
    </Group>
  );
}

export default Header;