import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";
import images from "../assets/images";

const IngredientsComponent = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.titleContainer}>
				<Typography variant="h3" color="primary" className={classes.title}>
					Our Ingredients
				</Typography>
			</div>
			<div className={classes.emptyContainer}>&nbsp;</div>
			{/* TODO: Obtener la imagen por separado y el fondo, asi es mas facil separalo */}
			<div className={classes.textContainer}>
				<Typography color="primary" className={classes.message}>
					<p>
						One of the main goals of <b>CustomiseMe</b> is to help the environment in the same way as our customers, that is why we strive to use only organic
						ingredients that have been cared for responsibly.
					</p>
					<p>
						Our main ingredients are <b>coconut oil, cocoa butter, canola oil, olive oil, shea butter, sunflower oil, and a variety of essential oils.</b> Their
						individual benefits you can review while customising your own soap.
					</p>
					<p>
						Although our main formulas use these oils as a base, we believe that everyone has special needs and likes for its products. That is why we enjoy working
						with different ingredients every day. If you have any preference for other natural products, reach out to us and let us help you by offering the best
						product specially made for you.
					</p>
				</Typography>
			</div>
		</div>
	);
};

const useStyles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		alignContent: "center",
	},
	titleContainer: {
		marginTop: "5rem",
		marginLeft: "auto",
		marginRight: "auto",
	},
	title: {},
	emptyContainer: {
		flex: 2,
		height: "50rem", // TODO: Removerlo con la imagen de fondo
	},
	textContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: "8rem",
		marginLeft: "5rem",
		marginRight: "5rem",
		textAlign: "center",
	},
	message: {
		fontSize: "2rem",
		textAlign: "justify",
	},
});

export default IngredientsComponent;
