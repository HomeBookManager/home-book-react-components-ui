import { FC } from 'react';

// others
import { className as radioButtonClassName } from './constants';

// services
import getStyleClassNames from '../../../services/getStyleClassNames';

// styles
import './radio-button.scss';

export type TProps = {};

export const RadioButton: FC<TProps> = () => {
  const classNames = [radioButtonClassName];

  return <div className={getStyleClassNames(classNames)}></div>;
};

export default RadioButton;
