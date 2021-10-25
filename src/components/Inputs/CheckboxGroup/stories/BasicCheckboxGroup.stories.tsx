import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../../Checkbox/Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import StoryComponent from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicCheckboxGroup } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  'Checkboxes allow the user to select one or more items from a set.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
  props: [
    {
      children: '',
    },
  ],
  imports: [
    {
      items: '{ Checkbox }',
      path: libraryName,
    },
  ],
};

export default {
  component: CheckboxGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components---UI?node-id=281%3A2',
    },
  },
  title: basicCheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Basic checkbox group"
  >
    <CheckboxGroup {...args}>
      <Checkbox label="Child 1" />
      <Checkbox label="Child 2" />
      <Checkbox label="Child 3" />
    </CheckboxGroup>
  </StoryComponent>
);

export const BasicCheckboxGroup = Template.bind({});

BasicCheckboxGroup.argTypes = {
  checked: {
    table: {
      disable: true,
    },
  },
  disabled: {
    table: {
      disable: true,
    },
  },
  forcedFocus: {
    table: {
      disable: true,
    },
  },
  forcedHover: {
    table: {
      disable: true,
    },
  },
};

BasicCheckboxGroup.args = {};
