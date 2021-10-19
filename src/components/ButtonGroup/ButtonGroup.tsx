import { FC, ReactElement, useMemo } from 'react';

// others
import { className as buttonGroupClassName, Orientation } from './constants';
import { Color, Variant } from '../Button/constants';
import { TProps as TButtonProps } from '../Button/Button';

// services
import getChildrenWithForwardedProps from '../../services/getChildrenWithForwardedProps';
import getStyleClassNames from '../../services/getStyleClassNames';

// styles
import './button-group.scss';

export type TProps = Pick<
  TButtonProps,
  | 'className'
  | 'color'
  | 'disabled'
  | 'disableRippleEffect'
  | 'forcedHover'
  | 'size'
  | 'style'
  | 'variant'
> & {
  children: ReactElement | Array<ReactElement>;
  orientation?: Orientation;
};

export const ButtonGroup: FC<TProps> = ({
  children,
  className = '',
  color = Color.primary,
  orientation = Orientation.horizontal,
  style = {},
  variant = Variant.contained,
  ...restProps
}) => {
  const classNames = [
    buttonGroupClassName,
    className,
    `${buttonGroupClassName}__${orientation}`,
  ];
  const buttonGroupWithOrientationClassName = `${buttonGroupClassName}__button__${orientation}`;
  const buttonClassNames = [
    buttonGroupWithOrientationClassName,
    `${buttonGroupWithOrientationClassName}__${variant}`,
    `${buttonGroupWithOrientationClassName}__${variant}--${color}`,
  ];
  const buttonProps: TButtonProps = {
    className: getStyleClassNames(buttonClassNames),
    color,
    variant,
    ...restProps,
  };
  const content = useMemo(
    () => getChildrenWithForwardedProps(children, buttonProps, 'Button'),
    [children]
  );

  return (
    <div className={getStyleClassNames(classNames)} style={style}>
      {content}
    </div>
  );
};

export default ButtonGroup;
