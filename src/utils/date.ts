export const parseDate = (dateString: string) =>
  new Date(dateString).toLocaleString(navigator.language, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
