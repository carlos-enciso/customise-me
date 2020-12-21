import cslx from "clsx";
import { makeStyles, useScrollTrigger, Fab, Toolbar, Zoom } from "@material-ui/core/";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { isMobile } from "react-device-detect";
import images from "../assets/images";
import Navbar from "../components/navbar";
import Landing from "../components/landing";
import More from "../components/more";
import Video from "../components/video";
import Ingredients from "../components/ingredients";
import AboutUs from "../components/about-us";
import { Colors } from "../assets/theme";

const Home = (props) => {
	const classes = useStyles();
	return (
		<>
			<Navbar navToTop={handleClickTop} navToPromo={handleClickPromo} navToIngredients={handleClickIngredients} navToAboutUs={handleClickAboutUs} className={classes.navBar} />
			<Toolbar id="back-to-top-anchor" className={classes.toolbar} />
			<div className={cslx(classes.container, classes.landing)}>
				<Landing />
			</div>
			<div className={cslx(classes.containerLarge, classes.promo)} id="promo-anchor">
				<More />
			</div>
			{/*<div className={cslx(classes.container, classes.video)}>
				<Video />
	</div>*/}
			<div className={classes.ingredients} id="ingredients-anchor">
				<Ingredients />
			</div>
			<div className={cslx(classes.container, classes.information)} id="about-us-anchor">
				<AboutUs />
			</div>
			<ScrollTop {...props}>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</>
	);
};

const handleClickTop = () => {
	handleScroll('back-to-top-anchor');
};

const handleClickPromo = () => {
	handleScroll('promo-anchor');
};

const handleClickIngredients = () => {
	handleScroll('ingredients-anchor');
};

const handleClickAboutUs = () => {
	handleScroll('about-us-anchor');
};

const handleScroll = (elementId) => {
	const element = document.getElementById(elementId);
	const offset = 45;
	const bodyRect = document.body.getBoundingClientRect().top;
	const elementRect = element.getBoundingClientRect().top;
	const elementPosition = elementRect - bodyRect;
	const offsetPosition = elementPosition - offset;

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth'
	});
}

const ScrollTop = (props) => {
	const { children, window } = props;
	const classes = useStyles();
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	return (
		<Zoom in={trigger}>
			<div onClick={handleClickTop} role="presentation" className={classes.root}>
				{children}
			</div>
		</Zoom>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: isMobile ? "65vh" : "100vh",
		width: "100vw",
		display: "flex",
		flexDirection: "column",
	},
	containerLarge: {
		height: isMobile ? "55vh" : "100vh",
		width: "100vw",
		display: "flex",
		flexDirection: "column",
	},
	navBar: {
		width: "100vw",
	},
	landing: {
		backgroundImage: `url(${images.backgroundTextureCardboard})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
	},
	promo: {
		backgroundImage: `url(${images.backgroundGreen})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover",
		minHeight: isMobile ? "65vh" : '120vh',
	},
	video: {
		backgroundColor: Colors.azulFuerte,
	},
	ingredients: {
		display: "flex",
		backgroundImage: `url(${images.backgroundTextureCardboard})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
	},
	information: {
		minHeight: "100vh",
		backgroundColor: Colors.azulFuerte,
	},
	root: {
		position: "fixed",
		bottom: "1rem",
		right: "1rem",
	},
	toolbar: {
		width: "100vw",
		padding: 0,
	}
}));

export default Home;
