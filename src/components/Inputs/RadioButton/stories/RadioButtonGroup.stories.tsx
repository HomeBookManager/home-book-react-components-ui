import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import RadioButton from '../RadioButton';
import StoryComponent from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { radioButtonGroup } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  '<code>CheckboxGroup</code> is a helpful wrapper used to group selection control components.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'RadioButton',
  props: [],
  imports: [
    {
      items: '{ RadioButton }',
      path: libraryName,
    },
  ],
};

export default {
  component: RadioButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components---UI?node-id=318%3A183',
    },
  },
  title: radioButtonGroup,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Radio button group"
  >
    <RadioButton />
  </StoryComponent>
);

export const RadioButtonGroup = Template.bind({});

RadioButtonGroup.argTypes = {};

RadioButtonGroup.args = {};
