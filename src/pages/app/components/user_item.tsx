import { Link } from 'react-router-dom';

import { Modal } from '../../../components/modal';

interface IProps {
  user: IUser;
}

export const User = (props: IProps) => {
  const { user } = props;
  const { id } = user;
  return (
    <li className="user-item" key={id}>
      <p>{user.name}</p>
      <Link to={`/posts/${id}`}>Posts</Link>
      <Modal userId={id} />
    </li>
  );
};
