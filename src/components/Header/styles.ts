import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all ${({ theme }) => theme.transitions.default};
  padding: 1rem 0;

  ${({ $isScrolled, theme }) =>
    $isScrolled &&
    css`
      background: ${theme.colors.backgroundLight}ee;
      backdrop-filter: blur(20px);
      box-shadow: ${theme.shadows.md};
      padding: 0.5rem 0;
    `}
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.white};

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Nav = styled.nav`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const NavLink = styled.button<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.textSecondary};
  font-size: 0.9rem;
  font-weight: 500;
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    transition: width ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const MenuLine = styled.span<{ $isOpen: boolean }>`
  width: 25px;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transitions.default};
  transform-origin: center;

  &:nth-child(1) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    max-width: 320px;
    height: 100vh;
    background: ${({ theme }) => theme.colors.backgroundLight};
    padding: 5rem 2rem 2rem;
    gap: 1rem;
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
    transition: transform ${({ theme }) => theme.transitions.default};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    z-index: 1000;
  }
`;

export const MobileNavLink = styled.button`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.75rem 0;
  text-align: left;
  transition: color ${({ theme }) => theme.transitions.fast};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
