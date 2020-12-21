import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core/";
import { isMobile } from "react-device-detect";
import images from "../assets/images";
import { Colors } from "../assets/theme";

const LandingComponent = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.wrapper}>
			<div className={classes.backgroundBottle}>
				<img src={images.bottleBackground} className={classes.bottleBackground} />
			</div>
			<div className={classes.sealContainer}>
				<img src={images.productsOrganicSeal} className={classes.sealBackground} />
			</div>
			<div className={classes.textWrapper}>
				<div className={classes.textContainer}>
					<Typography variant="h3" color="primary" className={classes.sloganContainer}>
						CREATE YOUR OWN SOAP
					</Typography>
					{/*<Button variant="contained" className={classes.roundedButton}>
						Here
					</Button>*/}
				</div>
			</div>
		</div>
	);
};

const useStyles = makeStyles({
	wrapper: {
		display: "flex",
		flexDirection: "row",
		height: isMobile ? "65vh" : "100vh",
		position: "relative"
	},
	sealContainer: {
		display: "flex",
		flex: 1,
		marginTop: "8rem",
		textAlign: "center",
		zIndex: 99,
	},
	bottleBackground: {
		height: isMobile ? "40vh" : "100vh",
		width: isMobile ? "100vw" : "80vw",
		position: "absolute",
		bottom: 0,

	},
	sealBackground: {
		height: isMobile ? "200px" : "280px",
		width: isMobile ? "200px" : "280px",
		padding: "4rem",
		marginTop: "auto",
		marginBottom: isMobile ? "0" : "5rem",
		marginLeft: "auto",
		marginRight: "auto",
	},
	textWrapper: {
		flex: 1,
		marginTop: isMobile ? "15rem" : "auto",
		marginBottom: "auto",
		zIndex: 99,
	},
	textContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		textAlign: "center",
		alignSelf: "center",
	},
	roundedButton: {
		height: "auto",
		borderRadius: "30px",
		backgroundColor: Colors.azulFuerte,
		color: Colors.white,
		fontSize: isMobile ? "1.5rem" : "4rem",
	},
	sloganContainer: {
		marginLeft: "auto",
		marginRight: "auto",
		fontSize: isMobile ? "2rem" : "4rem",
	},
});

export default LandingComponent;
