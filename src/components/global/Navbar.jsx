import { css } from '@emotion/react';
import styled from '@emotion/styled';
import LogoImage from '@/assets/images/svgs/logo.svg';
import { Text } from '@components/global/Text';
import { colors } from '@/styles/colors';

const Navbar = () => {
  const handleClick = () => {};

  return (
    <NavContainer>
      {/* <LogoImage height={45} /> */}
      <div style={{ width: 50 }}></div>
      <RowFlex>
        <NavBtn onClick={handleClick}>
          <Text color={colors.white} variant="h8" lineHeight="130%">
            HOME
          </Text>
        </NavBtn>
        <NavBtn onClick={handleClick}>
          <Text color={colors.white} variant="h8" lineHeight="130%">
            WHY
          </Text>
          <Text color={colors.primaryColor} variant="h8" lineHeight="130%">
            URECA
          </Text>
        </NavBtn>
        <NavBtn onClick={handleClick}>
          <Text color={colors.white} variant="h8" lineHeight="130%">
            교육안내
          </Text>
        </NavBtn>
        <NavBtn onClick={handleClick}>
          <Text color={colors.white} variant="h8" lineHeight="130%">
            선발절차
          </Text>
        </NavBtn>
        <NavBtn onClick={handleClick}>
          <Text color={colors.white} variant="h8" lineHeight="130%">
            FAQ
          </Text>
        </NavBtn>
        <ApplyBtn>
          <Text color={colors.black} variant="h9" lineHeight="100%">
            지원하기
          </Text>
        </ApplyBtn>
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

  background-color: black;
  padding: 0 20rem;

  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const NavBtn = styled.div`
  display: flex;
  width: fit-content;

  cursor: pointer;
`;

const RowFlex = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 1.875rem;
  box-sizing: border-box;
`;

const ApplyBtn = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 0.75rem;
  background: ${colors.white};

  box-sizing: border-box;
  margin-left: 1.5rem;

  cursor: pointer;
`;
