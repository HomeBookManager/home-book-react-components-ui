import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../Checkbox';
import StoryComponent, {
  ContentGridFlow,
} from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { checkboxLabel } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can provide a <code>label</code> to the <code>Checkbox</code> as a props.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
  props: [
    {
      attributes: [{ name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [{ name: 'forcedHover' }, { name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [{ name: 'forcedFocus' }, { name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [{ name: 'disabled' }, { name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [{ name: 'checked' }, { name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'forcedHover' },
        { name: 'label', value: 'Label' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'forcedFocus' },
        { name: 'label', value: 'Label' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'disabled' },
        { name: 'label', value: 'Label' },
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
  title: checkboxLabel,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxFourColumns}
    description={description}
    title="Checkbox label"
  >
    {/* UNCHECKED */}
    <Checkbox label="Label" {...args} />
    <Checkbox forcedHover label="Label" {...args} />
    <Checkbox forcedFocus label="Label" {...args} />
    <Checkbox disabled label="Label" {...args} />

    {/* CHECKED */}
    <Checkbox checked label="Label" {...args} />
    <Checkbox checked forcedHover label="Label" {...args} />
    <Checkbox checked forcedFocus label="Label" {...args} />
    <Checkbox checked disabled label="Label" {...args} />
  </StoryComponent>
);

export const CheckboxLabel = Template.bind({});

CheckboxLabel.argTypes = {
  label: {
    table: {
      disable: true,
    },
  },
};

CheckboxLabel.args = {};
