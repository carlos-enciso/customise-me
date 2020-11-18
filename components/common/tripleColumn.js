import React from "react";
import { makeStyles } from "@material-ui/core/";
import { isMobile } from "react-device-detect";

const TripleColumnComponent = (props) => {
	const classes = useStyles(isMobile);
	const { children } = props;
	return (
		<div className={classes.wrapper}>
			<div className={classes.column}>{children[0]}</div>
			<div className={classes.column}>{children[1]}</div>
			<div className={classes.column}>{children[2]}</div>
		</div>
	);
};

const useStyles = makeStyles({
	wrapper: {
		display: "flex",
		flexDirection: "row",
	},
	column: {
		display: "flex",
		flex: 1,
	},
});

export default TripleColumnComponent;
