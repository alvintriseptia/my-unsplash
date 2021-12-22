import axios from "axios";
import React, { useState } from "react";

const AddPhoto = (props) => {
	const [label, setLabel] = useState("");
	const [photo, setPhoto] = useState("");

	const handleSubmit = (e) => {
		const data = { label: label, photo: photo };
		axios
			.post(`/myunsplash/add`, data)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<section className="bg-black/50 fixed w-screen h-screen top-0 left-0 z-50 flex justify-center items-center">
			<div className="py-6 px-8 bg-white rounded-lg">
				<h1 className="text-xl font-medium text-gray-900 mb-4">
					Add a new photo
				</h1>
				<form onSubmit={handleSubmit}>
					<label className="w-20">Label</label>
					<input
						className="w-full p-2 border border-indigo-300 rounded-lg mt-2  mb-4"
						type="text"
						onChange={(e) => setLabel(e.target.value)}
						name="label"
						value={label}
					/>

					<label className="w-20">URL</label>
					<input
						className="w-full p-2 border border-indigo-300 rounded-lg mt-2"
						type="text"
						onChange={(e) => setPhoto(e.target.value)}
						name="photo"
						value={photo}
					/>
					<div className="flex justify-end space-x-2 mt-8">
						<button
							className="px-4 py-2 border border-white hover:border-indigo-600 text-gray-900 rounded-xl cursor-pointer"
							onClick={() => props.setShowModal(false)}
						>
							Cancel
						</button>
						<input
							className="px-4 py-2 bg-indigo-600 text-white rounded-xl cursor-pointer"
							type="submit"
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default AddPhoto;
