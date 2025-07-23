// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import {
  Title,
  Text,
  Container,
  Box,
  Stack,
  Button,
} from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './SearchBar';
import { MOCK_PAUTAS_QUENTES } from '../data/mockPautasQuentes';
import PlacarVotacao from './PlacarVotacao';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionTitle = motion(Title);

function HeroSection({ onSearchChange }) {
  const [pauta, setPauta] = useState(MOCK_PAUTAS_QUENTES[0]);
  const [key, setKey] = useState(0); // Para animar transição entre pautas

  const shufflePauta = () => {
    const novaPauta = MOCK_PAUTAS_QUENTES[Math.floor(Math.random() * MOCK_PAUTAS_QUENTES.length)];
    setPauta(novaPauta);
    setKey(prev => prev + 1);
  };

  useEffect(() => {
    shufflePauta();
  }, []);

  return (
    <MotionBox
      h={{ base: 500, sm: 450 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        background: 'linear-gradient(135deg, #1a1a40, #003366)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <Container size="md">
        <Stack align="center" gap="lg">
          <MotionText
            c="blue.2"
            fz="xs"
            fw={700}
            tt="uppercase"
            style={{ letterSpacing: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            em destaque no congresso
          </MotionText>

          <AnimatePresence mode="wait">
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              <MotionTitle
                c="white"
                fz={{ base: 38, sm: 54 }}
                style={{ lineHeight: 1.1 }}
              >
                {pauta.apelido}
              </MotionTitle>

              <MotionText
                c="gray.4"
                fz="md"
                style={{ maxWidth: 600, margin: '0 auto' }}
              >
                {pauta.resumo}
              </MotionText>
            </motion.div>
          </AnimatePresence>

          <Box w="100%" maw={400}>
            <PlacarVotacao votos={pauta.votos} />
          </Box>

          <Box w="100%" maw={600} mt="sm">
            <SearchBar onSearchChange={onSearchChange} />
          </Box>

          <Button
            variant="white"
            size="xs"
            color="dark"
            onClick={shufflePauta}
            style={{ marginTop: '1rem', opacity: 0.8 }}
          >
            Ver outra pauta
          </Button>
        </Stack>
      </Container>
    </MotionBox>
  );
}

export default HeroSection;
