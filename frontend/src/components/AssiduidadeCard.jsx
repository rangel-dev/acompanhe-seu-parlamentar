// src/components/AssiduidadeCard.jsx

import { RingProgress, Text, Paper, Group } from '@mantine/core';

function AssiduidadeCard({ plenaria, comissoes }) {
  return (
    <Paper withBorder p="lg" radius="md">
      <Text size="lg" fw={700} mb="lg">Assiduidade</Text>
      <Group justify="space-around">
        <div style={{ textAlign: 'center' }}>
          <RingProgress
            size={120}
            thickness={12}
            roundCaps
            sections={[{ value: plenaria, color: 'brand.5' }]}
            label={
              <Text c="brand.5" fw={700} ta="center" size="xl">
                {plenaria}%
              </Text>
            }
          />
          <Text fw={500} mt="sm">Plenário</Text>
        </div>
        <div style={{ textAlign: 'center' }}>
          <RingProgress
            size={120}
            thickness={12}
            roundCaps
            sections={[{ value: comissoes, color: 'blue' }]}
            label={
              <Text c="blue" fw={700} ta="center" size="xl">
                {comissoes}%
              </Text>
            }
          />
          <Text fw={500} mt="sm">Comissões</Text>
        </div>
      </Group>
    </Paper>
  );
}

export default AssiduidadeCard;