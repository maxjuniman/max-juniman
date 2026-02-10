import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
`;

const livePulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

export const CounterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1.1rem;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  animation: ${fadeIn} 0.5s ease;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}60;
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;

export const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success};
  animation: ${livePulse} 2s ease-in-out infinite;
`;

export const CounterIcon = styled.span<{ $isAnimating: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;

  ${({ $isAnimating }) =>
    $isAnimating &&
    css`
      animation: ${pulse} 0.6s ease;
    `}
`;

export const CounterValue = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
`;

export const CounterNumber = styled.span<{ $isAnimating: boolean }>`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.mono};

  ${({ $isAnimating }) =>
    $isAnimating &&
    css`
      animation: ${pulse} 0.6s ease;
    `}
`;

export const CounterLabel = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 500;
`;
