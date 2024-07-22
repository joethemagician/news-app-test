export default async function HeadlinesPage({ params }) {
  const countyCode = params.country;

  
  const articlesResponse = await fetch(`https://newsapi.org/v2/top-headlines?pageSize=5&country=${countyCode}&apiKey=${process.env.NEWS_API_KEY}`);
  const articlesResponseJson = await articlesResponse.json();

  const articles = articlesResponseJson.articles;

  return (
    <main>
      <p>Country Code: { countyCode }</p>
      <ul>
        {articles.map(article => (<li key={article.title}>{article.title}</li>))}
      </ul>
    </main>
  );


}
