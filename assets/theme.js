import { createMuiTheme } from "@material-ui/core";
import { isMobile } from "react-device-detect";

const Colors = {
	azulFuerte: "#04213E",
	menta: "#B3DEC9",
	white: "#FFFFFF",
};

const CustomiseMeTheme = createMuiTheme({
	palette: {
		primary: {
			light: Colors.azulFuerte,
			main: Colors.azulFuerte,
			dark: Colors.azulFuerte,
		},
		secondary: {
			light: Colors.white,
			main: Colors.white,
			dark: Colors.white,
		},
	},
	typography: {
		htmlFontSize: 16,
		fontSize: 16,
		fontFamily: "Roboto Condensed, Another Wet Shabby",
		h2: {
			fontSize: isMobile ? "2rem" : "4.3rem",
			fontWeight: 300,
			fontFamily: "Roboto Condensed",
		},
		h3: {
			fontSize: isMobile ? "2rem" : "6rem",
			fontWeight: 300,
			fontFamily: "Another Wet Shabby",
		},
	},
});

export { Colors, CustomiseMeTheme };
