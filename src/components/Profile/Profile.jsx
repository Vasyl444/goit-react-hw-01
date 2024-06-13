import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.userProfile}>
      <div className={css.userData}>
        <img className={css.userImg} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userText}>{tag}</p>
        <p className={css.userText}>{location}</p>
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
