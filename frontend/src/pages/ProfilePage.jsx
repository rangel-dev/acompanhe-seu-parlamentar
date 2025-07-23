// src/pages/ProfilePage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PARLAMENTARES } from '../data/mockParlamentares';
import { MOCK_VOTACOES } from '../data/mockVotacoes';
import CardDeVotacao from '../components/CardDeVotacao';
import AssiduidadeCard from '../components/AssiduidadeCard';
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Title,
  Text,
  Button,
  Stack,
  Group,
  Box,
  Badge,
  Tooltip,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionPaper = motion(Paper);
const MotionStack = motion(Stack);
const MotionVotacao = motion.div;

function ProfilePage() {
  const { id } = useParams();
  const parlamentar = MOCK_PARLAMENTARES.find((p) => p.id === parseInt(id));

  if (!parlamentar) {
    return (
      <Container size="lg" my="xl">
        <AnimatePresence>
          <motion.div
            key="nao-encontrado"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
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
          </motion.div>
        </AnimatePresence>
      </Container>
    );
  }

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

      <Grid gutter="xl">
        {/* Coluna Esquerda */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <MotionPaper
            withBorder
            shadow="md"
            p="xl"
            radius="md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Stack align="center">
              <Avatar src={parlamentar.urlFoto} size={150} radius="50%" />
              <Title order={2} mt="md" ta="center">
                {parlamentar.nome}
              </Title>
              <Text c="dimmed">{parlamentar.tipo}</Text>
              <Text mt="sm">
                {parlamentar.siglaPartido} - {parlamentar.siglaUf}
              </Text>
            </Stack>

            <Box mt="xl">
              <Text fw={500} ta="left" mb="sm">
                Faz parte de:
              </Text>
              <Group gap="xs" wrap="wrap">
                {parlamentar.comissoes?.map((comissao) => (
                  <Badge
                    key={comissao}
                    variant="light"
                    color="blue"
                    radius="sm"
                  >
                    {comissao}
                  </Badge>
                ))}
                {parlamentar.frentes?.map((frente) => (
                  <Tooltip
                    key={frente.nome}
                    label={`Coerência de ${frente.coerencia}% com as pautas da frente.`}
                    withArrow
                  >
                    <Badge
                      variant="light"
                      color="teal"
                      radius="sm"
                      rightSection={
                        <Text size="xs" c="teal.8" fw={700}>
                          {' '}
                          {frente.coerencia}%
                        </Text>
                      }
                    >
                      {frente.nome}
                    </Badge>
                  </Tooltip>
                ))}
              </Group>
            </Box>
          </MotionPaper>
        </Grid.Col>

        {/* Coluna Direita */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <AnimatePresence>
            {parlamentar.assiduidade && (
              <motion.div
                key="assiduidade"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <AssiduidadeCard
                  plenaria={parlamentar.assiduidade.presencaPlenario}
                  comissoes={parlamentar.assiduidade.presencaComissoes}
                />
              </motion.div>
            )}

            <Title order={3} mb="md" mt="xl">
              Votações Recentes
            </Title>
            <MotionStack
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {MOCK_VOTACOES.map((votacao) => (
                <MotionVotacao
                  key={votacao.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * votacao.id }}
                >
                  <CardDeVotacao votacao={votacao} />
                </MotionVotacao>
              ))}
            </MotionStack>
          </AnimatePresence>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default ProfilePage;
