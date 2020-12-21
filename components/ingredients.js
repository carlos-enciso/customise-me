import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";
import { isMobile } from "react-device-detect";
import images from "../assets/images";
import { Colors } from "../assets/theme";

const IngredientsComponent = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.titleContainer}>
				<Typography variant="h3" color="primary">
					OUR INGREDIENTS
				</Typography>
			</div>
			<div className={classes.textContainer}>
				<Typography color="primary" className={classes.message}>
					<p>
						ONE OF THE MAIN GOALS OF <b>CustomiseMe</b> IS TO HELP THE ENVIRONMENT IN THE SAME WAY AS OUR CUSTOMERS, THAT IS WHY WE STRIVE TO USE ONLY ORGANIC
						INGREDIENTS THAT HAVE BEEN CARED FOR RESPONSIBLY.
					</p>
					<p>
						OUR MAIN INGREDIENTS ARE <b>COCONUT OIL, COCOA BUTTER, CANOLA OIL, OLIVE OIL, SHEA BUTTER, SUNFLOWER OIL, AND A VARIETY OF ESSENTIAL OILS.</b> THEIR
						INDIVIDUAL BENEFITS YOU CAN REVIEW WHILE CUSTOMISING YOUR OWN SOAP.
					</p>
					<p>
						ALTHOUGH OUR MAIN FORMULAS USE THESE OILS AS A BASE, WE BELIEVE THAT EVERYONE HAS SPECIAL NEEDS AND LIKES FOR ITS PRODUCTS. THAT IS WHY WE ENJOY WORKING
						WITH DIFFERENT INGREDIENTS EVERY DAY. IF YOU HAVE ANY PREFERENCE FOR OTHER NATURAL PRODUCTS, REACH OUT TO US AND LET US HELP YOU BY OFFERING THE BEST
						PRODUCT SPECIALLY MADE FOR YOU.
					</p>
				</Typography>
			</div>
			<div className={classes.separator} />
			<div className={classes.sealContainer}>
				<img src={images.productsOrganicSeal} className={classes.sealBackground} />
			</div>
			<div className={classes.ingredientsBackground}>
				<img src={images.ingredientsImage} className={classes.ingredientsImage} />
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
	textContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: "1rem",
		marginLeft: "5rem",
		marginRight: "5rem",
		textAlign: "center",
	},
	message: {
		fontSize: isMobile ? "1rem" : "2rem",
		textAlign: "center",
	},
	separator: {
		height: "1px",
		backgroundColor: Colors.azulFuerte,
		width: "10rem",
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: "2rem",
	},
	sealContainer: {
		flex: 1,
		marginTop: "8rem",
		textAlign: "center",
		zIndex: 99,
	},
	ingredientsBackground: {
		height: isMobile ? "60vh" : "100vh",
		width: "100vw",
		position: "relative"
	},
	ingredientsImage: {
		height: isMobile ? "50vh" : "100vh",
		width: "100vw",
		position: "absolute",
		bottom: 0,
	},
});

export default IngredientsComponent;
