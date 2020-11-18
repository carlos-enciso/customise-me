import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";
import { Colors } from "../assets/theme";

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
			<div className={classes.footerContainer}>
				<Typography variant="caption" color="secondary">
					"First and foremost, the center of the deep analysis will possibly result in The Program of Powerful Extent" (Adam Denton in The Book of the Source of Permanent
					Growth) In particular, the exceptional results of the major outcomes can hardly be compared with the general features and possibilities of the best practice
					patterns. Naturally, the deep analysis should focus on the systolic approach. We must be ready for specific action result and constructive criticism
					investigation of the irrelevance of ground. Perhaps we should also point out the fact that the design patterns provides a deep insight into the questionable
					thesis. Let's consider, that study of full-featured practices should correlate with the preliminary action plan.
				</Typography>
			</div>
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
		fontSize: "2rem",
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
});

export default AboutUsComponent;
