import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../Button';
import StoryApi from '../../../stories/components/StoryApi/StoryApi';

// others
import { buttonApi } from '../../../stories/constants';
import { libraryName } from '../../../constants';
import { TStoryBlockCode } from '../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../stories/components/StoryPropsTable/StoryPropsTable';

const description = [
  'API documentation for the React Button component. Learn about the available props and the CSS API.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'children',
    type: 'node',
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
    name: 'endIcon',
    type: 'node',
    description: 'Element placed after the children.',
  },
  {
    name: 'forcedHover',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the hover will be active without user friction',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the button will take up the full width of its container.',
  },
  {
    name: 'history',
    type: 'History',
    description:
      'History has to be pass from <code>react-router-dom</code> library to works as a link',
  },
  {
    name: 'href',
    type: 'string',
    description:
      'The URL to link to when the button is clicked. If defined, <code>history.push(href)</code> will be call from <code>react-router-dom</code>.',
  },
  {
    name: 'onClick',
    type: '(event: MouseEvent<HTMLButtonElement>) => void',
    description: '<code>Function</code> to call action after the click button.',
  },
  {
    name: 'size',
    type: `'small'<br/>|&nbsp;'small'<br/>|&nbsp;'medium'<br/>|&nbsp;'large'<br/>|&nbsp;'string'`,
    defaultValue: `'medium'`,
    description:
      'The size of the component. <code>small</code> is equivalent to the dense button styling.',
  },
  {
    name: 'startIcon',
    type: 'node',
    description: 'Element placed before the children.',
  },
  {
    name: 'style',
    type: 'object',
    description: 'Override styles by object of styles',
  },
  {
    name: 'variant',
    type: `default'<br/>|&nbsp;'default'<br/>|&nbsp;'contained'<br/>|&nbsp;'outlined'<br/>|&nbsp;'string'`,
    defaultValue: 'default',
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
  component: Button,
  title: buttonApi,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Button API"
  />
);

export const ButtonAPI = Template.bind({});
