import axios from "axios";

function fetchPosts(postId) {
  let posts = null;
  const suspender = axios(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((response) => {
    setTimeout(() => {
      posts = postId ? response.data : null;
    }, 2000);
  });
  return {
    read() {
      if (posts === null) throw suspender;
      else return posts;
    },
  };
}

function fetchComments(postId) {
  let comments = null;
  const suspender = axios(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  ).then((response) => {
    setTimeout(() => {
      comments = postId ? response.data : null;
    }, 2000);
  });
  return {
    read() {
      if (comments === null) throw suspender;
      else return comments;
    },
  };
}

function fetchData(postId) {
  return {
    posts: fetchPosts(postId),
    comments: fetchComments(postId),
  };
}

export default fetchData;
