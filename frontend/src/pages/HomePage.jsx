// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { Container, Text, SimpleGrid, Title } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection'; 
import ParliamentarianCard from '../components/ParliamentarianCard';
import { MOCK_PARLAMENTARES } from '../data/mockParlamentares';

const MotionGrid = motion(SimpleGrid);
const MotionText = motion(Text);

function HomePage() {
  const [parlamentaresVisiveis, setParlamentaresVisiveis] = useState(MOCK_PARLAMENTARES);

  const handleSearch = (termoBuscado) => {
    if (termoBuscado.trim() === '') {
      setParlamentaresVisiveis(MOCK_PARLAMENTARES);
      return;
    }

    const parlamentaresFiltrados = MOCK_PARLAMENTARES.filter((parlamentar) =>
      parlamentar.nome.toLowerCase().includes(termoBuscado.toLowerCase())
    );
    setParlamentaresVisiveis(parlamentaresFiltrados);
  };

  return (
    <>
      <HeroSection onSearchChange={handleSearch} />

      <Container size="lg" py="xl">
        <Title
          order={2}
          mb="xl"
          style={{ textAlign: 'center', fontWeight: 700 }}
        >
          Parlamentares Encontrados
        </Title>

        <AnimatePresence mode="wait">
          {parlamentaresVisiveis.length > 0 ? (
            <MotionGrid
              cols={{ base: 1, sm: 2, lg: 3 }}
              spacing="xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {parlamentaresVisiveis.map((parlamentar) => (
                <ParliamentarianCard
                  key={parlamentar.id}
                  parlamentar={parlamentar}
                />
              ))}
            </MotionGrid>
          ) : (
            <MotionText
              ta="center"
              c="dimmed"
              mt="xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nenhum parlamentar encontrado para a sua busca.
            </MotionText>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
}

export default HomePage;
