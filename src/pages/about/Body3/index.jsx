import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Rasm1 from "../../../assets/back.webp";
import { Typography } from "@mui/material";

import ButtonBase from "@mui/material/ButtonBase";
import RamenDiningIcon from "@mui/icons-material/RamenDining";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});
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
		<Box
			sx={{
				backgroundColor: "transparent",
				height: "180vh",
			}}
		>
			<Grid container spacing={2} columns={12}>
				<Grid item xs={6}>
					<Item>
						<Card sx={{ maxWidth: 800 }}>
							<CardMedia
								component="img"
								alt="green iguana"
								height="830"
								image={Rasm1}
							/>
						</Card>
						<Typography variant="h4" color={"black"} fontFamily={"serif"}>
							The most recommended vacation rental
						</Typography>
						<Typography>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia. It is a paradisematic country, in
							which roasted parts of sentences fly into your mouth. Even the
							all-powerful Pointing has no control about the blind texts it is
							an almost unorthographic life One day however a small line of
							blind text by the name of Lorem Ipsum decided to leave for the far
							World of Grammar.
						</Typography>
					</Item>
				</Grid>
				<Grid item xs={6}>
					<Item>
						<Typography variant="h2">What we offer</Typography>
						<Typography variant="subtitle1" width={"80%"}>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia. It is a paradisematic country, in
							which roasted parts of sentences fly into your mouth.
						</Typography>

						{/*  */}
						<Grid container spacing={2} columns={12}>
							<Grid item xs={6}>
								<Item>
									<Paper
										sx={{
											p: 2,
											margin: "auto",
											maxWidth: 500,
											boxShadow: "none",
											flexGrow: 1,
											backgroundColor: (theme) =>
												theme.palette.mode === "dark" ? "#1A2027" : "#fff",
										}}
									>
										<Grid container spacing={2}>
											<Grid item>
												<ButtonBase
													sx={{
														width: 128,
														height: 128,
														backgroundColor: "pink",
														borderRadius: "20vh",
													}}
												>
													<RamenDiningIcon
														sx={{
															fontSize: "50px",

															color: "white",
														}}
													/>
												</ButtonBase>
											</Grid>
											<Grid item xs={12} sm container>
												<Grid item xs container direction="column" spacing={2}>
													<Grid item xs>
														<Typography variant="h6">Tea Coffee</Typography>
														<Typography variant="body2">
															A small river named Duden flows by their place and
															supplies it with the necessary
														</Typography>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Paper>
								</Item>
							</Grid>
							<Grid item xs={6}>
								<Item>
									<Paper
										sx={{
											p: 2,
											margin: "auto",
											maxWidth: 500,
											boxShadow: "none",
											flexGrow: 1,
											backgroundColor: (theme) =>
												theme.palette.mode === "dark" ? "#1A2027" : "#fff",
										}}
									>
										<Grid container spacing={2}>
											<Grid item>
												<ButtonBase
													sx={{
														width: 128,
														height: 128,
														backgroundColor: "pink",
														borderRadius: "20vh",
													}}
												>
													<RamenDiningIcon
														sx={{
															fontSize: "50px",

															color: "white",
														}}
													/>
												</ButtonBase>
											</Grid>
											<Grid item xs={12} sm container>
												<Grid item xs container direction="column" spacing={2}>
													<Grid item xs>
														<Typography variant="h6">Tea Coffee</Typography>
														<Typography variant="body2">
															A small river named Duden flows by their place and
															supplies it with the necessary
														</Typography>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Paper>
								</Item>
							</Grid>
							<Grid item xs={6}>
								<Item>
									<Paper
										sx={{
											p: 2,
											margin: "auto",
											maxWidth: 500,
											boxShadow: "none",
											flexGrow: 1,
											backgroundColor: (theme) =>
												theme.palette.mode === "dark" ? "#1A2027" : "#fff",
										}}
									>
										<Grid container spacing={2}>
											<Grid item>
												<ButtonBase
													sx={{
														width: 128,
														height: 128,
														backgroundColor: "pink",
														borderRadius: "20vh",
													}}
												>
													<RamenDiningIcon
														sx={{
															fontSize: "50px",

															color: "white",
														}}
													/>
												</ButtonBase>
											</Grid>
											<Grid item xs={12} sm container>
												<Grid item xs container direction="column" spacing={2}>
													<Grid item xs>
														<Typography variant="h6">Tea Coffee</Typography>
														<Typography variant="body2">
															A small river named Duden flows by their place and
															supplies it with the necessary
														</Typography>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Paper>
								</Item>
							</Grid>
							<Grid item xs={6}>
								<Item>
									<Paper
										sx={{
											p: 2,
											margin: "auto",
											maxWidth: 500,
											boxShadow: "none",
											flexGrow: 1,
											backgroundColor: (theme) =>
												theme.palette.mode === "dark" ? "#1A2027" : "#fff",
										}}
									>
										<Grid container spacing={2}>
											<Grid item>
												<ButtonBase
													sx={{
														width: 128,
														height: 128,
														backgroundColor: "pink",
														borderRadius: "20vh",
													}}
												>
													<RamenDiningIcon
														sx={{
															fontSize: "50px",

															color: "white",
														}}
													/>
												</ButtonBase>
											</Grid>
											<Grid item xs={12} sm container>
												<Grid item xs container direction="column" spacing={2}>
													<Grid item xs>
														<Typography variant="h6">Tea Coffee</Typography>
														<Typography variant="body2">
															A small river named Duden flows by their place and
															supplies it with the necessary
														</Typography>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Paper>
								</Item>
							</Grid>
							<Grid item xs={6}>
								<Item>
									<Paper
										sx={{
											p: 2,
											margin: "auto",
											maxWidth: 500,
											boxShadow: "none",
											flexGrow: 1,
											backgroundColor: (theme) =>
												theme.palette.mode === "dark" ? "#1A2027" : "#fff",
										}}
									>
										<Grid container spacing={2}>
											<Grid item>
												<ButtonBase
													sx={{
														width: 128,
														height: 128,
														backgroundColor: "pink",
														borderRadius: "20vh",
													}}
												>
													<RamenDiningIcon
														sx={{
															fontSize: "50px",

															color: "white",
														}}
													/>
												</ButtonBase>
											</Grid>
											<Grid item xs={12} sm container>
												<Grid item xs container direction="column" spacing={2}>
													<Grid item xs>
														<Typography variant="h6">Tea Coffee</Typography>
														<Typography variant="body2">
															A small river named Duden flows by their place and
															supplies it with the necessary
														</Typography>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Paper>
								</Item>
							</Grid>
							<Grid item xs={6}>
								<Item>
									<Paper
										sx={{
											p: 2,
											margin: "auto",
											maxWidth: 500,
											boxShadow: "none",
											flexGrow: 1,
											backgroundColor: (theme) =>
												theme.palette.mode === "dark" ? "#1A2027" : "#fff",
										}}
									>
										<Grid container spacing={2}>
											<Grid item>
												<ButtonBase
													sx={{
														width: 128,
														height: 128,
														backgroundColor: "pink",
														borderRadius: "20vh",
													}}
												>
													<RamenDiningIcon
														sx={{
															fontSize: "50px",

															color: "white",
														}}
													/>
												</ButtonBase>
											</Grid>
											<Grid item xs={12} sm container>
												<Grid item xs container direction="column" spacing={2}>
													<Grid item xs>
														<Typography variant="h6">Tea Coffee</Typography>
														<Typography variant="body2">
															A small river named Duden flows by their place and
															supplies it with the necessary
														</Typography>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Paper>
								</Item>
							</Grid>
							<Grid item xs={6}>
								<Item>
									<Paper
										sx={{
											p: 2,
											margin: "auto",
											maxWidth: 500,
											boxShadow: "none",
											flexGrow: 1,
											backgroundColor: (theme) =>
												theme.palette.mode === "dark" ? "#1A2027" : "#fff",
										}}
									>
										<Grid container spacing={2}>
											<Grid item>
												<ButtonBase
													sx={{
														width: 128,
														height: 128,
														backgroundColor: "pink",
														borderRadius: "20vh",
													}}
												>
													<RamenDiningIcon
														sx={{
															fontSize: "50px",

															color: "white",
														}}
													/>
												</ButtonBase>
											</Grid>
											<Grid item xs={12} sm container>
												<Grid item xs container direction="column" spacing={2}>
													<Grid item xs>
														<Typography variant="h6">Tea Coffee</Typography>
														<Typography variant="body2">
															A small river named Duden flows by their place and
															supplies it with the necessary
														</Typography>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Paper>
								</Item>
							</Grid>
							<Grid item xs={6}>
								<Item>
									<Paper
										sx={{
											p: 2,
											margin: "auto",
											maxWidth: 500,
											boxShadow: "none",
											flexGrow: 1,
											backgroundColor: (theme) =>
												theme.palette.mode === "dark" ? "#1A2027" : "#fff",
										}}
									>
										<Grid container spacing={2}>
											<Grid item>
												<ButtonBase
													sx={{
														width: 128,
														height: 128,
														backgroundColor: "pink",
														borderRadius: "20vh",
													}}
												>
													<RamenDiningIcon
														sx={{
															fontSize: "50px",

															color: "white",
														}}
													/>
												</ButtonBase>
											</Grid>
											<Grid item xs={12} sm container>
												<Grid item xs container direction="column" spacing={2}>
													<Grid item xs>
														<Typography variant="h6">Tea Coffee</Typography>
														<Typography variant="body2">
															A small river named Duden flows by their place and
															supplies it with the necessary
														</Typography>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Paper>
								</Item>
							</Grid>
						</Grid>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
