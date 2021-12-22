import { useState } from "react";
import MansoryLayout from "./components/MansoryLayout";
import Navbar from "./components/Navbar";

function App() {
	const [label, setLabel] = useState("");

	return (
		<div className="lg:mx-16 p-5">
			<Navbar setLabel={setLabel} />
			<MansoryLayout label={label} />
		</div>
	);
}

export default App;
