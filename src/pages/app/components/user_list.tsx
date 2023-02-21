import { User } from './user_item';

interface IProps {
  users: IUser[];
}

export const UserList = (props: IProps) => {
  const { users } = props;
  return (
    <ul>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </ul>
  );
};
