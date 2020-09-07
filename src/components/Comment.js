import React from "react";

const Comment = ({ postId, userId, comments }) => {

  return (
    <div className="comment">
      <div className="u-container">
        <h3 className="comment-header">
            COMMENT
        </h3>
        <div className="comment-list"></div>

        <form className="comment-form" onSubmit="">
          <div className="comment-form-textarea-wrapper">
            <textarea
              id="text"
              className="comment-form-textarea"
              placeholder="Write comment"
              onChange=""
              value=""
            />
            </div>
            <div className="comment-form-footer">
              <button className="comment-button">SUBMIT</button>
            </div>
          </form>

      </div>
    </div>
  );

};

export default Comment;


