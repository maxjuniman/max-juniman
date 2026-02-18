import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { personalInfo } from '../../data/resume';
import {
  ContactSection,
  SectionSubtitle,
  SectionTitle,
  ContactGrid,
  ContactInfo,
  ContactText,
  ContactCards,
  ContactCard,
  ContactCardIcon,
  ContactCardLabel,
  ContactCardValue,
  ContactActions,
  PrimaryLink,
  SecondaryLink,
} from './styles';

export function Contact() {
  return (
    <ContactSection id="contact">
      <SectionSubtitle>Fale comigo</SectionSubtitle>
      <SectionTitle>Vamos Conversar?</SectionTitle>

      <ContactGrid>
        <ContactInfo>
          <ContactText>
            Estou disponível para novas oportunidades e desafios. Se você está procurando um
            desenvolvedor front-end com experiência sólida em React, TypeScript e tecnologias
            modernas, vamos conversar!
          </ContactText>

          <ContactActions>
            <PrimaryLink
              href={`https://wa.me/5551993112125`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Chamar no WhatsApp
            </PrimaryLink>
            <SecondaryLink
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> Conectar no LinkedIn
            </SecondaryLink>
            <SecondaryLink
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Conectar no GitHub
            </SecondaryLink>
          </ContactActions>
        </ContactInfo>

        <ContactCards>
          <ContactCard>
            <ContactCardIcon><FaEnvelope /></ContactCardIcon>
            <ContactCardLabel>E-mail</ContactCardLabel>
            <ContactCardValue
              as="a"
              href={`mailto:${personalInfo.email}`}
            >
              {personalInfo.email}
            </ContactCardValue>
          </ContactCard>

          <ContactCard>
            <ContactCardIcon><FaPhone /></ContactCardIcon>
            <ContactCardLabel>Telefone</ContactCardLabel>
            <ContactCardValue
              as="a"
              href={`tel:+5551993112125`}
            >
              {personalInfo.phone}
            </ContactCardValue>
          </ContactCard>

          <ContactCard>
            <ContactCardIcon><FaMapMarkerAlt /></ContactCardIcon>
            <ContactCardLabel>Localização</ContactCardLabel>
            <ContactCardValue>
              {personalInfo.city}, {personalInfo.state}
            </ContactCardValue>
          </ContactCard>

          <ContactCard>
            <ContactCardIcon><FaLinkedin /></ContactCardIcon>
            <ContactCardLabel>LinkedIn</ContactCardLabel>
            <ContactCardValue
              as="a"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {personalInfo.linkedinLabel}
            </ContactCardValue>
          </ContactCard>

          <ContactCard>
            <ContactCardIcon><FaGithub /></ContactCardIcon>
            <ContactCardLabel>GitHub</ContactCardLabel>
            <ContactCardValue
              as="a"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {personalInfo.githubLabel}
            </ContactCardValue>
          </ContactCard>
        </ContactCards>
      </ContactGrid>
    </ContactSection>
  );
}
