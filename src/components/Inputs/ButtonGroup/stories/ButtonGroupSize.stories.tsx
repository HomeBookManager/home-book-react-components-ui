import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent, {
  ContentGridFlow,
} from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { buttonGroupSize } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { Numbers } from '../../../../stories/components/StoryBlockCode/constants';
import { Size } from '../../Button/constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>size</code> prop can be used to control the appearance of the button group.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  props: [
    {
      attributes: [{ name: 'size', value: 'Size.small' }],
      children: Array.from(
        Array(3),
        (_, i) => `&lt;Button&gt${Numbers[i]}&lt;/Button&gt`
      ),
    },
    {
      children: Array.from(
        Array(3),
        (_, i) => `&lt;Button&gt${Numbers[i]}&lt;/Button&gt`
      ),
    },
    {
      attributes: [{ name: 'size', value: 'Size.large' }],
      children: Array.from(
        Array(3),
        (_, i) => `&lt;Button&gt${Numbers[i]}&lt;/Button&gt`
      ),
    },
  ],
  imports: [
    {
      items: '{ Button, ButtonGroup, Color }',
      path: libraryName,
    },
  ],
};

export default {
  component: ButtonGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components---UI?node-id=232%3A2',
    },
  },
  title: buttonGroupSize,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.row}
    description={description}
    title="Button group sizes"
  >
    {Object.keys(Size).map((size, key) => (
      // @ts-ignore
      <ButtonGroup size={size} key={key} {...args}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ))}
  </StoryComponent>
);

export const ButtonGroupSize = Template.bind({});

ButtonGroupSize.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

ButtonGroupSize.args = {};
