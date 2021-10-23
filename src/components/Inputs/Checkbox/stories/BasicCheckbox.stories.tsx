import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../Checkbox';
import StoryComponent from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicCheckbox } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>Button</code> comes with three variants: text, contained, and outlined.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
  props: [],
  imports: [
    {
      items: '{ Checkbox }',
      path: libraryName,
    },
  ],
};

export default {
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components---UI?node-id=281%3A2',
    },
  },
  title: basicCheckbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Basic checkbox"
  >
    <Checkbox {...args} />
  </StoryComponent>
);

export const BasicCheckbox = Template.bind({});

BasicCheckbox.argTypes = {};

BasicCheckbox.args = {};
