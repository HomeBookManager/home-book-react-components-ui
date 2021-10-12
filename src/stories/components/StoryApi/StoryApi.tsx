import { FC } from 'react';

// components
import { TProps as TStoryBlockCodeProps } from '../StoryBlockCode/StoryBlockCode';
import StoryComponent from '../StoryComponent/StoryComponent';

// styles
import './story-api.scss';

type TProps = TStoryBlockCodeProps & {
  description?: Array<string>;
  title: string;
};

const StoryApi: FC<TProps> = ({ description = [], title, ...restProps }) => (
  <main className="StoryApi">
    <h1 className="StoryApi__title">{title}</h1>
    {description.map((description, key) => (
      <p
        className="StoryApi__description"
        dangerouslySetInnerHTML={{ __html: description }}
        key={key}
      />
    ))}
    <StoryComponent
      className="StoryApi__story-component"
      title="Import"
      {...restProps}
    ></StoryComponent>
  </main>
);

export default StoryApi;
