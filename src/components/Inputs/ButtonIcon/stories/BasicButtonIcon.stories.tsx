import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import ButtonIcon from '../ButtonIcon';
import StoryComponent from '../../../../stories/components/StoryComponent/StoryComponent';

// others
// @ts-ignore
import { ReactComponent as Trash } from '../../../../stories/assets/icons/trash.svg';
import { basicButtonIcon } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  'Icon buttons are commonly found in app bars and toolbars.',
  'Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonIcon',
  props: [
    {
      children: [{ componentName: 'Trash' }],
    },
    {
      attributes: [{ name: 'forcedHover' }],
      children: [{ componentName: 'Trash' }],
    },
    {
      attributes: [{ name: 'disabled' }],
      children: [{ componentName: 'Trash' }],
    },
  ],
  imports: [
    {
      items: '{ ButtonIcon }',
      path: libraryName,
    },
    {
      items: '{ ReactComponent as Trash }',
      path: './assets/icons/trash.svg',
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
      <div>
        <Trash />
      </div>
    </ButtonIcon>
    <ButtonIcon forcedHover {...args}>
      <div>
        <Trash />
      </div>
    </ButtonIcon>
    <ButtonIcon disabled {...args}>
      <div>
        <Trash />
      </div>
    </ButtonIcon>
  </StoryComponent>
);

export const BasicButtonIcon = Template.bind({});

BasicButtonIcon.argTypes = {
  disabled: {
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

BasicButtonIcon.args = {};
