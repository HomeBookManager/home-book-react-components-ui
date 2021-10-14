import { FC } from 'react';

// components
import { TProps as TStoryBlockCodeProps } from '../StoryBlockCode/StoryBlockCode';
import StoryPropsTable, {
  TProps as TPropsStoryPropsTable,
} from '../StoryPropsTable/StoryPropsTable';
import StoryComponent from '../StoryComponent/StoryComponent';

// styles
import './story-api.scss';

type TProps = TStoryBlockCodeProps &
  TPropsStoryPropsTable & {
    description?: Array<string>;
    title: string;
  };

const StoryApi: FC<TProps> = ({ description = [], title, ...restProps }) => {
  const { tableBodyData } = restProps;

  return (
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
      <StoryPropsTable tableBodyData={tableBodyData} />
    </main>
  );
};

export default StoryApi;
