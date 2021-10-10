import { ReactNode } from 'react';

export type TBlockCodeAttributes = { name: string; value?: string };

export type TBlockCodeData = {
  attributes?: Array<TBlockCodeAttributes>;
  children?: ReactNode | string;
};

export type TBlockCode = {
  data: Array<TBlockCodeData>;
  componentName: string;
};
