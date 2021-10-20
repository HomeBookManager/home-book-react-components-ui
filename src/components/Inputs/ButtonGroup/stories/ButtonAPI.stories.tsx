import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import ButtonGroup from '../ButtonGroup';
import StoryApi from '../../../../stories/components/StoryApi/StoryApi';

// others
import { buttonGroupAPI } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../stories/components/StoryPropsTable/StoryPropsTable';

const description = [
  'API documentation for the React Button Group component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'children',
    type: 'ReactElement | Array<ReactElement>',
    description: 'The content of the component.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Override or extend the styles applied to the component.',
  },
  {
    name: 'color',
    type: `'primary'<br/>|&nbsp;'primary'<br/>|&nbsp;'secondary'<br/>|&nbsp;'success'<br/>|&nbsp;'warning'<br/>|&nbsp;'error'<br/>|&nbsp;'string'`,
    defaultValue: `'primary'`,
    description: `The color of the component. It doesn't supports those theme colors that make sense for this component.`,
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If <code>true</code>, the component is disabled.',
  },
  {
    name: 'disableRippleEffect',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If <code>true</code>, the ripple effect is disabled.',
  },
  {
    name: 'forcedHover',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the hover will be active without user friction.',
  },
  {
    name: 'orientation',
    type: `'horizontal'<br/>|&nbsp;'vertical'`,
    defaultValue: `'horizontal'`,
    description: 'The component orientation (layout flow direction).',
  },
  {
    name: 'size',
    type: `'small'<br/>|&nbsp;'small'<br/>|&nbsp;'medium'<br/>|&nbsp;'large'<br/>|&nbsp;'string'`,
    defaultValue: `'medium'`,
    description:
      'The size of the component. <code>small</code> is equivalent to the dense button styling.',
  },
  {
    name: 'style',
    type: 'object',
    description: 'Override styles by object of styles.',
  },
  {
    name: 'variant',
    type: `text'<br/>|&nbsp;'text'<br/>|&nbsp;'contained'<br/>|&nbsp;'outlined'<br/>|&nbsp;'string'`,
    defaultValue: 'text',
    description: 'The variant to use.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: '{ Button }',
      path: libraryName,
    },
  ],
};

export default {
  component: ButtonGroup,
  title: buttonGroupAPI,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Button Group API"
  />
);

export const ButtonGroupAPI = Template.bind({});
