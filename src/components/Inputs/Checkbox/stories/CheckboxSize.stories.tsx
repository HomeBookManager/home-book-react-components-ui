import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../Checkbox';
import StoryComponent, {
  ContentGridFlow,
} from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { checkboxSize } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { Size } from '../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  'Use the <code>size</code> prop or customize the font size of the svg icons to change the size of the checkboxes.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
  props: [
    {
      attributes: [{ name: 'size', value: 'Size.small' }],
      children: '',
    },
    {
      children: '',
    },
    {
      attributes: [{ name: 'size', value: 'Size.large' }],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Label' },
        { name: 'size', value: 'Size.small' },
      ],
      children: '',
    },
    {
      attributes: [{ name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Label' },
        { name: 'size', value: 'Size.large' },
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
  title: checkboxSize,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxThreeColumns}
    description={description}
    title="Checkbox size"
  >
    {/* WITHOUT LABEL */}
    <Checkbox size={Size.small} {...args} />
    <Checkbox {...args} />
    <Checkbox size={Size.large} {...args} />

    {/* WITH LABEL */}
    <Checkbox label="Label" size={Size.small} {...args} />
    <Checkbox label="Label" {...args} />
    <Checkbox label="Label" size={Size.large} {...args} />
  </StoryComponent>
);

export const CheckboxSize = Template.bind({});

CheckboxSize.argTypes = {
  label: {
    table: {
      disable: true,
    },
  },
  size: {
    table: {
      disable: true,
    },
  },
};

CheckboxSize.args = {};
