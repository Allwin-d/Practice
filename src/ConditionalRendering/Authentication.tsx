type AuthenticationProps = {
  isLoggedIn: boolean;
  isAdmin: boolean;
};

const Authentication = ({ isLoggedIn, isAdmin }: AuthenticationProps) => {
  if (isLoggedIn && isAdmin) return <p>Welcome Admin..</p>;
  else return <p>Welcome User...</p>;

  return <div></div>;
};

export default Authentication;
