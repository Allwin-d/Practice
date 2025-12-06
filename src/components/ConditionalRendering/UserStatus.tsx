type uStatusProp = {
  loggedIn: boolean;
  isAdmin: boolean;
};

//conditional rendering using && operator
const UserStatus = ({ loggedIn, isAdmin }: uStatusProp) => {
  return (
    <div>
      {loggedIn && isAdmin && <h2>Welcome Admin</h2>}
      {loggedIn && !isAdmin && <h2>Welcome User</h2>}
    </div>
  );
};

export default UserStatus;
