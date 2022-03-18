import "./NewsItem.scss";
const NewsItem = ({ article }) => {
  //각 뉴스 정보를 보여 주는 컴포넌트
  const { title, description, url, urlToImage } = article;
  return (
    <div className="newsItemBlock">
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
          <p>{description}</p>
        </h2>
      </div>
    </div>
  );
};
export default NewsItem;
