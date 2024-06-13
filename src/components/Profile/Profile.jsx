//import userData from "../../userData.json";
import css from "./Profile.module.css";
const Profile = ({
  username,
  tag,
  location,
  avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats,
}) => {
  console.log(username);
  return (
    <div className={css.userProfile}>
      <div className={css.userData}>
        <img className={css.profileImg} src={avatar} alt="User avatar" />
        <p className={css.userName}>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.userStats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
