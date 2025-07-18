// src/components/HeroSection.jsx
import { Title, Text, Container, Box, Button, useMantineColorScheme, Stack } from '@mantine/core';
import SearchBar from './SearchBar';
import { IconSearch } from '@tabler/icons-react';

function HeroSection({ onSearchChange }) {
  const { colorScheme } = useMantineColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#282e46' : '#f3f3f3';
  const textColor = colorScheme === 'dark' ? 'white' : 'black';
  const secondaryTextColor = colorScheme === 'dark' ? 'gray.4' : 'gray.7';
  const buttonColor = colorScheme === 'dark' ? 'brand.5' : 'brand.6';

  return (
    <Box
      h={{ base: 450, sm: 400 }}
      bg={backgroundColor}
      // 1. AQUI ESTÁ A PRIMEIRA MUDANÇA:
      // Adicionamos um padding horizontal (px) diretamente no Box principal.
      // Isso cria uma "margem de segurança" nas laterais em todas as telas.
      px="md"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container size="md">
        <Stack align="center" gap="md">
          <Title
            c={textColor}
            ta="center"
            // 2. AQUI ESTÁ A SEGUNDA MUDANÇA:
            // Diminuímos o tamanho da fonte base para 30px.
            // Isso garante que o título não "vaze" em telas muito estreitas.
            fz={{ base: 30, sm: 50 }}
          >
            Fiscalize, de perto!
          </Title>

          <Text c={secondaryTextColor} ta="center" fz="lg">
            A democracia se fortalece com transparência. Saiba como cada parlamentar
            vota no Congresso Nacional.
          </Text>

          <Box w="100%" maw={600}>
            <SearchBar onSearchChange={onSearchChange} />
          </Box>

          <Button
            mt="sm"
            size="lg"
            radius="xl"
            leftSection={<IconSearch size={20} />}
            color={buttonColor}
            variant="filled"
          >
            Pesquisar
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default HeroSection;