import { Box, Typography } from "@mui/material";
import React from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import Rasm1 from "../../../assets/cart1.webp";
import Rasm2 from "../../../assets/cart2.webp";

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
				height: "230vh",
				// mt: "10%",
			}}
		>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container columns={12}>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 400 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="450"
										image={Rasm1}
										alt="green iguana"
									/>
								</CardActionArea>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item sx={{ height: "65vh" }}>
							<Stack spacing={1}>
								<Rating
									sx={{ color: "pink", ml: "31%", mt: "25%" }}
									name="half-rating-read"
									defaultValue={5}
									precision={5}
									readOnly
								/>
							</Stack>
							<Typography variant="h4">Suite Room</Typography>
							<Typography variant="h6">Max: 3 Persons</Typography>
							<Typography variant="h6">Size: 45 m2</Typography>
							<Typography variant="h6">View: Sea View</Typography>
							<Typography variant="h6">Bed:1</Typography>
							<br />
							<Button sx={{ border: "3px solid pink" }}>
								Wiew Room Details
							</Button>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 400 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="450"
										image={Rasm2}
										alt="green iguana"
									/>
								</CardActionArea>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item sx={{ height: "65vh" }}>
							<Stack spacing={1}>
								<Rating
									sx={{ color: "pink", ml: "31%", mt: "25%" }}
									name="half-rating-read"
									defaultValue={5}
									precision={5}
									readOnly
								/>
							</Stack>
							<Typography variant="h4">Suite Room</Typography>
							<Typography variant="h6">Max: 3 Persons</Typography>
							<Typography variant="h6">Size: 45 m2</Typography>
							<Typography variant="h6">View: Sea View</Typography>
							<Typography variant="h6">Bed:1</Typography>
							<br />
							<Button sx={{ border: "3px solid pink" }}>
								Wiew Room Details
							</Button>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item sx={{ height: "65vh" }}>
							<Stack spacing={1}>
								<Rating
									sx={{ color: "pink", ml: "31%", mt: "25%" }}
									name="half-rating-read"
									defaultValue={5}
									precision={5}
									readOnly
								/>
							</Stack>
							<Typography variant="h4">Suite Room</Typography>
							<Typography variant="h6">Max: 3 Persons</Typography>
							<Typography variant="h6">Size: 45 m2</Typography>
							<Typography variant="h6">View: Sea View</Typography>
							<Typography variant="h6">Bed:1</Typography>
							<br />
							<Button sx={{ border: "3px solid pink" }}>
								Wiew Room Details
							</Button>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 400 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="450"
										image={Rasm2}
										alt="green iguana"
									/>
								</CardActionArea>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item sx={{ height: "65vh" }}>
							<Stack spacing={1}>
								<Rating
									sx={{ color: "pink", ml: "31%", mt: "25%" }}
									name="half-rating-read"
									defaultValue={5}
									precision={5}
									readOnly
								/>
							</Stack>
							<Typography variant="h4">Suite Room</Typography>
							<Typography variant="h6">Max: 3 Persons</Typography>
							<Typography variant="h6">Size: 45 m2</Typography>
							<Typography variant="h6">View: Sea View</Typography>
							<Typography variant="h6">Bed:1</Typography>
							<br />
							<Button sx={{ border: "3px solid pink" }}>
								Wiew Room Details
							</Button>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 400 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="450"
										image={Rasm1}
										alt="green iguana"
									/>
								</CardActionArea>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 400 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="450"
										image={Rasm2}
										alt="green iguana"
									/>
								</CardActionArea>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item sx={{ height: "65vh" }}>
							<Stack spacing={1}>
								<Rating
									sx={{ color: "pink", ml: "31%", mt: "25%" }}
									name="half-rating-read"
									defaultValue={5}
									precision={5}
									readOnly
								/>
							</Stack>
							<Typography variant="h4">Suite Room</Typography>
							<Typography variant="h6">Max: 3 Persons</Typography>
							<Typography variant="h6">Size: 45 m2</Typography>
							<Typography variant="h6">View: Sea View</Typography>
							<Typography variant="h6">Bed:1</Typography>
							<br />
							<Button sx={{ border: "3px solid pink" }}>
								Wiew Room Details
							</Button>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 400 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="450"
										image={Rasm1}
										alt="green iguana"
									/>
								</CardActionArea>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item sx={{ height: "65vh" }}>
							<Stack spacing={1}>
								<Rating
									sx={{ color: "pink", ml: "31%", mt: "25%" }}
									name="half-rating-read"
									defaultValue={5}
									precision={5}
									readOnly
								/>
							</Stack>
							<Typography variant="h4">Suite Room</Typography>
							<Typography variant="h6">Max: 3 Persons</Typography>
							<Typography variant="h6">Size: 45 m2</Typography>
							<Typography variant="h6">View: Sea View</Typography>
							<Typography variant="h6">Bed:1</Typography>
							<br />
							<Button sx={{ border: "3px solid pink" }}>
								Wiew Room Details
							</Button>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default Index;
