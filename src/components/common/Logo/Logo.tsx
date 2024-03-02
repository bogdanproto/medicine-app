import { GiMedicines } from 'react-icons/gi';
import { LogoContainer } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <GiMedicines fontSize="96px" />
      <h1>MEDICINE APP</h1>
    </LogoContainer>
  );
};
