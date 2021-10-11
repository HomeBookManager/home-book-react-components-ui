import { FC, ReactNode } from 'react';

// components
import StoryBlockCode, {
  TProps as TStoryBlockCodeProps,
} from '../StoryBlockCode/StoryBlockCode';

// styles
import './story-wrapper.scss';

type TProps = TStoryBlockCodeProps & {
  children: ReactNode;
  description: Array<string>;
  title: string;
};

const StoryComponent: FC<TProps> = ({
  children,
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
    <section className="StoryWrapper__content">{children}</section>
    <StoryBlockCode {...restProps} />
  </main>
);

export default StoryComponent;
