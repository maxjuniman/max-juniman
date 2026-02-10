import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Button } from 'react-aria-components';
import {
  HeaderWrapper,
  HeaderContainer,
  Logo,
  Nav,
  NavList,
  NavLink,
  MobileMenuButton,
  MenuLine,
  MobileMenu,
  MobileNavLink,
} from './styles';

const navItems = [
  { label: 'Início', path: '/', hash: '#hero' },
  { label: 'Sobre', path: '/', hash: '#about' },
  { label: 'Habilidades', path: '/', hash: '#skills' },
  { label: 'Experiência', path: '/', hash: '#experience' },
  { label: 'Formação', path: '/', hash: '#education' },
  { label: 'Contato', path: '/', hash: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderWrapper $isScrolled={isScrolled}>
      <HeaderContainer>
        <RouterLink to="/" onClick={() => handleNavClick('#hero')}>
          <Logo>
            {'<'}Max<span>/</span>{'>'}
          </Logo>
        </RouterLink>

        <Nav>
          <NavList>
            {navItems.map((item) => (
              <li key={item.hash}>
                <NavLink
                  onClick={() => handleNavClick(item.hash)}
                  $isActive={location.hash === item.hash}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </NavList>
        </Nav>

        <MobileMenuButton
          as={Button}
          onPress={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menu"
        >
          <MenuLine $isOpen={isMobileOpen} />
          <MenuLine $isOpen={isMobileOpen} />
          <MenuLine $isOpen={isMobileOpen} />
        </MobileMenuButton>

        <MobileMenu $isOpen={isMobileOpen}>
          {navItems.map((item) => (
            <MobileNavLink
              key={item.hash}
              onClick={() => handleNavClick(item.hash)}
            >
              {item.label}
            </MobileNavLink>
          ))}
        </MobileMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
