import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";

const PostsExcerpt = ({ post }) => {
  <article>
      <h3>{post.title}</h3>
      <p className="excerpt">{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionsButtons post={post}/>
    </article>
};
export default PostsExcerpt;
