import { useLocation, useParams } from 'react-router-dom';

import { usePostsState } from './usePostsState';

import { Post } from './components';

import './posts.css';

const Posts = () => {
  // get params from url
  const { userId } = useParams();
  const { posts, isLoading } = usePostsState({ userId });

  /**
   * avoid to show no posts message while posts loading
   * more elegant approach is to use something like PromiseTracker
   */
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="post-section">
      {posts.length > 0 ? (
        posts.map((post) => <Post post={post} key={post.id} />)
      ) : (
        <h1>No Posts</h1>
      )}
    </section>
  );
};
export default Posts;
