import React, { useState } from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function SearchBar({ onSearchChange }) {
  const [valor, setValor] = useState('');

  const handleChange = (event) => {
    const termoBuscado = event.currentTarget.value;
    setValor(termoBuscado); 
    onSearchChange(termoBuscado);
  };

  return (
    <TextInput
      label="Buscar Parlamentar"
      description="Digite o nome do deputado ou senador"
      placeholder="Ex: Abilio Brunini"
      leftSection={<IconSearch size={16} />}
      size="lg"
      my="xl"
      ta={'center'}
      value={valor} 
      onChange={handleChange}
    />
  );
}

export default SearchBar;