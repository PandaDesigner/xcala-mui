import { Paper, Stack, styled } from "@mui/material";

export const FilterSection = styled(Stack)({
	backgroundColor: "rgba(255, 255, 255, 1)",
	boxShadow: "0px 0px 8px rgba(61, 64, 75, 0.15)",
	borderRadius: "4px 4px 0px 0px",
	//display: 'flex',
	position: "relative",
	isolation: "isolate",
	flexDirection: "row",
	//width: '1392px',
	justifyContent: "center",
	alignItems: "center",
	padding: "0px",
	boxSizing: "border-box",
	//height: '86px',
});

export const ContentFilter = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "0px",
	boxSizing: "border-box",
	flex: "1",
	margin: "0px",
	//height: '46px',
	//width: '1352px',
});

export const SearchFilter = styled("from")({
	position: "relative",
	isolation: "isolate",
	//flexDirection: 'row',
	width: "568px",
	height: "46px",
	//justifyContent: 'flex-start',
	//alignItems: 'flex-start',
	padding: "0px 8px 0px 0px",
	boxSizing: "border-box",
});
