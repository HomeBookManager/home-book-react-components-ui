import { FC, ReactNode } from 'react';

// components
import StoryBlockCode, {
  TProps as TStoryBlockCodeProps,
} from '../StoryBlockCode/StoryBlockCode';

// styles
import './story-wrapper.scss';

export enum ContentGridFlow {
  column = 'flow-column',
  maxThreeColumns = 'flow-max-three-columns',
}

type TProps = TStoryBlockCodeProps & {
  children?: ReactNode;
  contentGridFlow?: ContentGridFlow;
  description?: Array<string>;
  title: string;
};

const StoryComponent: FC<TProps> = ({
  children,
  contentGridFlow = ContentGridFlow.column,
  description = [],
  title,
  ...restProps
}) => (
  <main className="StoryWrapper">
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
    <StoryBlockCode {...restProps} />
  </main>
);

export default StoryComponent;
