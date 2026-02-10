import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ExperienceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TimelineDot = styled.div<{ $isActive: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.gradient : theme.colors.backgroundCard};
  border: 2px solid ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all ${({ theme }) => theme.transitions.default};
`;

export const TimelineIcon = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.85rem;
  display: flex;
  align-items: center;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 19px;
  top: 40px;
  width: 2px;
  height: calc(100% - 20px);
  background: ${({ theme }) => theme.colors.border};
`;

export const TimelineContent = styled.div<{ $isExpanded: boolean }>`
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 1px solid ${({ theme, $isExpanded }) =>
    $isExpanded ? theme.colors.primary + '50' : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 1.5rem;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}50;
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;

export const CompanyName = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

export const RoleText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.25rem;
`;

export const PeriodText = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.mono};
  margin-bottom: 1rem;
`;

export const ExpandButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  cursor: pointer;
  padding: 0.25rem 0;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ActivitiesList = styled.ul`
  margin-top: 1rem;
  animation: ${fadeIn} 0.3s ease;
`;

export const ActivityItem = styled.li`
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
