import { useState } from "react";
import { SearchFilter } from "./FilterSection.components.jsx";
import { TextField } from "@mui/material";


export const FilterShearch = () => {
	const [shearch, setShearch] = useState("");
	return (
		<>
			<SearchFilter>
				<TextField
					id="outlined-basic"
					label="Search"
					variant="outlined"
					value={shearch}
					onChange={(e) => setShearch(e.target.value)}
				/>
			</SearchFilter>
		</>
	);
};
