export const redirectURL = url => {
  const isValidURL = 'url' || 'url/movies';
  if (!isValidURL(url)) {
    const baseUrl = window.location.href.split('?')[0];
    window.location.replace(baseUrl);
  }
};
