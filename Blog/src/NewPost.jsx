const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          onChange={(e) => setPostTitle(e.target.value)}
          value={postTitle}
          required
          id="postTitle"
          type="text"
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          onChange={(e) => setPostBody(e.target.value)}
          value={postBody}
          required
          id="postBody"
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
