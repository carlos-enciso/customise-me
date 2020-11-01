import "../styles/globals.css";
import { CustomiseMeTheme } from "../assets/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
	return (
		<MuiThemeProvider theme={CustomiseMeTheme}>
			<Component {...pageProps} />
		</MuiThemeProvider>
	);
}

export default MyApp;
