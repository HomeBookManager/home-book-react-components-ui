import { MouseEvent, useCallback } from 'react';

export const useRippleEffect = (
  rippleClassName: string
): ((event: MouseEvent<HTMLButtonElement>) => void) => {
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

  const appendHTMLSpanToButton = (
    event: MouseEvent<HTMLButtonElement>,
    htmlSpan: HTMLSpanElement
  ) => {
    const { currentTarget } = event;
    const { classList } = htmlSpan;
    const ripple = currentTarget.getElementsByClassName(rippleClassName)[0];

    if (ripple) {
      ripple.remove();
    }

    classList.add(rippleClassName);
    currentTarget.appendChild(htmlSpan);
  };

  const clickHandler = useCallback(
    (event: MouseEvent<HTMLButtonElement>): void => {
      const htmlSpan = document.createElement('span');

      adjustHTMLSpanBeforeAppend(event, htmlSpan);
      appendHTMLSpanToButton(event, htmlSpan);
    },
    []
  );

  return clickHandler;
};
