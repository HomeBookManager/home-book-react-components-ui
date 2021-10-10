// others
import { TBlockCode } from 'stories/components/StoryBlockCode/types';

export const className = 'Button';

export enum Color {
  primary = 'primary',
  secondary = 'secondary',
  succes = 'success',
  warning = 'warning',
  error = 'error',
}

export enum Variant {
  default = 'default',
  contained = 'contained',
  outlined = 'outlined',
}

export const description =
  'The <code>Button</code> comes with three variants: text (default), contained, and outlined.';

export const blockCodeData: TBlockCode = {
  componentName: 'Button',
  data: [
    {
      attributes: [{ name: 'variant' }],
      children: Variant.default,
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.contained' }],
      children: Variant.contained,
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.outlined' }],
      children: Variant.outlined,
    },
  ],
};
