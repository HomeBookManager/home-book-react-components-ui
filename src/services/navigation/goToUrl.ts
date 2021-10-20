const goToUrl = (url: string, externalLink?: boolean): void => {
  if (externalLink) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
};

export default goToUrl;
