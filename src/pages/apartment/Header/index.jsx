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
				HOME | Apartment Room
			</Typography>
			<Typography
				sx={{
					ml: "30%",
				}}
				variant="h1"
			>
				Apartment Room
			</Typography>
		</Box>
	);
}

export default Index;
