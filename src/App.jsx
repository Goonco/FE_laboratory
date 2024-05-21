import "./App.css";
import { Suspense, useState } from "react";
import Post from "./NoSuspense/Post";
import SuspensePost from "./Suspense/SuspensePost";
import Loading from "./Loading";
import fetchData from "./Suspense/fetchData";

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
      <div id="compare-box">
        <div className="post-box">
          <Post postId={postId} />
        </div>
        <div className="post-box">
          <Suspense fallback={<Loading />}>
            <SuspensePost resource={fetchData(postId)} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default App;
