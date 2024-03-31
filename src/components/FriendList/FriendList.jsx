import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

export default function FriendList ({
	friends}) {
	return (
		<ul className={css.friendsList}>			
			{
				<FriendListItem  friends={friends}/>
			 }
		</ul>
	);
}