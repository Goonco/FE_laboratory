import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const Comment = ({ postId }) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      if (!postId) return;
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );

        await new Promise((res) => setTimeout(res, 2000));

        setComments(response.data);
        setLoading(false);
      } catch (e) {
        console.log(`Error - fetchComments : ${e}`);
      }
    };
    fetchComments();
  }, [postId]);

  if (!loading)
    return (
      <div>
        <h2>Comments</h2>
        {comments.map((comment, idx) => (
          <div key={idx}>
            <p>email : {comment.email}</p>
            <p>name : {comment.name}</p>
            <p>body : {comment.body}</p>
          </div>
        ))}
      </div>
    );
  else return <Loading />;
};

export default Comment;
