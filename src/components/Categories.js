import "./Categories.scss";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
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
const Category = styled(NavLink)`
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
  &.active {
    font-weigth: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <div className="categoriesBlock">
      {categories.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={c.name === "all" ? "/" : `/${c.name}`}
        >
          {c.test}
        </Category>
      ))}
    </div>
  );
};
export default Categories;
