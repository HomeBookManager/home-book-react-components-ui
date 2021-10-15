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
  'Icon buttons are commonly found in app bars and toolbars.',
  'Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  props: [
    {
      children: '&lt;img alt="icon" src={Trash}&gt',
    },
    {
      attributes: [{ name: 'forcedHover' }],
      children: '&lt;img alt="icon" src={Trash}&gt',
    },
    {
      children: '&lt;img alt="icon" src={Trash}&gt',
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
    <ButtonIcon forcedHover {...args}>
      <img alt="icon" src={Trash} />
    </ButtonIcon>
    <ButtonIcon disabled {...args}>
      <img alt="icon" src={Trash} />
    </ButtonIcon>
  </StoryComponent>
);

export const BasicButtonIcon = Template.bind({});

BasicButtonIcon.argTypes = {};

BasicButtonIcon.args = {};
