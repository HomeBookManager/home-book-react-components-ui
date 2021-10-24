import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../Checkbox';
import StoryComponent from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import Bookmark from '../../../../stories/assets/icons/bookmark.svg';
import BokmarkOutlined from '../../../../stories/assets/icons/bookmark-outlined.svg';
import Heart from '../../../../stories/assets/icons/heart.svg';
import HeartOutlined from '../../../../stories/assets/icons/heart-outlined.svg';
import { checkboxIcon } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can overwrite unchecked icon & checked icon. There is no support for color but render as svg.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
  props: [
    {
      attributes: [
        { name: 'checkIcon', value: 'Heart' },
        { name: 'uncheckIcon', value: 'HeartOutlined' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checkIcon', value: 'Bookmark' },
        { name: 'uncheckIcon', value: 'BokmarkOutlined' },
      ],
      children: '',
    },
  ],
  imports: [
    {
      items: '{ Checkbox }',
      path: libraryName,
    },
    {
      items: 'Bookmark',
      path: './assets/icons/bookmark.svg',
    },
    {
      items: 'BokmarkOutlined',
      path: './assets/icons/bookmark-outlined.svg',
    },
    {
      items: 'Heart',
      path: './assets/icons/heart.svg',
    },
    {
      items: 'HeartOutlined',
      path: './assets/icons/heart-outlined.svg',
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
  title: checkboxIcon,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Checkbox icon"
  >
    <Checkbox checkIcon={Heart} uncheckIcon={HeartOutlined} {...args} />
    <Checkbox checkIcon={Bookmark} uncheckIcon={BokmarkOutlined} {...args} />
  </StoryComponent>
);

export const CheckboxIcon = Template.bind({});

CheckboxIcon.argTypes = {
  checkIcon: {
    table: {
      disable: true,
    },
  },
  uncheckIcon: {
    table: {
      disable: true,
    },
  },
};

CheckboxIcon.args = {};
