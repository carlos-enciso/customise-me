import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core/";
import TripleColumnComponent from "./common/tripleColumn";
import images from "../assets/images";
import { Colors } from "../assets/theme";
import { isMobile } from "react-device-detect";

const LandingComponent = (props) => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.textWrapper}>
				<Typography variant="h3" className={classes.messageTitle}>
					WHAT WE ARE DOING
				</Typography>
				<Typography className={classes.message}>
					AT THE MOMENT, WE FOCUS ON OUR WORKSHOPS WHERE WE GUIDE PEOPLE ON HOW TO MAKE THEIR OWN HANDCRAFTED SOAP WHILE TEACHING THE BENEFITS OF USING NATURAL
					AND ECOLOGICAL INGREDIENTS IN THEIR PERSONAL HYGIENICAL PRODUCTS.
				</Typography>
			</div>
			<div className={classes.promoBackground}>
			</div>
		</>
	);
};

const useStyles = makeStyles({
	promoBackground: {
		paddingTop: "15rem",
		backgroundImage: `url(${images.artBoard})`,
		backgroundRepeat: isMobile ? "repeat" : "no-repeat",
		backgroundPosition: "center",
		backgroundSize: isMobile ? "contain" : "cover",
		backgroundAttachment: "fixed",
		height: isMobile ? "65vh" : "100vh",
	},
	logoContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		marginLeft: "auto",
		marginRight: "auto",
		textAlign: "center",
	},
	textWrapper: {
		marginTop: "5rem",
		marginBottom: "5rem",
		textAlign: "center",
		padding: "0 0.5rem",
	},
	messageTitle: {
		color: Colors.azulFuerte,
		paddingTop: isMobile ? "0" : "2.5rem",
	},
	message: {
		fontSize: isMobile ? "1rem" : "2rem",
		color: Colors.azulFuerte,
		padding: isMobile ? "0.1rem 0.3rem" : "0.5rem 3rem",
		textAlign: "justify",
	},
});

export default LandingComponent;
