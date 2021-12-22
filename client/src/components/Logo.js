import React from "react";

const Logo = () => {
	return (
		<a href="/" className="flex justify-center items-center space-x-2">
			<div className="flex flex-col space-y-1 items-center justify-center">
				<div className="h-2 w-2 rounded-sm bg-neutral-900"></div>
				<div className="h-2 w-5 rounded-sm bg-neutral-900"></div>
			</div>
			<div className="flex flex-col">
				<h1 className="font-bold text-sm text-neutral-900">My Unsplash</h1>
				<h2 className="font-bold text-xs text-neutral-900">devchallenges.io</h2>
			</div>
		</a>
	);
};

export default Logo;
