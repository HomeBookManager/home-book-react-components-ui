import { FC, ReactNode } from 'react';

// styles
import './story-block-warning.scss';

const className = 'StoryBlockWarning';

export type TProps = {
  children: ReactNode;
};

const StroyBlockWarning: FC<TProps> = ({ children = null }) => {
  return (
    <blockquote className={className}>
      <p className={`${className}__context`}>⚠️ {children}</p>
    </blockquote>
  );
};

export default StroyBlockWarning;
