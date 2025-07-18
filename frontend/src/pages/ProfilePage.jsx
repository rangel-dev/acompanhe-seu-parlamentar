// src/pages/ProfilePage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PARLAMENTARES } from '../data/mockParlamentares';
import { MOCK_VOTACOES } from '../data/mockVotacoes';
import CardDeVotacao from '../components/CardDeVotacao';
import { 
  Container, 
  Grid, 
  Paper, 
  Avatar, 
  Title, 
  Text, 
  Button, 
  Stack 
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function ProfilePage() {
  // Pega o parâmetro :id da URL, ex: /parlamentar/204554 -> id = "204554"
  const { id } = useParams();

  // Busca o parlamentar correspondente nos nossos dados mock.
  // O parseInt converte o id (que vem como texto da URL) para número.
  const parlamentar = MOCK_PARLAMENTARES.find(p => p.id === parseInt(id));

  // Bloco de código para o caso de um ID inválido ser passado na URL
  if (!parlamentar) {
    return (
      <Container size="lg" my="xl">
        <Title order={2} ta="center">Parlamentar não encontrado.</Title>
        <Group justify="center" mt="md">
          <Button 
            component={Link} 
            to="/" 
            leftSection={<IconArrowLeft size={16} />}
          >
            Voltar para a busca
          </Button>
        </Group>
      </Container>
    );
  }

  // Se o parlamentar for encontrado, renderiza a página de perfil
  return (
    <Container size="lg" my="xl">
      <Button
        component={Link}
        to="/"
        leftSection={<IconArrowLeft size={16} />}
        variant="subtle"
        mb="xl"
      >
        Voltar para a busca
      </Button>

      <Grid>
        {/* Coluna da Esquerda: Informações do Perfil */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper withBorder shadow="md" p="xl" radius="md" style={{ textAlign: 'center' }}>
            <Avatar src={parlamentar.urlFoto} size={150} radius="50%" mx="auto" />
            <Title order={2} mt="md">{parlamentar.nome}</Title>
            <Text c="dimmed">{parlamentar.tipo}</Text>
            <Text mt="sm">{parlamentar.siglaPartido} - {parlamentar.siglaUf}</Text>
          </Paper>
        </Grid.Col>

        {/* Coluna da Direita: Histórico de Votações */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Title order={3} mb="md">Votações Recentes</Title>
          {/* O Stack empilha os cards de votação com um espaçamento consistente */}
          <Stack>
            {/* Loop sobre os dados mock de votações, renderizando um card para cada */}
            {MOCK_VOTACOES.map(votacao => (
              <CardDeVotacao key={votacao.id} votacao={votacao} />
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default ProfilePage;