import React from "react";
import { makeStyles, Paper, Grid, Typography } from "@material-ui/core";
import imageName from "../../assets/images/jenny-bg.png";

import { NameData } from "../../DataConfig";

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
          {NameData.map((elem, i) => {
            const { pic1, girlName, boyName, address1, address2 } = elem;
            return (
              <Paper className={classes.centerName} key={(elem, i)}>
                <img src={pic1} alt="namesBox" />
                <Paper className={classes.wedNames}>
                  <Typography variant="h4" gutterBottom>
                    {girlName}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    &
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {boyName}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {address1}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {address2}
                  </Typography>
                </Paper>
              </Paper>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default Names;
