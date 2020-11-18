import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core/";
import { isMobile } from "react-device-detect";
import TripleColumnComponent from "./common/tripleColumn";
import images from "../assets/images";
import { Colors } from "../assets/theme";

const LandingComponent = (props) => {
	const classes = useStyles();
	return (
		<TripleColumnComponent>
			<div className={classes.logoContainer}>
				<img src={images.logoColors} className={classes.logo} />
				<Typography variant="h2" color="primary">
					All our soaps are
				</Typography>
				<Typography variant="h3" color="primary">
					Organic
				</Typography>
			</div>
			<div></div>
			<div className={classes.textWrapper}>
				<div className={classes.textContainer}>
					<Typography variant="h3" color="primary" className={classes.sloganContainer}>
						Create your own soap
					</Typography>
					{/*<Button variant="contained" className={classes.roundedButton}>
						Here
					</Button>*/}
				</div>
			</div>
		</TripleColumnComponent>
	);
};

const useStyles = makeStyles({
	logoContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		marginTop: "8rem",
		textAlign: "center",
	},
	logo: {
		height: isMobile ? "150px" : "500px",
		width: isMobile ? "150px" : "500px",
	},
	textWrapper: {
		marginTop: "auto",
		marginBottom: "auto",
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
		width: "65%",
		marginLeft: "auto",
		marginRight: "auto",
	},
});

export default LandingComponent;