import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import articles from './article-content';
import ArticleList from '../components/ArticleList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvoteSection from '../components/UpvoteSection';
const ArticlePage = () => {
  // const name = match.params.name;
  const { name } = useParams();
  // const article = articles.filter((item)=> item.name===name);
  const article = articles.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({});

  useEffect(()=>{
    const fetchData = async ()=> {
      const result = await fetch(`http://localhost:8000/api/articles/${name}` ).then((response)=> response.json());
      setArticleInfo(result);
    }
    fetchData();
  },[name])


  if (!article) {
    return (
      <>
        <NotFoundPage />
      </>
    );
  }
  return (
    <>
      <h1>{articleInfo.name}</h1>
      <UpvoteSection upvotes={articleInfo.upvotes} name={name} setArticleInfo={setArticleInfo}/>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
        <CommentsList  comments={articleInfo.comments}
        name={name} setArticleInfo={setArticleInfo}/>
      
      <section>
        <h3
          style={{
            borderBottom: '2px solid #111',
            paddingBottom: '25px',
            display: 'inline-block',
          }}
        >
          Other Articles
        </h3>
        <ArticleList
          articles={articles.filter((article) => article.name !== name)}
        />
      </section>
    </>
  );
};

export default ArticlePage;
