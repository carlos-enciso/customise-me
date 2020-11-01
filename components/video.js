import React from "react";
import { makeStyles } from "@material-ui/core/";
import images from "../assets/images";

const VideoComponent = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.videoContainer}>
				<div className={classes.video}></div>
			</div>
			<div className={classes.logoContainer}>
				<img src={images.journey} className={classes.logo} />
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
	videoContainer: {
		flex: 2,
		marginTop: "5rem",
		marginLeft: "auto",
		marginRight: "auto",
	},
	video: {
		width: "70rem",
		height: "35rem",
		backgroundColor: "red",
	},
	logoContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: "8rem",
		textAlign: "center",
	},
	logo: {
		height: "200px",
		width: "auto",
		marginLeft: "8rem",
	},
});

export default VideoComponent;
