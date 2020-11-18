import React from "react";
import { makeStyles, Typography, IconButton } from "@material-ui/core/";
import { isMobile } from "react-device-detect";
import { Colors } from "../assets/theme";
import images from "../assets/images";

const AboutUsComponent = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.titleContainer}>
				<Typography variant="h3" color="secondary" className={classes.title}>
					WHO WE ARE
				</Typography>
			</div>
			<div className={classes.textContainer}>
				<p>
					<Typography color="secondary" className={classes.message}>
						We are a group of friends who are very passionate about sustainability and ecology. And we believe that we can contribute to these two objectives by
						creating personal hygiene products that are completely organic and fully customizable.
					</Typography>
				</p>
				<p>
					<Typography color="secondary" className={classes.message}>
						Our backgrounds are diverse - spreading from agriculture to aromatherapy, via biology and business economics, to chemistry and entrepreneurship, including
						interculturality, marketing and research. Yet, we believe that the unique combination of our fields provides the perfect ground for creating the best
						possible products for you.
					</Typography>
				</p>
				<p>
					<Typography color="secondary" className={classes.message}>
						If you are interested, or you want to learn more please contact us on{" "}
						<a href="mailto:iwouldlikesoap@gmail.com" className={classes.mailtoLink}>
							iwouldlikesoap@gmail.com
						</a>
					</Typography>
				</p>
			</div>
			<div className={classes.iconsContainer}>
				<IconButton href="https://www.facebook.com/customisemedk" target="_blank">
					<img src={images.facebookWhiteIcon} alt="facebook" className={classes.icon} />
				</IconButton>
				<IconButton href="https://www.instagram.com/customisemedk/" target="_blank">
					<img src={images.instagramWhiteIcon} alt="instagram" className={classes.icon} />
				</IconButton>
				{/*<IconButton className={classes.socialLinks}>
					<img src={images.facebookWhiteIcon} alt="facebook" />
	</IconButton>*/}
			</div>
			{/*<div className={classes.footerContainer}>
				<Typography variant="caption" color="secondary">
					Copyright 2020
				</Typography>
	</div>*/}
		</div>
	);
};

const useStyles = makeStyles({
	container: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignContent: "center",
	},
	titleContainer: {
		marginTop: "5rem",
		marginLeft: "auto",
		marginRight: "auto",
	},
	title: {},
	textContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		marginTop: "8rem",
		marginLeft: "5rem",
		marginRight: "5rem",
		textAlign: "center",
	},
	message: {
		fontSize: isMobile ? "1rem" : "2rem",
		textAlign: "justify",
		marginTop: "1rem",
	},
	footerContainer: {
		marginBottom: "auto",
		textAlign: "center",
	},
	mailtoLink: {
		color: Colors.menta,
	},
	iconsContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		textAlign: "center",
	},
	icon: {
		height: isMobile ? "25px" : "43px",
		width: isMobile ? "25px" : "43px",
	},
});

export default AboutUsComponent;
