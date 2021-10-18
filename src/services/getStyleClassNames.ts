const getStyleClassNames = (classNames: Array<string>): string =>
  classNames.filter((className) => className).join(' ');

export default getStyleClassNames;
