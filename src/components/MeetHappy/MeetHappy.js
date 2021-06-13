import React from "react";
import {
  Container,
  Paper,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import designImage from "../../assets/images/bottom.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "60px 0",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  centerHeading: {
    textAlign: "center",
    boxShadow: "none",
    marginBottom: "50px",
    "& img": {
      width: "200px",
    },
    "& h4": {
      color: "var(--primary)",
      fontWeight: "600",
    },
    "& p": {
      fontSize: "16px",
      color: "var(--primary)",
    },
  },
}));

function MeetHappy() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={8}>
            <Paper className={classes.centerHeading}>
              <img src={designImage} alt="design-center" />
              <Typography variant="h4" gutterBottom>
                Meet Happy Couple
              </Typography>
              <Typography variant="body1" gutterBottom>
                A beautiful app for consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut mollit anim id est laborum. Sedut
                perspiciatis unde omnis.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MeetHappy;
