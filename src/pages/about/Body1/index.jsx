import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import Card1 from "../../../assets/card2.webp";

function Index() {
	return (
		<Box>
			<Box>
				<Container maxWidth="xl" sx={{ display: "flex" }}>
					<Card sx={{ maxWidth: 400, mt: "2%" }}>
						<CardMedia
							component="img"
							height="200"
							image={Card1}
							alt="green iguana"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								textAlign={"center"}
								component="div"
							>
								Lizard
							</Typography>
							<Typography
								variant="body2"
								textAlign={"center"}
								color="text.secondary"
							>
								Lizards are a widespread group of squamate reptiles, with over
								6,000 species, ranging across all continents except Antarctica
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size="small"
								sx={{
									ml: "25%",
									fontSize: "20px",
									backgroundColor: "#fd7792",
									color: "white",
									pl: "10%",
									pr: "10%",
								}}
							>
								Read More
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 400, mt: "2%", ml: "5%" }}>
						<CardMedia
							component="img"
							height="200"
							image={Card1}
							alt="green iguana"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								textAlign={"center"}
								component="div"
							>
								Lizard
							</Typography>
							<Typography
								variant="body2"
								textAlign={"center"}
								color="text.secondary"
							>
								Lizards are a widespread group of squamate reptiles, with over
								6,000 species, ranging across all continents except Antarctica
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size="small"
								sx={{
									ml: "25%",
									fontSize: "20px",
									backgroundColor: "#fd7792",
									color: "white",
									pl: "10%",
									pr: "10%",
								}}
							>
								Read More
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 400, mt: "2%", ml: "5%" }}>
						<CardMedia
							component="img"
							height="200"
							image={Card1}
							alt="green iguana"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								textAlign={"center"}
								component="div"
							>
								Lizard
							</Typography>
							<Typography
								variant="body2"
								textAlign={"center"}
								color="text.secondary"
							>
								Lizards are a widespread group of squamate reptiles, with over
								6,000 species, ranging across all continents except Antarctica
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size="small"
								sx={{
									ml: "25%",
									fontSize: "20px",
									backgroundColor: "#fd7792",
									color: "white",
									pl: "10%",
									pr: "10%",
								}}
							>
								Read More
							</Button>
						</CardActions>
					</Card>
				</Container>
			</Box>
		</Box>
	);
}

export default Index;
