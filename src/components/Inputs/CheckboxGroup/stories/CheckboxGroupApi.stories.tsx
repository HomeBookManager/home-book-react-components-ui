import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import CheckboxGroup from '../CheckboxGroup';
import StoryApi from '../../../../stories/components/StoryApi/StoryApi';
import StoryBlockWarning from '../../../../stories/components/StoryBlockWarning/StoryBlockWarning';

// others
import { checkboxGroupAPI } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../stories/components/StoryPropsTable/StoryPropsTable';

const description = [
  'API documentation for the React CheckboxGroup component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'checked',
    type: 'bool',
    defaultValue: 'false',
    description: 'If true, the parent checkbox is <code>checked</code>.',
  },
  {
    name: 'checkedIcon',
    type: 'string',
    description: 'The icon to display when the component is checked.',
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
    name: 'forcedFocus',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the focus will be active without user friction.',
  },
  {
    name: 'forcedHover',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the hover will be active without user friction.',
  },
  {
    name: 'label',
    type: 'string',
    description:
      'Intended to describe a particular element associated with a form.',
  },
  {
    name: 'onChange',
    type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
    description:
      'function(event: React.ChangeEvent<HTMLInputElement>) => void event: The event source of the callback.',
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
    name: 'uncheckedIcon',
    type: 'string',
    description: 'The icon to display when the component is unchecked.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: '{ CheckboxGroup }',
      path: libraryName,
    },
  ],
};

export default {
  component: CheckboxGroup,
  title: checkboxGroupAPI,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="CheckboxGroup API"
  >
    <StoryBlockWarning>
      When you pass Checkbox to CheckboxGroup, CheckboxGroup pass some of props
      to Checkbox to control them & pass common props. If you use some custom
      wrapper, as main children for CheckboxGroup, you can do, but every
      Checkbox as children for wrapper can be passed single.
    </StoryBlockWarning>
  </StoryApi>
);

export const CheckboxGroupAPI = Template.bind({});
