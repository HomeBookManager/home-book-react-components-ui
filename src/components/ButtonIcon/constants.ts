// others

export const className = 'ButtonIcon';

export const error = `
  You have to pass history hook from react-router-dom
  const history = useHistory();
  <Button history={history}></Button>
`;

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
