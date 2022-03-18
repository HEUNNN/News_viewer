import { useParams } from "react-router-dom";
import NewsList from "../components/NewsList";
import Categories from "../components/Categories";

const NewsPage = () => {
  const params = useParams();
  //카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = params.category || "all";

  return (
    <div>
      {/* App.js 대신 NewsPage를 사용하여 카테고리와 뉴스 리스트 컴포넌트를 렌더링 한다. */}
      <Categories />
      <NewsList category={category} />
    </div>
  );
};
export default NewsPage;
