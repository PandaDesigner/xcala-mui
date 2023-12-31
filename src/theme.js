import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			dark: "#00046d",
			main: "#1E22AA",
			ligth: "#5E62C4",
		},
		secundary: {
			main: "#5AC4B1",
		},
		white: {
			main: "#fff",
		},
	},
	typography: {
		fontFamily: "Poppins, Museo, san-serif",
		fontSize: 16, // Tamaño de fuente base para el proyecto
		fontWeightRegular: 400, // Peso de fuente regular
		fontWeightBold: 600,
	},
});
