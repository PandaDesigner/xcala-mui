import { useState } from "react";
import { SearchFilter } from "./FilterSection.components.jsx";
import { TextField } from "@mui/material";

const [shearch, setShearch] = useState("");

export const FilterShearch = () => {
	return (
		<>
			<form>
				<TextField
					id="outlined-basic"
					label="Search"
					variant="outlined"
					value={shearch}
					onChange={(e) => setShearch(e.target.value)}
				/>
			</form>
		</>
	);
};
