import "./NewsList.scss";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import axios from "axios";

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=aea770ed6949490493b34741a14f63bb`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <div className="newsListBlock">대기 중...</div>;
  }
  if (!articles) {
    return null;
  }

  return (
    <div className="newsListBlock">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};
export default NewsList;
