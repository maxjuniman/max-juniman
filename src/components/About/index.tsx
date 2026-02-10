import { FaUser, FaHeart, FaChild, FaPlane } from 'react-icons/fa';
import { personalInfo } from '../../data/resume';
import {
  AboutSection,
  SectionTitle,
  SectionSubtitle,
  AboutGrid,
  AboutText,
  AboutCards,
  InfoCard,
  InfoIcon,
  InfoLabel,
  InfoValue,
} from './styles';

export function About() {
  return (
    <AboutSection id="about">
      <SectionSubtitle>Conheça mais</SectionSubtitle>
      <SectionTitle>Sobre Mim</SectionTitle>

      <AboutGrid>
        <AboutText>
          <p>
            Sou um desenvolvedor front-end com sólida experiência em <strong>React JS</strong>,{' '}
            <strong>TypeScript</strong>, <strong>Next.js</strong> e <strong>React Native</strong>.
            Com mais de 5 anos atuando no desenvolvimento de interfaces modernas, tenho paixão por
            criar experiências web e mobile de alta qualidade.
          </p>
          <p>
            Minha trajetória inclui passagens por empresas como <strong>FISERV</strong>,{' '}
            <strong>Grecale</strong> e <strong>Firedev</strong>, onde desenvolvi habilidades em
            TDD, microsserviços com Single SPA, publicação de apps em iOS/Android e
            gerenciamento de versão com Git e Mercurial.
          </p>
          <p>
            Atualmente focado em tecnologias modernas do ecossistema React, busco constantemente
            evoluir e entregar soluções que impactem positivamente os negócios e a experiência
            dos usuários.
          </p>
        </AboutText>

        <AboutCards>
          <InfoCard>
            <InfoIcon><FaUser /></InfoIcon>
            <InfoLabel>Idade</InfoLabel>
            <InfoValue>{personalInfo.age} anos</InfoValue>
          </InfoCard>
          <InfoCard>
            <InfoIcon><FaHeart /></InfoIcon>
            <InfoLabel>Estado Civil</InfoLabel>
            <InfoValue>{personalInfo.maritalStatus}</InfoValue>
          </InfoCard>
          <InfoCard>
            <InfoIcon><FaChild /></InfoIcon>
            <InfoLabel>Filhos</InfoLabel>
            <InfoValue>{personalInfo.children}</InfoValue>
          </InfoCard>
          <InfoCard>
            <InfoIcon><FaPlane /></InfoIcon>
            <InfoLabel>Disponibilidade</InfoLabel>
            <InfoValue>Viagens</InfoValue>
          </InfoCard>
        </AboutCards>
      </AboutGrid>
    </AboutSection>
  );
}
