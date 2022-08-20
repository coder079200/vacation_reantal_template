import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

import Card1 from "../../../assets/Lastcard1.webp";
import Card2 from "../../../assets/Lastcard2.webp";
import Card3 from "../../../assets/Lastcard3.webp";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	boxShadow: "none",
	color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
	return (
		<Box sx={{ flexGrow: 1, height: "130vh", mt: "5%" }}>
			<Typography variant="h2" sx={{ textAlign: "center" }}>
				Latest news from our blog
			</Typography>
			<Typography
				variant="body1"
				sx={{ textAlign: "center", color: "#fd7792" }}
			>
				NEWS & BLOG
			</Typography>
			<br />
			<Grid container spacing={2} columns={12}>
				<Grid item xs={4}>
					<Item>
						<Card sx={{ maxWidth: 435 }}>
							<CardMedia
								component="img"
								alt="green iguana"
								height="350"
								image={Card1}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Work Hard, Party Hard in a Luxury Chalet in the Alps
								</Typography>
								<Typography
									variant="body2"
									gutterBottom
									sx={{
										display: "flex",
										ml: "26%",
										color: "#fd7792",
									}}
									color="text.secondary"
								>
									January 30,2020 Admin <ModeCommentIcon />3
								</Typography>
								<Typography sx={{ width: "70%", ml: "15%", color: "gray" }}>
									Far far away, behind the word mountains, far from the
									countries Vokalia and Consonantia
								</Typography>
							</CardContent>
						</Card>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<Card sx={{ maxWidth: 435 }}>
							<CardMedia
								component="img"
								alt="green iguana"
								height="350"
								image={Card2}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Work Hard, Party Hard in a Luxury Chalet in the Alps
								</Typography>
								<Typography
									variant="body2"
									gutterBottom
									sx={{
										display: "flex",
										ml: "26%",
										color: "#fd7792",
									}}
									color="text.secondary"
								>
									January 30,2020 Admin <ModeCommentIcon />3
								</Typography>
								<Typography sx={{ width: "70%", ml: "15%", color: "gray" }}>
									Far far away, behind the word mountains, far from the
									countries Vokalia and Consonantia
								</Typography>
							</CardContent>
						</Card>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<Card sx={{ maxWidth: 435 }}>
							<CardMedia
								component="img"
								alt="green iguana"
								height="350"
								image={Card3}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Work Hard, Party Hard in a Luxury Chalet in the Alps
								</Typography>
								<Typography
									variant="body2"
									gutterBottom
									sx={{
										display: "flex",
										ml: "26%",
										color: "#fd7792",
									}}
									color="text.secondary"
								>
									January 30,2020 Admin <ModeCommentIcon />3
								</Typography>
								<Typography sx={{ width: "70%", ml: "15%", color: "gray" }}>
									Far far away, behind the word mountains, far from the
									countries Vokalia and Consonantia
								</Typography>
							</CardContent>
						</Card>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
