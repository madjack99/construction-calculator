export const fetchData = (url: string) => {
  return fetch(url).then((res) => res.json());
};
