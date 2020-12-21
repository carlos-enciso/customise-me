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
				<title>CustomiseMe</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<MuiThemeProvider theme={CustomiseMeTheme}>
				<Component {...pageProps} />
			</MuiThemeProvider>
		</>
	);
}

export default MyApp;
