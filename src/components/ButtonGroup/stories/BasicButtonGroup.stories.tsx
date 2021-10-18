import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button, { TProps as TButtonProps } from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent from '../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicButtonGroup } from '../../../stories/constants';
import { libraryName } from '../../../constants';
import { TStoryBlockCode } from '../../../stories/components/StoryBlockCode/types';

const description = [
  'The ButtonGroup component can be used to group related buttons.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonIcon',
  props: [
    {
      children: '&lt;Trash /&gt',
    },
    {
      attributes: [{ name: 'forcedHover' }],
      children: '&lt;Trash /&gt',
    },
    {
      children: '&lt;Trash /&gt',
    },
  ],
  imports: [
    {
      items: '{ ButtonGroup }',
      path: libraryName,
    },
  ],
};

export default {
  component: ButtonGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components-UI?node-id=152%3A2',
    },
  },
  title: basicButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<
  typeof ButtonGroup & Pick<TButtonProps, 'color'>
> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Basic button group"
  >
    <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </StoryComponent>
);

export const BasicButtonGroup = Template.bind({});

BasicButtonGroup.argTypes = {};

BasicButtonGroup.args = {};
