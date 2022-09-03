import React, { useState } from 'react';

const AddCommentForm = ({ name, setArticleInfo }) => {
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');

  const handleComment = async () => {
    const result = await fetch(`/api/articles/${name}/add-comment`, {
      method: 'post',
      body: JSON.stringify({ userName, comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
    setArticleInfo(result);
    setUserName('');
    setComment('');
  };
  return (
    <div id="add-comment-form">
      <h3>Add a comment</h3>
      <label htmlFor="">
        Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Comment:
        <textarea
          name=""
          id=""
          cols="50"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </label>
      <button onClick={() => handleComment()}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
