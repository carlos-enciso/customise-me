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
					ABOUT US
				</Typography>
			</div>
			<div className={classes.textContainer}>
				<p>
					<Typography color="secondary" className={classes.message}>
						WE ARE A GROUP OF FRIENDS WHO ARE VERY PASSIONATE ABOUT SUSTAINABILITY AND ECOLOGY. AND WE BELIEVE THAT WE CAN CONTRIBUTE TO THESE TWO OBJECTIVES BY
						CREATING PERSONAL HYGIENE PRODUCTS THAT ARE COMPLETELY ORGANIC AND FULLY CUSTOMIZABLE.
					</Typography>
				</p>
				<p>
					<Typography color="secondary" className={classes.message}>
						OUR BACKGROUNDS ARE DIVERSE - SPREADING FROM AGRICULTURE TO AROMATHERAPY, VIA BIOLOGY AND BUSINESS ECONOMICS, TO CHEMISTRY AND ENTREPRENEURSHIP, INCLUDING
						INTERCULTURALITY, MARKETING AND RESEARCH. YET, WE BELIEVE THAT THE UNIQUE COMBINATION OF OUR FIELDS PROVIDES THE PERFECT GROUND FOR CREATING THE BEST
						POSSIBLE PRODUCTS FOR YOU.
					</Typography>
				</p>
				<p>
					<Typography color="secondary" className={classes.message}>
						IF YOU ARE INTERESTED, OR YOU WANT TO LEARN MORE PLEASE CONTACT US ON{" "}
						<a href="mailto:iwouldlikesoap@gmail.com" className={classes.mailtoLink}>
							IWOULDLIKESOAP@GMAIL.COM
						</a>
					</Typography>
				</p>
			</div>

			<div className={classes.separator} />
			<div className={classes.iconsContainer}>
				<div className={classes.titleIconsContainer}>
					<Typography variant="h3" color="secondary" className={classes.titleFollowUs}>
						FOLLOW US
					</Typography>
					<IconButton href="https://www.facebook.com/customisemedk" target="_blank">
						<img src={images.facebookMentaIcon} alt="facebook" className={classes.icon} />
					</IconButton>
					<IconButton href="https://www.instagram.com/customisemedk/" target="_blank">
						<img src={images.instagramMentaIcon} alt="instagram" className={classes.icon} />
					</IconButton>
					{/*<IconButton className={classes.socialLinks}>
					<img src={images.facebookWhiteIcon} alt="facebook" />
	</IconButton>*/}
				</div>
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
		color: Colors.menta,
	},
	titleContainer: {
		marginTop: "5rem",
		marginLeft: "auto",
		marginRight: "auto",
	},
	title: {
		color: Colors.menta,
	},
	textContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		marginTop: isMobile ? "2rem" : "4rem",
		marginLeft: "5rem",
		marginRight: "5rem",
		textAlign: "center",
	},
	message: {
		fontSize: isMobile ? "1rem" : "2rem",
		textAlign: "center",
		marginTop: "1rem",
		color: Colors.menta,
	},
	footerContainer: {
		marginBottom: "auto",
		textAlign: "center",
	},
	mailtoLink: {
		fontStyle: "italic",
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
	separator: {
		height: "1px",
		backgroundColor: Colors.menta,
		width: "10rem",
		marginTop: "6rem",
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: "1rem",
	},
	titleIconsContainer: {
		marginLeft: "auto",
		marginRight: "auto",
		color: Colors.menta,
	},
	titleFollowUs: {
		fontSize: "1.5rem",
		color: Colors.menta,
	}
});

export default AboutUsComponent;
