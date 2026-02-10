import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const typing = keyframes`
  from { opacity: 0.2; }
  to { opacity: 1; }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
    padding-top: 6rem;
    gap: 3rem;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  animation: ${fadeInUp} 0.8s ease forwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroTag = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  animation: ${fadeInUp} 0.8s ease forwards;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.75rem;
`;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeroRole = styled.h2`
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.25rem;
`;

export const HeroDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 560px;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

export const HeroLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.success}20;
  color: ${({ theme }) => theme.colors.success};
  padding: 0.4rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.success}40;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.success};
    border-radius: 50%;
    animation: ${typing} 1.5s ease-in-out infinite;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 0.95rem;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.glow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 0.95rem;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

export const HeroVisual = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: ${fadeInUp} 1s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    max-width: 500px;
  }
`;

export const CodeBlock = styled.div`
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 2rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  width: 100%;
  max-width: 460px;
  animation: ${float} 6s ease-in-out infinite;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
  }
`;

export const CodeLine = styled.div`
  padding: 0.2rem 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const CodeKeyword = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const CodeString = styled.span`
  color: ${({ theme }) => theme.colors.success};
`;

export const CodeComment = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  padding-bottom: 0.5rem;
`;
