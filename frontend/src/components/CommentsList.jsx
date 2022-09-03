import React from 'react';
import AddCommentForm from './AddCommentForm';

const CommentsList = ({ comments,name,setArticleInfo }) => {
  return (
  <>
  <h3>Comments:</h3>
  {comments?.length===0? <p>No comments yet !!!</p> : comments?.map((comment, index)=> (
    <div className='comment' key={index}>
        <h4>{comment.userName}</h4>
        <p>{comment.comment}</p>
    </div>
  ))}
  <AddCommentForm name={name} setArticleInfo={setArticleInfo}/>
  </>
  );
};

export default CommentsList;
