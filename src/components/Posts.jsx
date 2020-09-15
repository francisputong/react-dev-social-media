import React from "react";

import Post from "../components/Post";

const posts = [
  {
    id: "5f5c9d142de0ee1e14bcca3e",
    text: "Doggo the lazy quick brown fox jumped over",
    name: "Roseller",
    avatar:
      "//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445?s=200&r=pg&d=mm",
    likes: [],
    comments: [],
    date: "2020-09-12T10:04:04.935Z",
  },
  {
    id: "5f5c9d142de0ee1e14bcca3w",
    text: "Doydoy",
    name: "Teodorics",
    avatar:
      "//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445?s=200&r=pg&d=mm",
    likes: [],
    comments: [],
    date: "2020-08-12T10:04:04.935Z",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
