import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../Button';
import StoryApi from '../../../stories/components/StoryApi/StoryApi';

// others
import { buttonApi } from '../../../stories/constants';
import { libraryName } from '../../../constants';
import { TStoryBlockCode } from '../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../stories/components/StoryPropsTable/StoryPropsTable';

const description = [
  'API documentation for the React Button component. Learn about the available props and the CSS API.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'children',
    type: 'node',
    description: 'The content of the component.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: '{ Button }',
      path: libraryName,
    },
  ],
};

export default {
  component: Button,
  title: buttonApi,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Button API"
  />
);

export const ButtonApi = Template.bind({});
