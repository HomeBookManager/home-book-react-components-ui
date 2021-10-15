import { FC, useEffect, useRef } from 'react';

// services
import timer from '../../services/timer';

// styles
import './circle-pulse.scss';

type TProps = {
  animationDuration: number;
  className: string;
  pulseElements: Array<string>;
  setPulseElements: (pulseElements: Array<string>) => void;
};

const CirclePulse: FC<TProps> = ({
  animationDuration,
  className,
  pulseElements,
  setPulseElements,
}) => {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = new timer(animationDuration);
    timerRef.current.start();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPulseElements(pulseElements.slice(1));
      // @ts-ignore
    }, [timerRef.current.getTimeLeft()]);

    return () => {
      clearTimeout(timer);
    };
  }, [pulseElements]);

  return (
    <span
      className={`CirclePulse ${className}`}
      style={{ animationDuration: `${animationDuration}ms` }}
    />
  );
};

export default CirclePulse;
