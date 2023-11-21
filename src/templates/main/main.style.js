import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${theme.black};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 5rem;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  cursor: pointer;
`;

export const Logo = styled.div`
  text-transform: uppercase;
  color: ${(props) => props.color};
  font-size: 1.75rem;
  font-weight: bold;
`;

export const LogoText = styled.div`
  color: ${theme.white};
  font-size: 0.8rem;
  font-weight: 500;
`;

export const List = styled.div`
  display: flex;
  gap: 5rem;
`;

export const ListItem = styled.div`
  color: ${theme.white};
  margin-top: 4px;
  font-size: 1.3rem;
  box-sizing: border-box;
  cursor: pointer;
`;
export const UnderLine = styled.div`
  position: relative;
  margin-top: 2px;
  width: 0;
  height: 2px;
  background-color: ${theme.orange};
  transition: width 0.3s ease-in-out;
  ${(props) => (props.on === "true" ? `width:100%` : `width:0%`)}
`;

export const Container = styled.nav``;

export const Footer = styled.footer`
  width: 100%;
  height: 30px;
  background-color: ${theme.black};
  color: ${theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 200;
`;
