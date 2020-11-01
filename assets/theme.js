import { createMuiTheme } from "@material-ui/core";

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
		fontFamily: "Segoe UI, Belta",
		h2: {
			fontWeight: 300,
			fontFamily: "Roboto Condensed",
		},
		h3: {
			fontSize: "6rem",
			fontWeight: 600,
			fontFamily: "Belta",
		},
	},
});

export { Colors, CustomiseMeTheme };
