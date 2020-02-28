export const parseDate = (dateString: string) => {
  let locale;
  // check if navigator is defined for gatsby production build to pass
  if (typeof window !== 'undefined') {
    locale = navigator.language;
  }
  return new Date(dateString).toLocaleString(locale, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};
