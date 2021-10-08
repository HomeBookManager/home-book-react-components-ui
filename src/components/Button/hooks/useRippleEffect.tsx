import { MouseEvent, useCallback } from 'react';

export const useRippleEffect = (): ((
  event: MouseEvent<HTMLButtonElement>
) => void) => {
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

    style.width = style.height = `${diameter}px`;
    style.left = `${clientX - offsetLeft - radius}px`;
    style.top = `${clientY - offsetTop - radius}px`;
  };

  const appendHTMLSpanToButton = (
    event: MouseEvent<HTMLButtonElement>,
    htmlSpan: HTMLSpanElement
  ) => {
    const { currentTarget } = event;
    const { classList } = htmlSpan;
    const ripple = currentTarget.getElementsByClassName('Button__ripple')[0];

    classList.add('Button__ripple');

    if (ripple) {
      ripple.remove();
    }
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
