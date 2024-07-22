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

export default async function HeadlinesPage({ params }) {
  // WIP - using mock data to prevent using up API requests
  const articlesResponseJson: ArticlesResponse = {
    "status": "ok",
    "totalResults": 36,
    "articles": [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Press TV",
            "title": "Yemen strikes Israeli targets in Eilat with ballistic missiles - Press TV",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiWGh0dHBzOi8vcHJlc3N0di5pci9EZXRhaWwvMjAyNC8wNy8yMS83Mjk3NTUvWWVtZW5pLWFybWVkLWZvcmNlcy1taXNzaWxlcy1kcm9uZXMtUmVkLVNlYS3SAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-07-21T06:37:18Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Thom Poole, Sophie Tanno, Eyad Kourdi, Adam Pourahmadi, Andrew Carey, Lauren Izso, Hira Humayun, Andrew Raine",
            "title": "At least 3 killed and 87 injured, Houthis say, as Israeli airstrikes hit Yemen day after Tel Aviv drone attack - CNN",
            "description": "At least three people were killed and scores more injured in Israeli airstrikes on a Yemeni port, Houthi rebels have said, a day after the Iran-backed group claimed a deadly attack on the Israeli city of Tel Aviv.",
            "url": "https://www.cnn.com/2024/07/20/middleeast/yemen-israel-strikes-hodeidah-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24202796883924.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-07-21T06:26:07Z",
            "content": "At least three people were killed and scores more injured in Israeli airstrikes on a Yemeni port, Houthi rebels have said, a day after the Iran-backed group claimed a deadly attack on the Israeli cit… [+7772 chars]"
        },
    ]
  };

  const countryCodes = {
    gb: "United Kingdom",
    us: "United States",
    fr: "France",
    au: "Australia",
    in: "India",
  };

  const countryCode = params.country;
  // const articlesResponse = await fetch(`https://newsapi.org/v2/top-headlines?pageSize=5&country=${countryCode}&apiKey=${process.env.NEWS_API_KEY}`);
  // const articlesResponseJson = await articlesResponse.json();
  const articles: Article[] = articlesResponseJson.articles;
  
  return (
    <main>
      <div className="p-10 bg-sky-400">
        <h1 className="font-mono text-lg"><a href="/">News Headlines</a></h1>
      </div>
      <div className="px-10 pt-5 pb-20 bg-gray-200">
        <h2 className="text-lg mb-3">{ countryCodes[countryCode] }</h2>
        <ul className="ml-5 list-decimal">
          {articles.map(article => (<li key={article.title}>{article.title}</li>))}
        </ul>
      </div>
    </main>
  );
}
