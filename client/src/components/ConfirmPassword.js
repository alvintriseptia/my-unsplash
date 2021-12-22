import axios from "axios";
import React, { useState } from "react";
import { mypassword } from "./password";

const ConfirmPassword = (props) => {
	const [password, setPassword] = useState("");
	const deleteData = (e) => {
		if (password === mypassword) {
			const headers = { "Content-Type": "application/json" };
			axios.delete(`/myunsplash/${props.id}`, { headers }).catch((err) => {
				throw err;
			});
		} else if (password !== mypassword) {
			e.preventDefault();
			alert("Wrong Password");
		}
	};

	return (
		<section className="bg-black/50 fixed w-screen h-screen top-0 left-0 z-50 flex justify-center items-center">
			<div className="py-6 px-8 bg-white rounded-lg">
				<h1 className="text-xl font-medium text-gray-900 mb-4">
					Are you sure?
				</h1>
				<form onSubmit={deleteData}>
					<label className="w-20">Password</label>
					<input
						className="w-full p-2 border border-indigo-300 rounded-lg mt-2  mb-4"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						name="password"
						placeholder="******"
						value={password}
					/>
					<div className="flex justify-end space-x-2 mt-4">
						<button
							className="px-4 py-2 border border-white hover:border-red-600 text-gray-900 rounded-xl cursor-pointer"
							onClick={() => props.setShowModal(false)}
						>
							Cancel
						</button>
						<input
							className="px-4 py-2 bg-red-600 text-white rounded-xl cursor-pointer"
							type="submit"
							value="Delete"
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default ConfirmPassword;
