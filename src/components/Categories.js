import "./Categories.scss";
import styled, { css } from "styled-components";
const categories = [
  {
    name: "all",
    test: "전체보기",
  },
  {
    name: "business",
    test: "비즈니스",
  },
  {
    name: "entertainment",
    test: "엔터테인먼트",
  },
  {
    name: "health",
    test: "건강",
  },
  {
    name: "science",
    test: "과학",
  },
  {
    name: "sports",
    test: "스포츠",
  },
  {
    name: "technology",
    test: "기술",
  },
];
const Category = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #234e79;
  }
  ${(props) =>
    /* 카테고리 선택 시 active 스타일 적용 */
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <div className="categoriesBlock">
      {categories.map((c) => (
        <Category
          key={c.name}
          active={c.name === category}
          onClick={() => onSelect(c.name)}
        >
          {c.test}
        </Category>
      ))}
    </div>
  );
};
export default Categories;
