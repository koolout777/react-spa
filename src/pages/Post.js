import React, {} from "react";

import { Link } from "react-router-dom";

import Comment from "../components/Comment";
import Breadcrumbs from "../components/common/Breadcrumbs";

import { postDate } from "../utils/helpers.js";

const Post = () => {

  const post = {
    title: "Title here",
    slug: "slug-here",
    imageUrl: "https://loremflickr.com/1000/1000",
    createdAt: "2020.08.30",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

  return (
    <div className="post">
      <div>
        <Breadcrumbs
          currentPage={post.title}
          currentPageUrl={"/posts/" + post.slug}
        />
        <div className="u-container">
          <div className="post-header">
            <ul className="post-action-list">
              <li className="post-action-item">
                <Link to={"/post/slug-here/edit"} className="post-action-link">
                    Edit Post
                </Link>
              </li>
            </ul>
          </div>
          <div className="post-body">
            <time
              dateTime={postDate(post.createdAt)}
              className="post-created"
            >
              {postDate(post.createdAt)}
            </time>
            <h1 className="post-title">{post.title}</h1>
            <div
              className="post-image"
              style={{ backgroundImage: `url(${post.imageUrl})` }}
            />
            <div className="post-text">{post.body}</div>
          </div>

          <Comment
            postId={"slug-here"}
            userId={"1232"}
            comments={"asd"}
          />

        </div>
      </div>
    </div>
  );
};

export default Post;
