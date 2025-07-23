// src/components/PlacarVotacao.jsx
import { Paper, Text, Group } from '@mantine/core';

function PlacarVotacao({ votos }) {
  return (
    <Paper
      p="md"
      radius="xl" // Borda extra arredondada
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fundo branco com baixa opacidade
        backdropFilter: 'blur(10px)', // O efeito de vidro fosco!
        border: '1px solid rgba(255, 255, 255, 0.2)', // Borda sutil para definir o contorno
      }}
    >
      <Group justify="space-around">
        <div>
          <Text c="green.3" size="xl" fw={700}>{votos.sim}</Text>
          <Text c="white" size="sm">A Favor</Text>
        </div>
        <div>
          <Text c="red.4" size="xl" fw={700}>{votos.nao}</Text>
          <Text c="white" size="sm">Contra</Text>
        </div>
        <div>
          <Text c="gray.4" size="xl" fw={700}>{votos.abstencao}</Text>
          <Text c="white" size="sm">Abstenções</Text>
        </div>
      </Group>
    </Paper>
  );
}

export default PlacarVotacao;