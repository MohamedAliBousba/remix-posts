import React from "react";
import { useLoaderData, Link } from "remix";

export const loader = () => {
  return {
    posts: [
      { id: 1, title: "Post 1", body: "Lorem ipsum dolor sit amet." },
      { id: 2, title: "Post 2", body: "Lorem ipsum dolor sit amet." },
      { id: 3, title: "Post 3", body: "Lorem ipsum dolor sit amet." },
      { id: 4, title: "Post 4", body: "Lorem ipsum dolor sit amet." },
      { id: 5, title: "Post 5", body: "Lorem ipsum dolor sit amet." }
    ]
  };
};

const Posts = () => {
  const { posts } = useLoaderData();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Posts</h1>
        <Link to="/posts/new" className="btn btn-primary">
          New Post
        </Link>
      </div>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
