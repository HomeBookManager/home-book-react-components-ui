import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import ButtonIcon from '../ButtonIcon';
import StoryApi from '../../../stories/components/StoryApi/StoryApi';

// others
import { buttonIconApi } from '../../../stories/constants';
import { libraryName } from '../../../constants';
import { TStoryBlockCode } from '../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../stories/components/StoryPropsTable/StoryPropsTable';

const description = [
  'API documentation for the React Button Icon component. Learn about the available props.',
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
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If <code>true</code>, the component is disabled.',
  },
  {
    name: 'disablePulseEffect',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If <code>true</code>, the pulse effect is disabled.',
  },
  {
    name: 'forcedHover',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the hover will be active without user friction',
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
    name: 'style',
    type: 'object',
    description: 'Override styles by object of styles',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: '{ ButtonIcon }',
      path: libraryName,
    },
  ],
};

export default {
  component: ButtonIcon,
  title: buttonIconApi,
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Button Icon API"
  />
);

export const ButtonIconAPI = Template.bind({});
