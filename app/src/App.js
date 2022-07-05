import React from "react";
import Login from "./Login";
import Profile from "./Profile";
import Footer from "./Footer";
import "./App.css";

class AppComponent extends React.Component {
	render() {
		return <div className="App">

			<Profile></Profile>
			
			<Footer></Footer>
		</div>;
	}
}

export default AppComponent;
