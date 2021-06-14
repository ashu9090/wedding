import React from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import imageName from "../../assets/images/jenny-bg.png";
import nameImage from "../../assets/images/frem.png";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "60px 0",
    backgroundImage: "url(" + imageName + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  centerName: {
    background: "none",
    boxShadow: "none",
    position: "relative",
    height: "800px",
    "& img": {
      height: "100%",
      width: "100%",
    },
  },
  wedNames: {
    background: "none",
    boxShadow: "none",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translateX(-50%)",
    color: "var(--primary)",
    "& h4": {
      fontFamily: "var(--alex)",
      fontSize: "46px",
    },
    "& h5": {
      textTransform: "uppercase",
      fontSize: "32px",
      fontWeight: "600",
      fontFamily: "var(--pop) !important",
    },
    "& h6": {
      fontSize: "16px",
      fontFamily: "var(--pop) !important",
    },
  },
}));

function Names() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} md={6}>
          <Paper className={classes.centerName}>
            <img src={nameImage} alt="namesBox" />
            <Paper className={classes.wedNames}>
              <Typography variant="h4" gutterBottom>
                Jenny
              </Typography>
              <Typography variant="h4" gutterBottom>
                &
              </Typography>
              <Typography variant="h4" gutterBottom>
                Jerom
              </Typography>
              <Typography variant="h5" gutterBottom>
                heaven GARDEN
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                399 Angel Street New York
              </Typography>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Names;
