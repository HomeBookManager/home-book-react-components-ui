import { MouseEvent, useEffect, useState } from 'react';

export const useRippleEffect = (
  className: string
): {
  clickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  component: (() => JSX.Element) | null;
} => {
  const initialCoords = { x: -1, y: -1 };
  const [coords, setCoords] = useState(initialCoords);
  const [isRippling, setIsRippling] = useState(false);
  const component = isRippling
    ? (): JSX.Element => (
        <span
          className={className}
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      )
    : null;

  const clickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top } = currentTarget.getBoundingClientRect();

    setCoords({
      x: clientX - left,
      y: clientY - top,
    });
  };

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRippling) {
      setCoords(initialCoords);
    }
  }, [isRippling]);

  return { clickHandler, component };
};
