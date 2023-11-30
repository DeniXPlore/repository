// import { useHistory } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import { format } from "date-fns";

const NewPost = () => { 
  // const history = useHistory();

  const posts = useStoreState((state) => state.posts)
  const postTitle = useStoreState((state) => state.postTitle)
  const postBody = useStoreState((state) => state.postBody)

  const savePost = useStoreActions((actions) => actions.savePost)
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle)
  const setPostBody = useStoreActions((actions) => actions.setPostBody)

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    savePost(newPost)
    history.push('/')

  };

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
