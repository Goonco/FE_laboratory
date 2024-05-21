const SuspenseComment = ({ resource }) => {
  const comments = resource.comments.read();

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
};

export default SuspenseComment;
