// @ts-nocheck
import { MouseEvent, useCallback } from 'react';

export const useRippleEffect = (): ((
  event: MouseEvent<HTMLButtonElement>
) => void) => {
  const clickHandler = useCallback(
    (event: MouseEvent<HTMLButtonElement>): void => {
      const button = event.currentTarget;
      const circle = document.createElement('span');
      const { classList, style } = circle;
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      style.width = circle.style.height = `${diameter}px`;
      style.left = `${event.clientX - button.offsetLeft - radius}px`;
      style.top = `${event.clientY - button.offsetTop - radius}px`;
      classList.add('Button__ripple');

      const ripple = button.getElementsByClassName('Button__ripple')[0];

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    },
    []
  );

  return clickHandler;
};
