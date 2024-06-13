import Profile from "../Profile/Profile.jsx";
import userData from "../../userData.json";
const App = () => {
  console.log(userData.username);
  return (
    <>
      <Profile
        tag={userData.tag}
        name={userData.username}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
export default App;
