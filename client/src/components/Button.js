import React, { useState } from "react";
import AddPhoto from "./AddPhoto";

const Button = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<button
				onClick={toggleModal}
				className="py-4 px-5 bg-green-500 text-white font-bold text-lg rounded-lg shadow-md"
			>
				Add a Photo
			</button>
			{showModal && <AddPhoto setShowModal={setShowModal} />}
		</>
	);
};

export default Button;
