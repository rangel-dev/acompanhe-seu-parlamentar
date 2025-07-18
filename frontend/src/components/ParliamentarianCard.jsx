// src/components/ParliamentarianCard.jsx
import React from 'react';
import { Card, Avatar, Text, Group } from '@mantine/core';
import { Link } from 'react-router-dom'; // 1. Importe o Link

function ParliamentarianCard({ parlamentar }) {
  return (
    // 2. Envolva tudo com o Link, apontando para a URL dinâmica
    <Link to={`/parlamentar/${parlamentar.id}`} style={{ textDecoration: 'none' }}>
      <Card shadow="sm" p="lg" radius="md" withBorder mb="md" component="a" whileHover={{ scale: 1.02 }}>
        {/* O resto do código permanece o mesmo */}
        <Group>
          <Avatar src={parlamentar.urlFoto} size={90} radius="50%" />
          <div>
            <Text fw={500} size="lg">{parlamentar.nome}</Text>
            <Text size="sm" c="dimmed">
              {parlamentar.siglaPartido} - {parlamentar.siglaUf}
            </Text>
            <Text size="sm" c="dimmed">
              {parlamentar.tipo}
            </Text>
          </div>
        </Group>
      </Card>
    </Link>
  );
}

export default ParliamentarianCard;