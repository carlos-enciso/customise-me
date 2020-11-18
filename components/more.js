import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core/";
import TripleColumnComponent from "./common/tripleColumn";
import images from "../assets/images";
import { Colors } from "../assets/theme";
import { isMobile } from "react-device-detect";

const LandingComponent = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.promoBackground}>
			<div className={classes.logoContainer}>
				<img src={images.logoSlogan} className={classes.logo} />
			</div>
			<div className={classes.textWrapper}>
				<Typography variant="h3" className={classes.messageTitle}>
					What we are doing
				</Typography>
				<Typography className={classes.message}>
					At the moment we are focusing on our workshops we try to teach people how to make their own handcrafted soap while teaching the benefits of using natural and
					ecological ingredients in their personal hygiene products
				</Typography>
			</div>
		</div>
	);
};

const useStyles = makeStyles({
	promoBackground: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
		backgroundImage: `url(${images.fondoPromo})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover",
		opacity: 0.6,
		backgroundAttachment: "fixed",
	},
	logoContainer: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		marginTop: "8rem",
		marginLeft: "auto",
		marginRight: "auto",
		textAlign: "center",
	},
	logo: {
		marginTop: "5rem",
	},
	textWrapper: {
		marginBottom: "auto",
		textAlign: "center",
		padding: "3rem",
		paddingTop: isMobile ? "7rem" : "15rem",
		paddingBottom: "12rem",
	},
	messageTitle: {
		color: Colors.white,
	},
	message: {
		fontSize: isMobile ? "1.5rem" : "2.5rem",
		color: Colors.white,
	},
});

export default LandingComponent;
