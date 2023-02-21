interface IProps {
  post: IPost;
}

export const Post = (props: IProps) => {
  const { post } = props;
  return (
    <div className="post-container">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <div className="hr" />
    </div>
  );
};
