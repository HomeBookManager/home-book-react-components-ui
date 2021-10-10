import { ReactNode } from 'react';

export type TComponentAttributes = { name: string; value?: string };

export type TComponent = {
  attributes?: Array<TComponentAttributes>;
  children?: ReactNode | string;
};

export type TImport = {
  items: string;
  path: string;
};

export type TBlockCode = {
  components: Array<TComponent>;
  componentName: string;
  imports: Array<TImport>;
};
