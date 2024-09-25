import styled from '@emotion/styled';
import LogoImage from '@/assets/images/svgs/Logo';
import { Text } from '@components/global/Text';
import { colors } from '@/styles/colors';
import { Button } from './Button';
import { useEffect, useState } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [isTransparent, setIsTransparent] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 449) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <NavContainer isTransparent={isTransparent}>
      <LogoImage height={45} style={{ flexShrink: 0 }} />
      <div style={{ width: 50 }}></div>
      <RowFlex>
        <NavBtn onClick={scrollToTop}>
          <Text color={colors.white} variant="h8" lineHeight="130%">
            HOME
          </Text>
        </NavBtn>
        <NavBtn onClick={() => scrollToSection(1)}>
          <Text color={colors.white} variant="h8" lineHeight="130%">
            {`WHY `}
          </Text>
          <Text color={colors.primaryColor} variant="h8" lineHeight="130%">
            URECA
          </Text>
        </NavBtn>
        <NavBtn onClick={() => scrollToSection(2)}>
          <Text color={colors.white} variant="h8" lineHeight="130%">
            교육안내
          </Text>
        </NavBtn>
        <NavBtn onClick={() => scrollToSection(3)}>
          <Text color={colors.white} variant="h8" lineHeight="130%">
            선발절차
          </Text>
        </NavBtn>
        <NavBtn onClick={() => scrollToSection(4)}>
          <Text color={colors.white} variant="h8" lineHeight="130%">
            FAQ
          </Text>
        </NavBtn>
        <Button>지원하기</Button>
      </RowFlex>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 72px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 6rem 0 5rem;

  background-color: ${(props) =>
    props.isTransparent ? 'rgba(12, 12, 12, 0.8)' : 'black'};
  transition: background-color 0.3s ease;
  z-index: 999;

  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  flex-shrink: 0;
`;

const NavBtn = styled.div`
  display: flex;
  width: fit-content;
  flex-shrink: 0;

  &:hover {
    cursor: pointer;
    color: ${colors.gray100};
  }
`;

const RowFlex = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 1.875rem;
  box-sizing: border-box;

  @media (max-width: 1023px) {
    display: none;
  }
`;
