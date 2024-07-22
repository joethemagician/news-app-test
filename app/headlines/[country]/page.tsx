interface ArticlesResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

const countryCodes = {
  gb: "United Kingdom",
  us: "United States",
  fr: "France",
  au: "Australia",
  in: "India",
};

export default async function HeadlinesPage({ params }) {

  const countryCode = params.country;
  const articlesResponse = await fetch(`https://newsapi.org/v2/top-headlines?pageSize=5&country=${countryCode}&apiKey=${process.env.NEWS_API_KEY}`);
  const articlesResponseJson = await articlesResponse.json();
  const articles: Article[] = articlesResponseJson.articles;
  
  return (
    <>
        <h2 className="text-lg font-bold mb-3">{ countryCodes[countryCode] }</h2>
        <ul className="ml-5 list-decimal">
          {articles.map(article => (<li className="mb-1" key={article.title}>{article.title}</li>))}
        </ul>
    </>
  );
}
