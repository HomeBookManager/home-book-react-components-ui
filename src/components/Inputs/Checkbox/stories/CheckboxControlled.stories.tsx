import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../Checkbox';
import StoryComponent from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { checkboxControlled } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can control the checkbox with the <code>checked</code> and <code>onChange</code> props:',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
  props: [
    {
      attributes: [
        { name: 'checked' },
        { name: 'onChange', value: `{() => alert('changed')}` },
      ],
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
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components---UI?node-id=281%3A2',
    },
  },
  title: checkboxControlled,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Checkbox controlled"
  >
    <Checkbox {...args} checked onChange={() => alert('changed')} />
  </StoryComponent>
);

export const CheckboxControlled = Template.bind({});

CheckboxControlled.argTypes = {
  checked: {
    table: {
      disable: true,
    },
  },
  onChange: {
    table: {
      disable: true,
    },
  },
};

CheckboxControlled.args = {};
