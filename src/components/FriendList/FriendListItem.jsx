import clsx from "clsx";
import css from "./FriendList.module.css";
const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const nameClsx = clsx(
    css.friendStatus,
    isOnline ? css.isOnline : css.isOffline
  );
  return (
    <div className={css.friendListItem}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={nameClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
export default FriendListItem;
