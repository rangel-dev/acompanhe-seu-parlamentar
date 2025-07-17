import { Title, Text, Container, Overlay, Box } from '@mantine/core';
import SearchBar from './SearchBar'; // Vamos colocar a busca dentro do Hero

function HeroSection({ onSearchChange }) {
  return (
    <Box
      h={400} // h = height
      style={{
        position: 'relative',
        backgroundImage: 'url(https://www.camara.leg.br/midias/image/2022/03/vista-noturna-do-congresso-nacional-foto-de-maryanna-oliveira-camara-dos-deputados-2-1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />

      <Container
        size="md"
        h="100%"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Title c="white" fz={50}>Fiscalize. De perto.</Title>
        <Text c="white" my="md">
          A democracia se fortalece com transparência. Saiba como cada parlamentar vota no Congresso Nacional.
        </Text>
        <Box w="100%" maw={600} mt="md">
          <SearchBar onSearchChange={onSearchChange} />
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;