import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = (props) => {
	return (
		<nav className="flex flex-col lg:flex-row justify-center lg:justify-between mb-20">
			<div className="flex flex-col items-center space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6 mb-8 lg:mb-0">
				<Logo />
				<Search setLabel={props.setLabel} />
			</div>
			<Button />
		</nav>
	);
};

export default Navbar;
