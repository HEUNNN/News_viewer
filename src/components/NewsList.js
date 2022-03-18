import "./NewsList.scss";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsList = ({ category }) => {
  const [loading, resolved, error] = usePromise(() => {
    //promiseCreator func
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=aea770ed6949490493b34741a14f63bb`
    );
    //return 값이 resolvedValue에 들어간다.
  }, [category]);

  if (loading) {
    return <div className="newsListBlock">대기 중...</div>;
  }
  if (!resolved) {
    return null;
  }
  if (error) {
    return <div className="NewsListBlock">에러 발생!</div>;
  }
  const articles = resolved.data.articles;
  //const { articles } = response.data; //비구조화 할당
  return (
    <div className="newsListBlock">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};
export default NewsList;
