// src/components/ParliamentarianCard.jsx
import React from 'react';
import { Card, Avatar, Text, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

function ParliamentarianCard({ parlamentar }) {
  return (
    <Link to={`/parlamentar/${parlamentar.id}`} style={{ textDecoration: 'none' }}>
      <MotionCard
        shadow="md"
        p="lg"
        radius="md"
        withBorder
        mb="md"
        whileHover={{ scale: 1.03, boxShadow: '0px 8px 20px rgba(0,0,0,0.15)' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Group align="center" gap="md">
          <Avatar src={parlamentar.urlFoto} size={90} radius="50%" />
          <div>
            <Text fw={600} size="lg" c="dark">
              {parlamentar.nome}
            </Text>
            <Text size="sm" c="dimmed">
              {parlamentar.siglaPartido} - {parlamentar.siglaUf}
            </Text>
            <Text size="sm" c="gray">
              {parlamentar.tipo}
            </Text>
          </div>
        </Group>
      </MotionCard>
    </Link>
  );
}

export default ParliamentarianCard;
