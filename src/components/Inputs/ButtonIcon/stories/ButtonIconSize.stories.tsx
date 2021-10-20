import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import ButtonIcon from '../ButtonIcon';
import StoryComponent from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { buttonIconSize } from '../../../../stories/constants';
// @ts-ignore
import { ReactComponent as Trash } from '../../../../stories/assets/icons/trash.svg';
import { libraryName } from '../../../../constants';
import { Size } from '../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  'For larger or smaller icon buttons, use the <code>size</code> prop.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonIcon',
  props: [
    {
      attributes: [{ name: 'size', value: 'Size.small' }],
      children: '&lt;Trash height="12" width="16" /&gt',
    },
    {
      children: '&lt;Trash height="18" width="21" /&gt',
    },
    {
      attributes: [{ name: 'size', value: 'Size.large' }],
      children: '&lt;Trash height="23" width="28" /&gt',
    },
  ],
  imports: [
    {
      items: '{ ButtonIcon, Size }',
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
  title: buttonIconSize,
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Button icon size"
  >
    <ButtonIcon size={Size.small} {...args}>
      <div>
        <Trash height="10" width="15" />
      </div>
    </ButtonIcon>
    <ButtonIcon {...args}>
      <div>
        <Trash height="18" width="21" />
      </div>
    </ButtonIcon>
    <ButtonIcon size={Size.large} {...args}>
      <div>
        <Trash height="28" width="35" />
      </div>
    </ButtonIcon>
  </StoryComponent>
);

export const ButtonIconSize = Template.bind({});

ButtonIconSize.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

ButtonIconSize.args = {};
