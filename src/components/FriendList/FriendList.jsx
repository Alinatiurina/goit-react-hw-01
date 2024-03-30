// import friends from "./friends.json";
// import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({
	friends }) {
	return (
		<ul>
			<li>
			 {friends.map((friend) => (
                <div key={friend.id}>
                  <img src={friend.avatar} alt="Avatar" width="48" />
			      <p>{friend.name}</p>
				  <p>{friend.isOnline ? "online" : "ofline"}</p>
                </div>
            ))}
			</li>
		</ul>
	);
}