import React from 'react';
import ArticleList from '../components/ArticleList';
// import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticleListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articles}/>
    </>
  );
};

export default ArticleListPage;
