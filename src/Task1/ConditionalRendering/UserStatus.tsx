type UserStatus = {
  loggedIn: boolean;
  isAdmin: boolean;
};

const UserStatus = ({ loggedIn, isAdmin }: UserStatus) => {
  return (
    <div>
      {loggedIn && isAdmin ? <h2>Welcome Admin</h2> : <h2>Welcome user</h2>}
    </div>
  );
};
export default UserStatus;
