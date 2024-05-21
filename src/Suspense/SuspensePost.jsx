import { Suspense } from "react";
import SuspenseComment from "./SuspenseComment";
import Loading from "../Loading";

const SuspensePost = ({ resource }) => {
  const post = resource.posts.read();

  return (
    <div>
      <h2>Post #{post.id}</h2>
      <p>
        <b>Writer</b> : {post.userId}
      </p>
      <p>
        <b>Title</b> : {post.title}
      </p>
      <p>
        <b>Body</b> : {post.body}
      </p>
      <Suspense fallback={<Loading />}>
        <SuspenseComment resource={resource} />
      </Suspense>
    </div>
  );
};

export default SuspensePost;
