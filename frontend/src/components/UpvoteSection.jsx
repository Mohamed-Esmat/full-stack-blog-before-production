import React from 'react';

const UpvoteSection = ({ upvotes, name, setArticleInfo }) => {
  const handleUpvote = async () => {
    const result = await fetch(`/api/articles/${name}/upvote`, {
      method: 'post',
    }).then((response) => response.json());
    setArticleInfo(result);
  };

  return (
    <div id="upvotes-section">
      <button onClick={handleUpvote}>Add Upvote</button>
      <p>
        {upvotes > 0
          ? `This post has been upvoted ${upvotes} times`
          : 'This post has No upvotes Yet!!!'}
      </p>
    </div>
  );
};

export default UpvoteSection;
