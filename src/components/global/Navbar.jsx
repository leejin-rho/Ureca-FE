import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '@/styles/colors';
import LogoImage from '@assets/images/svgs/NavLogo';
import { Text, Button } from '@components/global';

const Navbar = () => {
  const { scrollToSection } = useScroll();
  const [isTransparent, setIsTransparent] = useState(false);

  const navigate = useNavigate();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //스크롤을 맨 위로
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleApplyBtnClick = () => {
    navigate('/apply');
  };

  return (
    <NavContainer isTransparent={isTransparent}>
      <LogoImage height={30} style={{ flexShrink: 0 }} />
      <div style={{ width: 50 }}></div>
      <RowFlex>
        {/* scrollToTop */}
        <NavBtn onClick={() => scrollToTop()}>
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
        <ApplyBtnBox
          direction="column"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Button onClick={handleApplyBtnClick}>지원하기</Button>
          <FindApplyBtn isVisible={isHovered}>지원확인</FindApplyBtn>
        </ApplyBtnBox>
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

  @media (max-width: 1023px) {
    height: 62px;
    padding: 0 1.5rem;
  }
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

const ApplyBtnBox = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 15px;
`;

const FindApplyBtn = styled(Button)`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 10px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(-10px)'};
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
`;
