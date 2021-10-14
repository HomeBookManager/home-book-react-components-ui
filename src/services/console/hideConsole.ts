export enum Console {
  log = 'log',
  warning = 'warning',
  error = 'error',
}

const hideConsole = (consoleType: Console) => {
  /* eslint-disable */
  console[consoleType] = () => {};
};

export default hideConsole;
