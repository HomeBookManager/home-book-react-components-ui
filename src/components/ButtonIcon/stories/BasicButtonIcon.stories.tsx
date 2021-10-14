import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import ButtonIcon from '../ButtonIcon';
import StoryComponent from '../../../stories/components/StoryComponent/StoryComponent';

// others
import Trash from '../../../stories/assets/icons/trash.svg';
import { basicButtonIcon } from '../../../stories/constants';
import { libraryName } from '../../../constants';
import { TStoryBlockCode } from '../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>Button</code> comes with three variants: text, contained, and outlined.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  props: [
    {
      children: 's',
    },
    {
      children: 's',
    },
    {
      children: 's',
    },
  ],
  imports: [
    {
      items: '{ ButtonIcon }',
      path: libraryName,
    },
  ],
};

export default {
  component: ButtonIcon,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components-UI?node-id=152%3A2',
    },
  },
  title: basicButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Basic button icon"
  >
    <ButtonIcon {...args}>
      <img alt="icon" src={Trash} />
    </ButtonIcon>
  </StoryComponent>
);

export const BasicButtonIcon = Template.bind({});

BasicButtonIcon.argTypes = {};

BasicButtonIcon.args = {};
