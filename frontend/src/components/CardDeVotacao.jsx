// src/components/CardDeVotacao.jsx
import { Paper, Text, Group, Badge } from '@mantine/core';

// Esta função auxiliar nos ajuda a escolher a cor do Badge
const getVoteColor = (vote) => {
  switch (vote.toLowerCase()) {
    case 'sim':
      return 'green';
    case 'não':
      return 'red';
    case 'abstenção':
      return 'yellow';
    default:
      return 'gray';
  }
};

function CardDeVotacao({ votacao }) {
  return (
    // Usamos o Paper como um container um pouco mais sutil que o Card
    <Paper withBorder p="md" radius="md" mb="sm">
      <Group justify="space-between">
        {/* Lado Esquerdo: Informações da pauta */}
        <div>
          <Text fw={500}>{votacao.titulo}</Text>
          <Text size="sm" c="dimmed">{votacao.resumo}</Text>
        </div>

        {/* Lado Direito: O voto, com destaque */}
        <Badge
          color={getVoteColor(votacao.voto)}
          size="lg"
          variant="filled"
        >
          {votacao.voto}
        </Badge>
      </Group>
    </Paper>
  );
}

export default CardDeVotacao;