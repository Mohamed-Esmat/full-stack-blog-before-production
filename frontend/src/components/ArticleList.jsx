import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({articles}) => {
  return (
    <>
      {articles.map((article, index) => (
        <Link
          className="article-list-item"
          key={article.name}
          to={`/article/${article.name}`}
        >
          <h4>{article.title}</h4>
          <p>{article.content[0].substring(0, 150)} .............</p>
        </Link>
      ))}
    </>
  );
};

export default ArticleList;
