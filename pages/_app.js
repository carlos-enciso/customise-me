import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import { CustomiseMeTheme } from "../assets/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<>
			<Head>
				<link rel="preload" href="/fonts/belta/belta-regular.ttf" as="font" crossOrigin="" />
				<link rel="preload" href="/fonts/belta/belta-bold.ttf" as="font" crossOrigin="" />
				<link rel="preload" href="/fonts/roboto_condensed/RobotoCondensed-Regular.ttf" as="font" crossOrigin="" />
				<link rel="preload" href="/fonts/roboto_condensed/RobotoCondensed-Bold.ttf" as="font" crossOrigin="" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<MuiThemeProvider theme={CustomiseMeTheme}>
				<Component {...pageProps} />
			</MuiThemeProvider>
		</>
	);
}

export default MyApp;
