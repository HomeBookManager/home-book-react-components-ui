import { MouseEvent, useCallback } from 'react';

export const useRippleEffect = (
  rippleClassName: string
): ((event: MouseEvent<HTMLButtonElement>) => void) => {
  const removePreviouslyHTMLSpan = (event: MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    const ripple = currentTarget.getElementsByClassName(rippleClassName)[0];

    if (ripple) {
      ripple.remove();
    }
  };

  const adjustHTMLSpanBeforeAppend = (
    event: MouseEvent<HTMLButtonElement>,
    htmlSpan: HTMLSpanElement
  ) => {
    const { style } = htmlSpan;
    const {
      clientY,
      clientX,
      currentTarget: { clientHeight, clientWidth, offsetLeft, offsetTop },
    } = event;
    const diameter = Math.max(clientWidth, clientHeight);
    const radius = diameter / 2;

    style.left = `${clientX - offsetLeft - radius}px`;
    style.top = `${clientY - offsetTop - radius}px`;
    style.width = style.height = `${diameter}px`;
  };

  const appendHTMLSpan = (
    event: MouseEvent<HTMLButtonElement>,
    htmlSpan: HTMLSpanElement
  ) => {
    const { currentTarget } = event;
    const { classList } = htmlSpan;

    classList.add(rippleClassName);
    currentTarget.appendChild(htmlSpan);
  };

  const clickHandler = useCallback(
    (event: MouseEvent<HTMLButtonElement>): void => {
      const htmlSpan = document.createElement('span');

      removePreviouslyHTMLSpan(event);
      adjustHTMLSpanBeforeAppend(event, htmlSpan);
      appendHTMLSpan(event, htmlSpan);
    },
    []
  );

  return clickHandler;
};
