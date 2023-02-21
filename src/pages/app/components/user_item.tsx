import { Link } from 'react-router-dom';

interface IProps {
  user: IUser;
}

export const User = (props: IProps) => {
  const { user } = props;
  return (
    <li className="user-item" key={user.id}>
      <p>{user.name}</p>
      <Link to={`/posts/${user.id}`}>Posts</Link>
      <button type="button" className="raise">
        albums
      </button>
    </li>
  );
};
