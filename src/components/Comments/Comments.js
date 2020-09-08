import React, {useState} from 'react'
import Comment from './Comment';
import {v4 as uuid } from 'uuid'
import './Comments.css';


const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  
  const [inputComment, setInputComment] = useState('')
  const changeHandler = evt=>{
    setInputComment(evt.target.value)
  }
  const submitHandler = evt=>{
    evt.preventDefault()
    console.log(inputComment)
    setInputComment(comments.push(
      {
        id: uuid(),
        username: 'dummy_user',
        text: inputComment
      }
    ))
    console.log(comments)
  }



  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(commentObj=>{
        return(
          <Comment
            key = {commentObj.id}
            comment = {commentObj}
          />
        )
      })
      }  

      {/* Stretch:  Add Comments */}
      <form className='comment-form' onSubmit={evt => 
        submitHandler(evt)
        }>
        <label>
          <input 
            className='input'
            type='text'
            placeholder='Add a comment...'
            onChange={evt => changeHandler(evt)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default Comments;
