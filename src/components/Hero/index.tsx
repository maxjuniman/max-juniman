import { FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../../data/resume';
import {
  HeroSection,
  HeroContent,
  HeroTag,
  HeroTitle,
  GradientText,
  HeroRole,
  HeroDescription,
  HeroLocation,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  HeroVisual,
  CodeBlock,
  CodeLine,
  CodeKeyword,
  CodeString,
  CodeComment,
  StatusBadge,
} from './styles';

export function Hero() {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <HeroTag>Olá, eu sou</HeroTag>
        <HeroTitle>
          <GradientText>{personalInfo.name}</GradientText>
        </HeroTitle>
        <HeroRole>{personalInfo.role}</HeroRole>
        <HeroDescription>{personalInfo.summary}</HeroDescription>
        <HeroLocation>
          <FaMapMarkerAlt />
          {personalInfo.city}, {personalInfo.state} — {personalInfo.country}
        </HeroLocation>
        <StatusBadge>{personalInfo.availability}</StatusBadge>
        <HeroButtons>
          <PrimaryButton
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> Conectar no LinkedIn
          </PrimaryButton>
          <SecondaryButton
            href={`https://wa.me/5551993112125`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </SecondaryButton>
          <SecondaryButton href={`mailto:${personalInfo.email}`}>
            <FaEnvelope /> E-mail
          </SecondaryButton>
        </HeroButtons>
      </HeroContent>

      <HeroVisual>
        <CodeBlock>
          <CodeComment>// portfolio.ts</CodeComment>
          <CodeLine>
            <CodeKeyword>const</CodeKeyword> developer = {'{'}
          </CodeLine>
          <CodeLine style={{ paddingLeft: '1.5rem' }}>
            name: <CodeString>"{personalInfo.name}"</CodeString>,
          </CodeLine>
          <CodeLine style={{ paddingLeft: '1.5rem' }}>
            role: <CodeString>"{personalInfo.role}"</CodeString>,
          </CodeLine>
          <CodeLine style={{ paddingLeft: '1.5rem' }}>
            stack: [<CodeString>"React"</CodeString>, <CodeString>"TypeScript"</CodeString>, <CodeString>"Next.js"</CodeString>],
          </CodeLine>
          <CodeLine style={{ paddingLeft: '1.5rem' }}>
            available: <CodeKeyword>true</CodeKeyword>,
          </CodeLine>
          <CodeLine>{'}'}</CodeLine>
        </CodeBlock>
      </HeroVisual>
    </HeroSection>
  );
}
