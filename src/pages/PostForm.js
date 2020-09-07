import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import { useUtils } from "../hooks/useUtils.js";

import { postDate } from "../utils/helpers.js";

import Breadcrumbs from "../components/common/Breadcrumbs";
import Modal from "../components/Modal";

const PostForm = () => {
  const { _scrollLock } = useUtils();
  const history = useHistory();

  const [image, setImage] = useState(null);


  const [formPost, setFormPost] = useState({
    title: "",
    published: false,
    body: "",
    userId: null,
  });
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

   const formActionPage = "Create New Post";

  const handleShowErrorTite = isTitleEmpty ? (
    <p className="post-form-title-error">Title must not be empty.</p>
  ) : (
    ""
  );

  const handleUpdateField = (e) => {
    e.persist();
    const { id, value } = e.target;

    setFormPost((prevState) => {
      return {
        ...prevState,
        [e.target.id]:
          e.target.id === "published" ? e.target.checked : e.target.value,
      };
    });

    switch (id) {
      case "title":
        if (value) {
          setIsTitleEmpty(false);
        } else {
          setIsTitleEmpty(true);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    console.log("save post");
  };

  const handleCancelPost = (e) => {
    e.preventDefault();
    setIsShowModal(true);
    _scrollLock(true);
  };

  const handleModalClose = () => {
    _scrollLock(false);
    setIsShowModal(false);
  };

  const handleModalOk = () => {
    _scrollLock(false);
    setIsShowModal(false);
    history.push("/");
  };


  const fileInput = useRef(null)

  const handleClick = () => {
    fileInput.current.click();
  }


  const ImgUpload =({
    onChange,
    src,
  })=>{
    return(
      <label for="image-upload"  className="post-form-image-label" onClick={() => handleClick()}>
          UPLOAD IMAGE
        <input id="photo-upload" type="file" ref={fileInput}  onChange={onChange} style={{"display": "none"}}/>
      </label>
    );
  }

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImage(reader.result);
    }

    reader.readAsDataURL(file);
  }

  return (
    <div className="posts-form">
      <Modal
        onShow={isShowModal}
        text="Discard Changes?"
        onClose={handleModalClose}
        onOk={handleModalOk}
      />
      <Breadcrumbs currentPage={formActionPage} />

      <div className="u-container">
        <form className="post-form-inner" onSubmit={handleSubmitPost}>
          <div className="post-header post-form-header">
            <ul className="post-action-list post-form-action-list">
              <li className="post-action-item">
                <button
                  type="submit"
                  className="post-action-link post-form-action-button"
                >
                  Save Post
                </button>
              </li>
              <li className="post-action-item">
                <button onClick={handleCancelPost} className="post-action-link">
                  Cancel
                </button>
              </li>
            </ul>
          </div>
          <div className="post-body">
            <div className="post-form-body-top">
              <time dateTime={postDate()} className="post-created">
                {postDate()}
              </time>
              <div className="post-form-published">
                <input
                  type="checkbox"
                  id="published"
                  name="published"
                  className="post-form-published-checkbox"
                  value=''
                  defaultChecked={false}
                  onChange=''
                />
                <label
                  htmlFor="published"
                  className="post-form-published-label"
                >
                  Publish
                </label>
              </div>
            </div>
            <div
              className={
                (isTitleEmpty || true ) ? "post-form-title error" : "post-form-title"
              }
            >
              <textarea
                id="title"
                className="post-form-title-textarea"
                placeholder="Title"
                onChange={handleUpdateField}
                value={formPost.title}
              />
            </div>
            {handleShowErrorTite}

            <div
              className="post-form-image-wrapper"
              style={{ backgroundImage: `url(${image})` }}
            >

              <ImgUpload onChange={(e)=> photoUpload(e)} />


            </div>
            <div className="post-form-text-content">
              <textarea
                id="body"
                placeholder="Content"
                className="post-form-content-textarea"
                onChange={handleUpdateField}
                value={formPost.body}
              />
            </div>
          </div>
        </form>
        <div className="post-footer">
            comment section here
        </div>
        <br />
      </div>
    </div>
  );
};

export default PostForm;

