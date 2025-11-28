import { useEffect, useState } from "react";
import { useUser } from "../hooks/apiHooks";

const Profile = () => {
  const { getUserByToken } = useUser();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getUserByToken(token)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!user) {
    return <div>No user data</div>;
  }

  return (
    <>
      <h1>Profile</h1>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
    </>
  );
};

export default Profile;
