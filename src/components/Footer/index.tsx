import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../../data/resume';
import { VisitorCounter } from '../VisitorCounter';
import {
  FooterWrapper,
  FooterContainer,
  FooterTop,
  FooterLogo,
  FooterLinks,
  FooterLink,
  SocialLinks,
  SocialLink,
  FooterBottom,
  FooterCopyright,
  FooterMadeWith,
  FooterMiddle,
} from './styles';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop>
          <FooterLogo onClick={() => scrollTo('#hero')}>
            {'<'}Max<span>/</span>{'>'}
          </FooterLogo>

          <FooterLinks>
            <FooterLink onClick={() => scrollTo('#about')}>Sobre</FooterLink>
            <FooterLink onClick={() => scrollTo('#skills')}>Habilidades</FooterLink>
            <FooterLink onClick={() => scrollTo('#experience')}>Experiência</FooterLink>
            <FooterLink onClick={() => scrollTo('#education')}>Formação</FooterLink>
            <FooterLink onClick={() => scrollTo('#contact')}>Contato</FooterLink>
          </FooterLinks>

          <SocialLinks>
            <SocialLink
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href={`mailto:${personalInfo.email}`}
              aria-label="E-mail"
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </FooterTop>

        <FooterMiddle>
          <VisitorCounter />
        </FooterMiddle>

        <FooterBottom>
          <FooterCopyright>
            &copy; {currentYear} {personalInfo.name}. Todos os direitos reservados.
          </FooterCopyright>
          <FooterMadeWith>
            Feito com <FaHeart /> usando React, TypeScript & Styled Components
          </FooterMadeWith>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
}
