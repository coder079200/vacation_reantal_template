import { Box, Typography } from "@mui/material";
import React from "react";
import Rasm from "../../../assets/aboutback.webp";

function Index() {
	return (
		<Box
			sx={{
				height: "70vh",
				backgroundImage: `url(${Rasm})`,
				backgroundSize: "100%",
				backgroundAttachment: "fixed",
				filter: "brightness(90%)",
			}}
		>
			<Typography
				sx={{
					ml: "45%",
					pt: "12%",
				}}
				variant="h6"
			>
				HOME | About us
			</Typography>
			<Typography
				sx={{
					ml: "36%",
				}}
				variant="h1"
			>
				About us
			</Typography>
		</Box>
	);
}

export default Index;
