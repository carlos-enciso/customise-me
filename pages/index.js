import cslx from "clsx";
import { makeStyles, useScrollTrigger, Fab, Toolbar, Zoom } from "@material-ui/core/";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import images from "../assets/images";
import Navbar from "../components/navbar";
import Landing from "../components/landing";
import More from "../components/more";
import Video from "../components/video";
import Ingredients from "../components/ingredients";
import AboutUs from "../components/about-us";
import { Colors } from "../assets/theme";
import Head from "next/head";

const Home = (props) => {
	const classes = useStyles();
	return (
		<>
			<Head>
				<link rel="preload" href="/fonts/belta/belta-regular.ttf" as="font" crossOrigin="" />
				<link rel="preload" href="/fonts/belta/belta-bold.ttf" as="font" crossOrigin="" />
				<link rel="preload" href="/fonts/roboto_condensed/RobotoCondensed-Regular.ttf" as="font" crossOrigin="" />
				<link rel="preload" href="/fonts/roboto_condensed/RobotoCondensed-Bold.ttf" as="font" crossOrigin="" />
			</Head>
			<Navbar navToTop={handleClickTop} navToPromo={handleClickPromo} navToIngredients={handleClickIngredients} navToAboutUs={handleClickAboutUs} />
			<Toolbar id="back-to-top-anchor" />
			<div className={cslx(classes.container, classes.landing)}>
				<Landing />
			</div>
			<div className={cslx(classes.container, classes.promo)} id="promo-anchor">
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

const handleClickTop = (event) => {
	const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

	if (anchor) {
		anchor.scrollIntoView({ behavior: "smooth", block: "center" });
	}
};

const handleClickPromo = (event) => {
	const anchor = (event.target.ownerDocument || document).querySelector("#promo-anchor");

	if (anchor) {
		anchor.scrollIntoView({ behavior: "smooth", block: "center" });
	}
};

const handleClickIngredients = (event) => {
	const anchor = (event.target.ownerDocument || document).querySelector("#ingredients-anchor");

	if (anchor) {
		anchor.scrollIntoView({ behavior: "smooth", block: "center" });
	}
};

const handleClickAboutUs = (event) => {
	const anchor = (event.target.ownerDocument || document).querySelector("#about-us-anchor");

	if (anchor) {
		anchor.scrollIntoView({ behavior: "smooth", block: "center" });
	}
};

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
		minHeight: "100vh",
		padding: "0 0.5rem",
		display: "flex",
		flexDirection: "column",
	},
	landing: {
		backgroundImage: `url(${images.fondoLanding})`,
		backgroundSize: "cover",
	},
	promo: {
		backgroundImage: `url(${images.fondoPromo})`,
		backgroundSize: "100% 100%",
	},
	video: {
		backgroundColor: Colors.azulFuerte,
	},
	ingredients: {
		display: "flex",
		height: "200vh",
		backgroundImage: `url(${images.fondoIngredientes})`,
		backgroundSize: "100% 100%",
	},
	information: {
		height: "50vh",
		backgroundColor: Colors.azulFuerte,
	},
	root: {
		position: "fixed",
		bottom: "1rem",
		right: "1rem",
	},
}));

export default Home;
