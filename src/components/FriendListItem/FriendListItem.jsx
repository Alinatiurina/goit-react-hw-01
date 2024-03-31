import css from "./FriendListItem.module.css"
import clsx from "clsx";

export default function FriendListItem({
    friends }) {
    // const status = clsx(css.friendsStat, friend.isOnline ? css.isOnline: css.isOfline);
    return (
        <div className={css.friendsList}>
            {friends.map((friend) => (
                <li className={css.friendsItem} key={friend.id}>
                  <img className={css.friendsImg} src={friend.avatar} alt="Avatar" width="48" />
			      <p className={css.friendsName}>{friend.name}</p>
				  <p className={clsx(css.friendsStat, friend.isOnline ? css.isOnline: css.isOfline)}>{friend.isOnline ? "online" : "ofline"}</p>
                </li>
            ))}		
        </div>
    );
}