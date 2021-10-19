import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent, {
  ContentGridFlow,
} from '../../../stories/components/StoryComponent/StoryComponent';

// others
import { buttonGroupColor } from '../../../stories/constants';
import { Color } from '../../Button/constants';
import { libraryName } from '../../../constants';
import { Numbers } from '../../../stories/components/StoryBlockCode/constants';
import { TStoryBlockCode } from '../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>color</code> prop can be used to control the appearance of the button group.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  props: [
    {
      children: Array.from(
        Array(3),
        (_, i) => `&lt;Button&gt${Numbers[i]}&lt;/Button&gt`
      ),
    },
    {
      attributes: [{ name: 'color', value: 'Color.secondary' }],
      children: Array.from(
        Array(3),
        (_, i) => `&lt;Button&gt${Numbers[i]}&lt;/Button&gt`
      ),
    },
    {
      attributes: [{ name: 'color', value: 'Color.success' }],
      children: Array.from(
        Array(3),
        (_, i) => `&lt;Button&gt${Numbers[i]}&lt;/Button&gt`
      ),
    },
    {
      attributes: [{ name: 'color', value: 'Color.warning' }],
      children: Array.from(
        Array(3),
        (_, i) => `&lt;Button&gt${Numbers[i]}&lt;/Button&gt`
      ),
    },
    {
      attributes: [{ name: 'color', value: 'Color.error' }],
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
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components-UI?node-id=152%3A2',
    },
  },
  title: buttonGroupColor,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.row}
    description={description}
    title="Button group colors"
  >
    {Object.keys(Color).map((color, key) => (
      // @ts-ignore
      <ButtonGroup color={color} key={key} {...args}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ))}
  </StoryComponent>
);

export const ButtonGroupColor = Template.bind({});

ButtonGroupColor.argTypes = {
  color: {
    table: {
      disable: true,
    },
  },
};

ButtonGroupColor.args = {};
