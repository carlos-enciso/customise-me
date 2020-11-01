import React from "react";
import { makeStyles } from "@material-ui/core/";
import TripleColumnComponent from "./common/tripleColumn";
import images from "../assets/images";

const LandingComponent = (props) => {
	const classes = useStyles();
	return (
		<TripleColumnComponent>
			<div className={classes.logoContainer}>
				<img src={images.logoSlogan} className={classes.logo} />
			</div>
			<div></div>
			<div></div>
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
		height: "600px",
		width: "600px",
		paddingLeft: "8rem",
	},
});

export default LandingComponent;
