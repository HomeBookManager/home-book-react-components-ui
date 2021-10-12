// others

export const className = 'Button';

export enum Color {
  primary = 'primary',
  secondary = 'secondary',
  succes = 'success',
  warning = 'warning',
  error = 'error',
}

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum Variant {
  default = 'default',
  contained = 'contained',
  outlined = 'outlined',
}

export const error = `
  You have to pass history hook from react-router-dom
  const history = useHistory();
  <Button history={history}></Button>
`;
