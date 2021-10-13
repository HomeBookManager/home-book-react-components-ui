import { ReactNode } from 'react';

export type TComponentAttributes = { name: string; value?: string };

export type TProps = {
  attributes?: Array<TComponentAttributes>;
  children?: ReactNode | string;
};

export type TImport = {
  items: string;
  path: string;
};

export type TStoryBlockCode = {
  props?: Array<TProps>;
  componentName?: string;
  imports: Array<TImport>;
};
