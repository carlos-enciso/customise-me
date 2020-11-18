import React from "react";
import PropTypes from "prop-types";
import { AppBar, makeStyles, Button, IconButton } from "@material-ui/core/";
import images from "../assets/images";
import { Colors } from "../assets/theme";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { isMobile } from "react-device-detect";
/* import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person"; */
const NavbarComponent = (props) => {
	const classes = useStyles();
	const { navToTop, navToPromo, navToIngredients, navToAboutUs } = props;
	return (
		<AppBar className={classes.navbar}>
			<div className={classes.logoContainer}>
				<IconButton className={classes.logoCustomiseme} onClick={navToTop}>
					<img alt="logo" src={images.logoMenu} className={classes.iconCustomiseme} />
				</IconButton>
			</div>
			<div className={classes.linksContainer}>
				<Button variant="text" onClick={navToTop} className={classes.buttonText}>
					Home
				</Button>
				<Button variant="text" onClick={navToPromo} className={classes.buttonText}>
					What We Are Doing
				</Button>
				<Button variant="text" onClick={navToIngredients} className={classes.buttonText}>
					Our Ingredients
				</Button>
				<Button variant="text" onClick={navToAboutUs} className={classes.buttonText}>
					About Us
				</Button>
				<div className={classes.socialLinks}>
					<IconButton className={classes.socialLinks} href="https://www.instagram.com/customisemedk/" target="_blank">
						<InstagramIcon className={classes.icon} />
					</IconButton>
					{/*<IconButton className={classes.socialLinks}>
						<TwitterIcon />
	</IconButton>*/}
					<IconButton className={classes.socialLinks} href="https://www.facebook.com/customisemedk" target="_blank">
						<FacebookIcon className={classes.icon} />
					</IconButton>
				</div>
				{/*<Button variant="contained" className={classes.roundedButton}>
					Log In
				</Button>
				<Button variant="contained" className={classes.roundedButton}>
					<PersonIcon /> Register
				</Button>
				<IconButton className={classes.socialLinks}>
					<ShoppingCartIcon />
	</IconButton>*/}
			</div>
		</AppBar>
	);
};

const useStyles = makeStyles({
	navbar: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		height: "70px",
		backgroundColor: Colors.menta,
	},
	logoContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: isMobile ? "100px" : "160px",
		height: "100%",
		backgroundColor: Colors.azulFuerte,
		cursor: "pointer",
	},
	logoCustomiseme: {
		height: isMobile ? "35px" : "55px",
		width: isMobile ? "35px" : "55px",
		marginLeft: "auto",
		marginRight: "auto",
	},
	iconCustomiseme: {
		height: isMobile ? "35px" : "55px",
		width: isMobile ? "35px" : "55px",
	},
	socialLinks: {
		display: "flex",
		flexDirection: "row",
		color: Colors.azulFuerte,
	},
	linksContainer: {
		height: "45px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		flex: 1,
	},
	roundedButton: {
		height: "40px",
		width: "150px",
		borderRadius: "30px",
		backgroundColor: Colors.azulFuerte,
		color: Colors.white,
	},
	buttonText: {
		fontSize: isMobile ? "0.6rem" : "1.5rem",
	},
	icon: {
		height: isMobile ? "1rem" : "43px",
		width: isMobile ? "1rem" : "43px",
	},
});

export default NavbarComponent;
