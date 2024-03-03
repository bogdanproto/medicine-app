import React from 'react';
import { BadgeCircle, BadgeContainer, BadgeNumber } from './Badge.styled';

interface BadgeProps {
  count: number;
}

export const Badge: React.FC<BadgeProps> = ({ count }) => {
  return (
    <BadgeContainer>
      <BadgeCircle>
        <BadgeNumber>{count}</BadgeNumber>
      </BadgeCircle>
    </BadgeContainer>
  );
};
