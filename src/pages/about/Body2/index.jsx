import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";

import Rasm1 from "../../../assets/man1.jpg";
import Rasm2 from "../../../assets/man2.jpg";
import Rasm3 from "../../../assets/man3.jpg";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	// textAlign: "center",
	boxShadow: "none",
	color: theme.palette.text.secondary,
}));

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

function Index() {
	return (
		<Box
			sx={{
				backgroundColor: "lightgrey",
				height: "100vh",
				mt: "5.5%",
			}}
		>
			<Box
				sx={{
					height: "40vh",
				}}
			>
				<Typography variant="h1" sx={{ textAlign: "center", pt: "10%" }}>
					Happy Clients & FeedBacks
				</Typography>
			</Box>
			<Box
				sx={{
					mt: "5%",
				}}
			>
				<Container maxWidth="xl">
					<Grid container spacing={2} columns={12}>
						<Grid item xs={4}>
							<Item>
								<Paper
									sx={{
										p: 2,
										margin: "auto",
										maxWidth: 500,
										flexGrow: 1,
										boxShadow: "none",
										backgroundColor: (theme) =>
											theme.palette.mode === "dark" ? "#1A2027" : "#fff",
									}}
								>
									<Grid container spacing={2}>
										<Grid item>
											<ButtonBase sx={{ width: 128, height: 128 }}>
												<Img alt="complex" src={Rasm3} />
											</ButtonBase>
										</Grid>
										<Grid item xs={12} sm container>
											<Grid item xs container direction="column" spacing={2}>
												<Grid item xs>
													<Typography
														gutterBottom
														color={"gray"}
														variant="body1"
													>
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Facere, eligendi sapiente exercitationem quis
														iusto.
													</Typography>
													<Typography variant="body1">
														Racky Henderson
													</Typography>
													<Typography variant="h6" color={"gray"}>
														Father
													</Typography>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Paper>
							</Item>
						</Grid>
						<Grid item xs={4}>
							<Item>
								<Paper
									sx={{
										p: 2,
										margin: "auto",
										maxWidth: 500,
										flexGrow: 1,
										boxShadow: "none",
										backgroundColor: (theme) =>
											theme.palette.mode === "dark" ? "#1A2027" : "#fff",
									}}
								>
									<Grid container spacing={2}>
										<Grid item>
											<ButtonBase sx={{ width: 128, height: 128 }}>
												<Img alt="complex" src={Rasm2} />
											</ButtonBase>
										</Grid>
										<Grid item xs={12} sm container>
											<Grid item xs container direction="column" spacing={2}>
												<Grid item xs>
													<Typography
														gutterBottom
														color={"gray"}
														variant="body1"
													>
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Facere, eligendi sapiente exercitationem quis
														iusto.
													</Typography>
													<Typography variant="body1">
														Racky Henderson
													</Typography>
													<Typography variant="h6" color={"gray"}>
														Father
													</Typography>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Paper>
							</Item>
						</Grid>
						<Grid item xs={4}>
							<Item>
								<Paper
									sx={{
										p: 2,
										margin: "auto",
										maxWidth: 500,
										flexGrow: 1,
										boxShadow: "none",
										backgroundColor: (theme) =>
											theme.palette.mode === "dark" ? "#1A2027" : "#fff",
									}}
								>
									<Grid container spacing={2}>
										<Grid item>
											<ButtonBase sx={{ width: 128, height: 128 }}>
												<Img alt="complex" src={Rasm3} />
											</ButtonBase>
										</Grid>
										<Grid item xs={12} sm container>
											<Grid item xs container direction="column" spacing={2}>
												<Grid item xs>
													<Typography
														gutterBottom
														color={"gray"}
														variant="body1"
													>
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Facere, eligendi sapiente exercitationem quis
														iusto.
													</Typography>
													<Typography variant="body1">
														Racky Henderson
													</Typography>
													<Typography variant="h6" color={"gray"}>
														Father
													</Typography>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Paper>
							</Item>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
}

export default Index;
