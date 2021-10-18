import { History } from 'history';

// services
import goToUrl from './goToUrl';

const handleNavigation = (
  href: string,
  externalLink?: boolean,
  history?: History
) => {
  if (history) {
    history.push(href);
  } else {
    goToUrl(href, externalLink);
  }
};

export default handleNavigation;
