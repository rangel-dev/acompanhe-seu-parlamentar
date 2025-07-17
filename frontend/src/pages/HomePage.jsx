import React, { useState } from 'react';
import HeroSection from '../components/HeroSection'; 
import ParliamentarianCard from '../components/ParliamentarianCard';
import { MOCK_PARLAMENTARES } from '../data/mockParlamentares';
import { Container, Text, SimpleGrid, Title } from '@mantine/core';

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
        <Title order={2} mb="xl">Parlamentares Encontrados</Title>
        {parlamentaresVisiveis.length > 0 ? (
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }} 
            spacing="xl"
          >
            {parlamentaresVisiveis.map((parlamentar) => (
              <ParliamentarianCard key={parlamentar.id} parlamentar={parlamentar} />
            ))}
          </SimpleGrid>
        ) : (
          <Text ta="center" c="dimmed" mt="xl">Nenhum parlamentar encontrado para a sua busca.</Text>
        )}
      </Container>
    </>
  );
}

export default HomePage;