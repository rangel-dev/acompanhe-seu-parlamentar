import React from 'react';
import { Card, Avatar, Text, Group } from '@mantine/core';

function ParliamentarianCard({ parlamentar }) {
  return (
<Card shadow="sm" p="lg" radius="md" withBorder mb="md" whileHover={{ scale: 1.02 }}>
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
  );
}

export default ParliamentarianCard;