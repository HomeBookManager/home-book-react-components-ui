import { FC, ReactElement, useMemo } from 'react';

// others
import { className as buttonGroupClassName, Orientation } from './constants';
import {
  className as buttonClassName,
  Color,
  Variant,
} from '../Button/constants';
import { TProps as TButtonProps } from '../Button/Button';

// services
import getChildrenWithForwardedProps from '../../services/getChildrenWithForwardedProps';
import getStyleClassNames from '../../services/getStyleClassNames';

// styles
import './button-group.scss';

export type TProps = Pick<TButtonProps, 'color' | 'variant'> & {
  children: ReactElement | Array<ReactElement>;
  className?: string;
  orientation?: Orientation;
};

export const ButtonGroup: FC<TProps> = ({
  children,
  className = '',
  color = Color.primary,
  orientation = Orientation.horizontal,
  variant = Variant.contained,
}) => {
  const classNames = [
    buttonGroupClassName,
    className,
    `${buttonGroupClassName}__${orientation}`,
  ];
  const buttonGroupWithOrientationClassName = `${buttonGroupClassName}__${buttonClassName}__${orientation}`;
  const buttonClassNames = [
    buttonGroupWithOrientationClassName,
    `${buttonGroupWithOrientationClassName}__${variant}`,
    `${buttonGroupWithOrientationClassName}__${variant}--${color}`,
  ];
  const buttonProps: TButtonProps = {
    className: getStyleClassNames(buttonClassNames),
  };
  const content = useMemo(
    () => getChildrenWithForwardedProps(children, buttonProps, 'Button'),
    [children]
  );

  return <div className={getStyleClassNames(classNames)}>{content}</div>;
};

export default ButtonGroup;
