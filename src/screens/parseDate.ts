export const parseDate = (date: Date) => {
  // const formatter = new Intl.DateTimeFormat('ru-RU', {
  //   day: '2-digit',
  //   month: 'long',
  //   year: 'numeric'
  // });

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours}:${minutes}`;
  return time;
};
