import { css } from '@emotion/react';
import styled from '@emotion/styled';
import LogoImage from '@/assets/images/svgs/logo.svg';

const Navbar = () => {
  return <NavContainer>{/* <LogoImage height={45} /> */}</NavContainer>;
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 4.45rem;

  background-color: black;
`;
