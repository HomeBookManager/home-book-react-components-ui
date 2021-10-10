import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from './Button';

// others
import { BASIC_BUTTON } from '../../stories/constants';
import { Color, Variant } from './constants';

export default {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components-UI?node-id=4%3A2',
    },
  },
  title: BASIC_BUTTON,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <>
    <Button variant={Variant.default}>Button</Button>
    <Button variant={Variant.contained}>Button</Button>
    <Button variant={Variant.outlined}>Button</Button>
    <br />
    <Button color={Color.secondary} variant={Variant.default}>
      Button
    </Button>
    <Button color={Color.secondary} variant={Variant.contained}>
      Button
    </Button>
    <Button color={Color.secondary} variant={Variant.outlined}>
      Button
    </Button>
    <br />
    <Button color={Color.succes} variant={Variant.default}>
      Button
    </Button>
    <Button color={Color.succes} variant={Variant.contained}>
      Button
    </Button>
    <Button color={Color.succes} variant={Variant.outlined}>
      Button
    </Button>
    <br />

    <Button color={Color.warning} variant={Variant.default}>
      Button
    </Button>
    <Button color={Color.warning} variant={Variant.contained}>
      Button
    </Button>
    <Button color={Color.warning} variant={Variant.outlined}>
      Button
    </Button>
    <br />
    <Button color={Color.error} variant={Variant.default}>
      Button
    </Button>
    <Button color={Color.error} variant={Variant.contained}>
      Button
    </Button>
    <Button color={Color.error} variant={Variant.outlined}>
      Button
    </Button>
  </>
);

export const BasicButton = Template.bind({});
