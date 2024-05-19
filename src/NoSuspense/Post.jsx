import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Comment from "./Comment";

const Post = ({ postId }) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      if (!postId) return;
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        await new Promise((res) => setTimeout(res, 2000));

        setPost(response.data);
        setLoading(false);
      } catch (e) {
        console.log(`Error - fetchPost : ${e}`);
      }
    };
    fetchPost();
  }, [postId]);

  if (!loading)
    return (
      <div>
        <h2>Post #{postId}</h2>
        <p>
          <b>Writer</b> : {post.userId}
        </p>
        <p>
          <b>Title</b> : {post.title}
        </p>
        <p>
          <b>Body</b> : {post.body}
        </p>
        <Comment postId={postId} />
      </div>
    );
  else return <Loading />;
};

export default Post;
