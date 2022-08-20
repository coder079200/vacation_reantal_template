import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Rasm from "../../../assets/back.webp";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	boxShadow: "none",
	color: theme.palette.text.secondary,
}));

function Index() {
	return (
		<Box
			sx={{
				width: "100%",
				height: "120vh",
				backgroundImage: `url(${Rasm})`,
				backgroundSize: "100%",
				backgroundAttachment: "fixed",
				color: "white",
			}}
		>
			<Box sx={{ width: "50%" }}>
				<Typography sx={{ pt: "20%" }} variant="h5">
					Welcome to Vacation Rental
				</Typography>
				<Typography
					variant="h1"
					sx={{ fontFamily: "serif", fontWeight: "600" }}
				>
					Rent an appartment for your vacation
				</Typography>
				<Button
					variant="contained"
					sx={{ ml: "2%", mt: "5%", p: "1.5%", backgroundColor: "#fd7792" }}
				>
					Learn More
				</Button>
				<Button
					variant="contained"
					sx={{
						ml: "2%",
						mt: "5%",
						p: "1.5%",
						backgroundColor: "white",
						color: "black",
					}}
				>
					Contact Us
				</Button>
			</Box>
			<Box
				sx={{
					width: "30%",
					height: "65vh",
					ml: "69%",
					mt: "-42.2%",
					backgroundColor: "white",
					color: "black",
				}}
			>
				<Container>
					<Typography variant="h4" sx={{ fontFamily: "serif" }}>
						Book your apartment
					</Typography>
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={0.1} columns={12}>
							<Grid xs={12}>
								<Item>
									<TextField
										label="Full Name"
										sx={{ width: "100%" }}
									></TextField>
								</Item>
							</Grid>
							<Grid xs={6}>
								<Item>
									<TextField label="Check-in"></TextField>
								</Item>
							</Grid>
							<Grid xs={6}>
								<Item>
									<TextField label="Check-out"></TextField>
								</Item>
							</Grid>
							<Grid xs={6}>
								<Item>
									<FormControl fullWidth>
										<InputLabel
											variant="standard"
											htmlFor="uncontrolled-native"
										></InputLabel>
										<NativeSelect
											defaultValue={5}
											inputProps={{
												name: "Adults",
												id: "uncontrolled-native",
											}}
										>
											<option value={5}>Adults</option>
											<option value={10}>1</option>
											<option value={20}>2</option>
											<option value={30}>3</option>
											<option value={30}>4</option>
											<option value={30}>5</option>
										</NativeSelect>
									</FormControl>
								</Item>
							</Grid>
							<Grid xs={6}>
								<Item>
									<FormControl fullWidth>
										<InputLabel
											variant="standard"
											htmlFor="uncontrolled-native"
										></InputLabel>
										<NativeSelect
											defaultValue={5}
											inputProps={{
												name: "Children",
												id: "uncontrolled-native",
											}}
										>
											<option value={5}>Children</option>
											<option value={10}>1</option>
											<option value={20}>2</option>
											<option value={30}>3</option>
											<option value={30}>4</option>
											<option value={30}>5</option>
										</NativeSelect>
									</FormControl>
								</Item>
							</Grid>
							<Grid xs={6}>
								<Item>
									<TextField label="Phone"></TextField>
								</Item>
							</Grid>
							<Grid xs={6}>
								<Item>
									<TextField label="Time"></TextField>
								</Item>
							</Grid>
							<Grid xs={12}>
								<Item>
									<Button
										sx={{
											backgroundColor: "#fd7792",
											color: "white",
											paddingLeft: "25%",
											paddingRight: "25%",
											fontSize: "15px",
										}}
									>
										Book Apartment Now
									</Button>
								</Item>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</Box>
	);
}

export default Index;
