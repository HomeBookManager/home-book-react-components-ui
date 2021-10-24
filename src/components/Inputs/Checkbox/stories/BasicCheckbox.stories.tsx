import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../Checkbox';
import StoryComponent, {
  ContentGridFlow,
} from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicCheckbox } from '../../../../stories/constants';
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
    {
      attributes: [{ name: 'forcedHover' }],
      children: '',
    },
    {
      attributes: [{ name: 'forcedFocus' }],
      children: '',
    },
    {
      attributes: [{ name: 'disabled' }],
      children: '',
    },
    {
      attributes: [{ name: 'checked' }],
      children: '',
    },
    {
      attributes: [{ name: 'checked' }, { name: 'forcedHover' }],
      children: '',
    },
    {
      attributes: [{ name: 'checked' }, { name: 'forcedFocus' }],
      children: '',
    },
    {
      attributes: [{ name: 'checked' }, { name: 'disabled' }],
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
  title: basicCheckbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxFourColumns}
    description={description}
    title="Basic checkbox"
  >
    {/* UNCHECKED */}
    <Checkbox {...args} />
    <Checkbox forcedHover {...args} />
    <Checkbox forcedFocus {...args} />
    <Checkbox disabled {...args} />

    {/* CHECKED */}
    <Checkbox checked {...args} />
    <Checkbox checked forcedHover {...args} />
    <Checkbox checked forcedFocus {...args} />
    <Checkbox checked disabled {...args} />
  </StoryComponent>
);

export const BasicCheckbox = Template.bind({});

BasicCheckbox.argTypes = {
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

BasicCheckbox.args = {};
