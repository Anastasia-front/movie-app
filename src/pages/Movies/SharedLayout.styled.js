import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid black;
  box-shadow: 0px 10px 6px rgb(187, 187, 187);
  margin-bottom: 40px;
  padding: 12px 30px;
`;
export const HeaderContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  nav {
    display: flex;
    gap: 10px;
  }
`;
export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (min-width: 950px) {
    padding: 0;
  }
`;
export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Link = styled(NavLink)`
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgb(209 127 25);
  }
`;

export const Icon = styled.span`
  margin-right: 10px;
  font-size: 25px;
`;
