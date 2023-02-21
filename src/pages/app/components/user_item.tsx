interface IProps {
  user: IUser;
}

export const User = (props: IProps) => {
  const { user } = props;
  return (
    <li className="user-item" key={user.id}>
      <p>{user.name}</p>
      <p>Link</p>
      <button type="button" className="raise">
        albums
      </button>
    </li>
  );
};
