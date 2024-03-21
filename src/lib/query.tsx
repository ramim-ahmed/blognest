export const fetchArticles = async () => {
  const res = await fetch("https://dev.to/api/articles?per_page=10&top=10");
  const data = await res.json();
  return data;
};

export const fetchArticleById = async (id: number | string) => {
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await res.json();
  return data;
};
