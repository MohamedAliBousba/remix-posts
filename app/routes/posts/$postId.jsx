import React from "react";
import { useParams } from "remix";

const Post = () => {
  const params = useParams();

  return (
    <div>
      <h1>Post: {params.postId}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        veniam eum, eos eius in consequatur reprehenderit facilis provident
        molestias libero, iure autem. A, possimus! Earum neque laudantium quasi,
        porro perspiciatis explicabo quod quam culpa deserunt atque a veniam ad
        iste suscipit nisi perferendis asperiores tempore non soluta? Provident,
        maiores quam.
      </p>
    </div>
  );
};

export default Post;
