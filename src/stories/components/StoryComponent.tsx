import { FC, ReactNode } from 'react';

// styles
import './story-wrapper.scss';

type TProps = {
  children: ReactNode;
  description: string;
  title: string;
};

const StoryComponent: FC<TProps> = ({ children, description, title }) => (
  <main className="StoryWrapper">
    <h2 className="StoryWrapper__title">{title}</h2>
    <p
      className="StoryWrapper__description"
      dangerouslySetInnerHTML={{ __html: description }}
    />
    <section className="StoryWrapper__content">{children}</section>
  </main>
);

export default StoryComponent;
