export const async getArticles = (section) => {
  const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json`);
  const data = await response.json();
  return data;
}
