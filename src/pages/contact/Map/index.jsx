import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";
import Map from "../../../assets/map.png";

import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TelegramIcon from "@mui/icons-material/Telegram";
import PublicIcon from "@mui/icons-material/Public";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	boxShadow: "none",
	// textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
	return (
		<Box sx={{ flexGrow: 1, mt: "2%" }}>
			<Grid container spacing={2} columns={12}>
				<Grid item xs={8}>
					<Item>
						<Box
							sx={{
								height: "80vh",
								backgroundImage: `url(${Map})`,
							}}
						></Box>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<br />
						<br />
						<br />
						<Typography variant="h4" fontWeight={"700"} textAlign={"left"}>
							Lets get started
						</Typography>
						<br />
						<Typography variant="body1" textAlign={"left"}>
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts. Separated
							they live in Bookmarksgrove right at the coast of the Semantics, a
							large language ocean.
						</Typography>
						<br />
						<br />
						<Button
							sx={{
								padding: "2%",
								backgroundColor: "#fd7792",
								color: "white",
								ml: "25%",
							}}
						>
							Book Apartment Now
						</Button>
					</Item>
				</Grid>
				<Grid item xs={8}>
					<Item>
						<Box>
							<Typography variant="h4">GET IN Touch</Typography>
							<br />
							<Typography variant="body1">
								Your message was sent, thank you!
							</Typography>
							<br />
							<br />
							<Grid sx={{ display: "flex" }}>
								<Item>
									<h3>Full NAME</h3>
									<TextField label="Full NAME"></TextField>
								</Item>
								<Item sx={{ ml: "10%" }}>
									<h3>EMAIL</h3>
									<TextField label="EMAIL ADRESS"></TextField>
								</Item>
							</Grid>
							<br />
							<Grid width={"100%"}>
								<h3>Subject</h3>
								<TextField label="" sx={{ width: "100%" }}></TextField>
							</Grid>
							<br />
							<Grid>
								<h3>Message</h3>
								<TextField label="" sx={{ width: "100%" }}></TextField>
							</Grid>
							<br />
							<Button
								sx={{
									backgroundColor: "#fd7792",
									color: "white",
									padding: "1.5%",
								}}
							>
								SEND MESSAGE
							</Button>
						</Box>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item
						sx={{
							height: "79vh",
							backgroundColor: "#fd7792",
							color: "white",
						}}
					>
						<br />
						<br />
						<Typography variant="h4">Lets Get in Touch</Typography>
						<Typography variant="body1">
							We're open for any suggestion or just to have a chat
						</Typography>
						<Grid sx={{ mt: "10%" }}>
							<Typography variant="body1" sx={{ display: "flex" }}>
								<AddLocationIcon
									sx={{
										border: "1px solid black",
										borderRadius: "20vh",
										p: "1%",
										mr: "4%",
										fontSize: "50px",
									}}
								/>
								Address: 198 West 21th Street, Suite
								<br /> 721 New York NY 10016
							</Typography>
						</Grid>
						<br />
						<Grid>
							<Typography variant="body1" sx={{ display: "flex" }}>
								<LocalPhoneIcon
									sx={{
										border: "1px solid black",
										borderRadius: "20vh",
										p: "1%",
										mr: "4%",
										fontSize: "50px",
									}}
								/>
								Address: 198 West 21th Street, Suite
								<br /> 721 New York NY 10016
							</Typography>
						</Grid>
						<br />
						<Grid>
							<Typography variant="body1" sx={{ display: "flex" }}>
								<TelegramIcon
									sx={{
										border: "1px solid black",
										borderRadius: "20vh",
										p: "1%",
										mr: "4%",
										fontSize: "50px",
									}}
								/>
								Address: 198 West 21th Street, Suite
								<br /> 721 New York NY 10016
							</Typography>
						</Grid>
						<br />
						<Grid>
							<Typography variant="body1" sx={{ display: "flex" }}>
								<PublicIcon
									sx={{
										border: "1px solid black",
										borderRadius: "20vh",
										p: "1%",
										mr: "4%",
										fontSize: "50px",
									}}
								/>
								Address: 198 West 21th Street, Suite
								<br /> 721 New York NY 10016
							</Typography>
						</Grid>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
