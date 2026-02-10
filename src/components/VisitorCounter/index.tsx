import { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { registerVisit } from '../../services/visitCounter';
import {
  CounterWrapper,
  CounterIcon,
  CounterValue,
  CounterLabel,
  CounterNumber,
  Dot,
} from './styles';

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let cancelled = false;

    registerVisit().then((total) => {
      if (!cancelled) {
        setCount(total);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) {
    return null;
  }

  return (
    <CounterWrapper title="Total de visitantes">
      <Dot />
      <CounterIcon $isAnimating={isAnimating}>
        <FaEye />
      </CounterIcon>
      <CounterValue>
        <CounterNumber $isAnimating={isAnimating}>
          {count.toLocaleString('pt-BR')}
        </CounterNumber>
        <CounterLabel>visitantes</CounterLabel>
      </CounterValue>
    </CounterWrapper>
  );
}
