import React from "react";
import "./Profile.css";

class ProfileComponent extends React.Component {
	render() {
		return <div className="profile">
            <img className="profilePicture" src="/logo192.png"></img>
		</div>;
	}
}

export default ProfileComponent;