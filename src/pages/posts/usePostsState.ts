import axios from 'axios';
import { useEffect, useState } from 'react';

interface IUserPostsState {
  userId: string | undefined
}
/**
 * @param { number } userId
 * @returns array of posts written by user
 */
export const usePostsState = (props: IUserPostsState) => {
  const { userId } = props;

  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    /**
     * as we can fetch only needed posts, no need in additional redux state
     * otherwise we could fetch all posts and then filter them by userId
     * but it will affect performance
     */
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    setPosts(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, isLoading };
}