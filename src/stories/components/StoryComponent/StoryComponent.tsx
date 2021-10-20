import { FC, ReactNode } from 'react';

// components
import StoryBlockCode, {
  TProps as TStoryBlockCodeProps,
} from '../StoryBlockCode/StoryBlockCode';

// styles
import './story-component.scss';

export enum ContentGridFlow {
  column = 'flow-column',
  row = 'flow-row',
  maxThreeColumns = 'flow-max-three-columns',
}

type TProps = TStoryBlockCodeProps & {
  children?: ReactNode;
  className?: string;
  contentGridFlow?: ContentGridFlow;
  description?: Array<string>;
  title: string;
};

const StoryComponent: FC<TProps> = ({
  children,
  className = '',
  contentGridFlow = ContentGridFlow.column,
  description = [],
  title,
  ...restProps
}) => (
  <section className={`StoryWrapper ${className}`}>
    <h2 className="StoryWrapper__title">{title}</h2>
    {description.map((description, key) => (
      <p
        className="StoryWrapper__description"
        dangerouslySetInnerHTML={{ __html: description }}
        key={key}
      />
    ))}
    {children && (
      <section
        className={`StoryWrapper__content StoryWrapper__content--${contentGridFlow}`}
      >
        {children}
      </section>
    )}
    <StoryBlockCode
      className={`StoryWrapper__story-block-code ${className}__story-block-code`}
      {...restProps}
    />
  </section>
);

export default StoryComponent;
