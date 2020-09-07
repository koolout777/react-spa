import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { postDate, titleExcerpt } from "../utils/helpers.js";
const postsPerPage = 3; 
const arrayForHoldingPosts = [];

const Posts = ({ postItems }) => {

  const [postsToShow, setPostsToShow] = useState([]);
  const [count, setCount] = useState(1);

  const loopThroughPosts = (count) => {
    for (
      let i = count * postsPerPage - postsPerPage;
      i < postsPerPage * count;
      i++
    ) {
      if (postItems[i] !== undefined) {
        arrayForHoldingPosts.push(postItems[i]);
      }
    }
    setPostsToShow(arrayForHoldingPosts);
    
  };

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  }, []);
  const handleShowMorePosts = () => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  };
  

  useEffect(() => {
    console.log(postItems);
  },[postItems]);

  return (
    <section className="posts">
      <div className="u-container">

        <div className="posts-header">
          <h1 className="posts-title">NEWS</h1>
        </div>

        <div className="posts-content">
          <div className="posts-body">
            <ul className="posts-list">
                {postItems && postItems.map((post, i) => {
                  return (
                    <li className="posts-item" key={i}>
                      <Link to={"/posts/" + post.slug} className="posts-link">
                        <div className="posts-image-wrapper">
                          <div
                            className="posts-image"
                            style={{ backgroundImage: `url(${post.imageUrl})` }}
                          />
                          </div>
                          <div className="posts-item-header">
                            <time
                              dateTime={postDate(post.createdAt)}
                              className="posts-created"
                            >
                                {postDate(post.createdAt)}
                          </time>
                          <div className="posts-comments">
                              {post.comments.length}
                          </div>
                        </div>
                        <p className="posts-text">{titleExcerpt(post.title)}</p>
                      </Link>
                    </li>
                  );
                })}
            </ul>
        </div>

        <div className="posts-footer">
          <button className="posts-loadmore-button" >
              LOAD MORE
          </button>
        </div>

      </div>
    </div>
   </section>
  );
};
export default Posts;
