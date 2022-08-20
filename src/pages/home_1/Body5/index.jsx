import { Brightness1 } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import "./style.css";

function Index() {
	return (
		<Box
			className="Back"
			sx={{
				height: "70vh",
			}}
		>
			<Typography
				variant="h2"
				fontWeight={"600"}
				fontFamily={"serif"}
				textAlign={"center"}
				color={"black"}
				sx={{
					pt: "10%",
				}}
			>
				Ready to get started
			</Typography>
			<Typography variant="body1" textAlign={"center"}>
				It’s safe to book online with us! Get your dream stay in clicks or drop
				us a line with your questions.
			</Typography>
			<Button
				sx={{
					backgroundColor: "pink",
					ml: "33%",
					mt: "5%",
					p: "1%",
					pl: "5%",
					pr: "5%",
				}}
			>
				Book Now
			</Button>
			<Button
				sx={{
					backgroundColor: "white",
					ml: "1%",
					mt: "5%",
					p: "1%",
					pl: "5%",
					pr: "5%",
				}}
			>
				Contact Us
			</Button>
		</Box>
	);
}

export default Index;
