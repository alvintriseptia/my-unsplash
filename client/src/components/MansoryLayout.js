import axios from "axios";
import React, { useEffect, useState } from "react";
import ConfirmPassword from "./ConfirmPassword";

const MansoryLayout = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [id, setId] = useState("");
	const HeightRandom = () => {
		return Math.floor(Math.random() * (600 - 300 + 1)) + 300;
	};

	const [data, setData] = useState([]);

	// get data by axios
	const getData = () => {
		const headers = { "Content-Type": "application/json" };
		axios
			.get("/myunsplash", { headers })
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				throw err;
			});
	};

	const filterData = () => {
		if (props.label !== "") {
			const filteredData = data.filter((item) => {
				return Object.values(item.label)
					.join("")
					.toLowerCase()
					.includes(props.label.toLowerCase());
			});
			return filteredData;
		} else {
			return data;
		}
	};

	const handleDelete = (id) => {
		setShowModal(!showModal);
		setId(id);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<section className="flex flex-col justify-center items-center md:block md:columns-2 xl:columns-3 2xl:columns-4">
			{filterData().map((item) => {
				return (
					<>
						<div
							key={item._id}
							style={{ maxHeight: HeightRandom() + "px" }}
							className="max-w-[500px] rounded-xl relative grid grid-rows-[1fr_auto] break-inside-avoid mb-4"
						>
							<div className="opacity-0 hover:opacity-100 transition-all absolute w-full h-full bg-black/50 rounded-lg">
								<button
									className=" absolute right-4 top-4 px-4 py-1.5 border border-red-500 text-red-500 rounded-lg"
									onClick={() => handleDelete(item._id)}
								>
									delete
								</button>
								<span className=" absolute left-4 bottom-4 text-white font-bold text-lg">
									{item.label}
								</span>
							</div>
							<img
								className="object-cover rounded-xl w-full h-full row-span-full col-span-1 object-center"
								src={item.photo}
								alt="snorkling"
							/>
						</div>
						{showModal && (
							<ConfirmPassword id={id} setShowModal={setShowModal} />
						)}
					</>
				);
			})}
		</section>
	);
};

export default MansoryLayout;
