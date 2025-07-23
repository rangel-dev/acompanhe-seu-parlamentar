// src/theme.js
import { createTheme } from '@mantine/core';

export const theme = createTheme({
  // Nova fonte padrão para o projeto
  fontFamily: 'Inter, sans-serif',

  // Cantos arredondados maiores por padrão para todos os componentes
  defaultRadius: 'lg',

  colors: {
    brand: [
      "#eef0f8",
      "#d9dcf0",
      "#b2b9e0",
      "#8b95d1",
      "#6b77c1",
      "#5865b8",
      "#4b4e6d",
      "#383e58",
      "#282e46",
      "#171b32"
    ],
  },

  primaryColor: 'brand',

  // Estilo customizado para os Títulos
  components: {
    Title: {
      styles: (theme) => ({
        root: {
          // Lógica para aplicar o gradiente apenas no tema claro para melhor contraste
          background: theme.colorScheme === 'dark' 
            ? 'inherit' 
            : `linear-gradient(45deg, ${theme.colors.brand[4]} 0%, ${theme.colors.brand[6]} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      }),
    },
  },
});