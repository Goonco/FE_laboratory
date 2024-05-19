import { useState } from "react";
import Post from "./NoSuspense/Post";

const App = () => {
  const [postId, setPostId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostId(document.getElementById("postId").value);
  };

  return (
    <>
      <h1>Main Page</h1>
      <form onSubmit={handleSubmit}>
        <input id="postId" type="number" placeholder="불러올 post id" />
        <button>load</button>
      </form>
      <Post postId={postId} />
    </>
  );
};

export default App;
