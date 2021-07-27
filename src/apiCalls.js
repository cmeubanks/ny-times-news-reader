export const getArticles = async () => {
  const response = await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EDq2RLXPEAWgxjPV6FmKFToe7SwzuHyw");
  const data = await response.json();
  return data;
}
