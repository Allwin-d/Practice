import { DiAndroid } from "react-icons/di";

type AuthenticationProps = {
  isLoggedIn: boolean;
  isAdmin: boolean;
};

const Authentication = ({ isLoggedIn, isAdmin }: AuthenticationProps) => {
  if (isLoggedIn && isAdmin)
    return (
      <div>
        <p>Welcome Admin...</p>
        <DiAndroid />
      </div>
    );
  else return <p>Welcome User...</p>;

  //     {isLoggedIn && isAdmin ? <div>   //this is using ternary operator
  //     <p>Welcome Admin....</p>
  //     <DiAndroid />
  //   </div>: <p>Welcome User ....</p> }
};

export default Authentication;
