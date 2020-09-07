import React from 'react';

import Carousel from "../components/Carousel"
import Posts from "../components/Posts";

const Home = () => {

  const carouselPosts = {
    posts: [
      {
        id: 1,
        slug: "Title-1",
        imageUrl: "https://loremflickr.com/1000/1000",
        title: "How to write highly readable React code — 10 coding style tips.",
        createdAt: "2020.07.03",
        comments: [ { comment: "Sample comment"} ]
      },

      {
        id: 2,
        slug: "Title-2",
        imageUrl: "http://placekitten.com/g/1000",
        title: "Your so high readable Smoke code",
        createdAt: "2020.07.04",
        comments: []
      },
      {
        id: 3,
        slug: "Title-3",
        imageUrl: "https://loremflickr.com/1000/1000",
        title: "Your so high readable Smoke code",
        createdAt: "2020.07.04",
        comments: []
      }
    ]
  };

  const articleItem = {
    articleData: [
      {
        id: 1,
        slug: "Title-1",
        imageUrl: "https://loremflickr.com/1000/666",
        title: "How to write highly readable React code — 10 coding style tips.",
        createdAt: "2020.07.03",
        comments: [ { comment: "Sample comment"} ]
      },

      {
        id: 2,
        slug: "Title-2",
        imageUrl: "http://placekitten.com/g/666",
        title: "Your so high readable Smoke code",
        createdAt: "2020.07.04",
        comments: []
      },
      {
        id: 3,
        slug: "Title-3",
        imageUrl: "https://loremflickr.com/1000/666",
        title: "Your so high readable Smoke code",
        createdAt: "2020.07.04",
        comments: []
      },
      {
        id: 4,
        slug: "Title-1",
        imageUrl: "https://loremflickr.com/1000/666",
        title: "How to write highly readable React code — 10 coding style tips.",
        createdAt: "2020.07.03",
        comments: [ { comment: "Sample comment"} ]
      },

      {
        id: 5,
        slug: "Title-2",
        imageUrl: "http://placekitten.com/g/666",
        title: "Your so high readable Smoke code",
        createdAt: "2020.07.04",
        comments: []
      },
      {
        id: 6,
        slug: "Title-3",
        imageUrl: "https://loremflickr.com/1000/666",
        title: "Your so high readable Smoke code",
        createdAt: "2020.07.04",
        comments: []
      },
      {
        id: 7,
        slug: "Title-1",
        imageUrl: "https://loremflickr.com/1000/666",
        title: "How to write highly readable React code — 10 coding style tips.",
        createdAt: "2020.07.03",
        comments: [ { comment: "Sample comment"} ]
      },

      {
        id: 8,
        slug: "Title-2",
        imageUrl: "http://placekitten.com/g/666",
        title: "Your so high readable Smoke code",
        createdAt: "2020.07.04",
        comments: []
      },
      {
        id: 9,
        slug: "Title-3",
        imageUrl: "https://loremflickr.com/1000/666",
        title: "Your so high readable Smoke code",
        createdAt: "2020.07.04",
        comments: []
      }
    ]
  };

  return (
    <div className="top">
        <Carousel carouselPosts={carouselPosts} />
        <Posts postItems={articleItem.articleData} />
    </div>
  );
}
export default Home;
