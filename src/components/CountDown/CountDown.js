import React, { useEffect, useRef, useState } from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
import designImage from "../../assets/images/bottom.png";
import image1 from "../../assets/images/wishes.png";
import { CountData } from "../../DataConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "60px 0",
    backgroundImage: "url(" + image1 + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  centerHeading: {
    textAlign: "center",
    boxShadow: "none",
    background: "none",
    marginBottom: "50px",
    fontFamily: "var(--pop) !important",
    "& img": {
      width: "200px",
    },
    "& h4": {
      color: "var(--primary)",
      fontWeight: "600",
      textTransform: "capitalize",
      fontFamily: "var(--pop) !important",
    },
    "& p": {
      fontSize: "16px",
      color: "var(--primary)",
      fontFamily: "var(--pop) !important",
    },
  },
  slidePic: {
    "& img": {
      width: "100%",
      filter: "grayscale(100%)",
    },
    "&:hover": {
      "& img": {
        filter: "grayscale(0%)",
      },
    },
  },
  cuBox: {
    textAlign: "center",
    boxShadow: "none",
    borderRadius: "0px",
    padding: "20px 10px",
    position: "relative",
    zIndex: "3",
    "&::before": {
      content: `''`,
      bottom: "-10px",
      right: "10px",
      borderBottom: "4px solid #c59240",
      borderRight: "4px solid #c59240",
      zIndex: "-1",
      position: "absolute",
      width: "98%",
      height: "6px",
    },
    "&::after": {
      content: `''`,
      left: "-10px",
      top: "10px",
      borderLeft: "4px solid #c59240",
      borderTop: "4px solid #c59240",
      bottom: "-10px",
      zIndex: "-1",
      position: "absolute",
      height: "97%",
      width: "6px",
    },
    "& h3": {
      color: "#c59240",
      fontSize: "30px",
      fontWeight: "600",
    },
    "& p": {
      color: "#c59240",
      fontSize: "30px",
      fontWeight: "600",
      fontFamily: "var(--alex)",
    },
  },
  calDetails: {
    marginTop: "40px",
    textAlign: "center",
    "& h4": {
      color: "#c59240",
      fontSize: "24px",
    },
    "& h5": {
      color: "#c59240",
      fontSize: "20px",
    },
  },
}));

function CountDown() {
  const classes = useStyles();
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSecounds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("july 29 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
      );
      const secounds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSecounds(secounds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

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
          <Grid item xs={12} md={8}>
            {CountData.map((elem, i) => {
              const { Title, Paragraph } = elem;
              return (
                <Paper className={classes.centerHeading} key={(elem, i)}>
                  <img src={designImage} alt="design-center" />
                  <Typography variant="h4" gutterBottom>
                    {Title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {Paragraph}
                  </Typography>
                </Paper>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Paper className={classes.cuBox}>
                  <Typography variant="h3" gutterBottom>
                    {timerDays}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Days
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={classes.cuBox}>
                  <Typography variant="h3" gutterBottom>
                    {timerHours}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Hours
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={classes.cuBox}>
                  <Typography variant="h3" gutterBottom>
                    {timerMinutes}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Minutes
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={classes.cuBox}>
                  <Typography variant="h3" gutterBottom>
                    {timerSeconds}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Seconds
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} className={classes.calDetails}>
            <Typography variant="h4" gutterBottom>
              <i className="fas fa-map-marker-alt"></i> Zexson Pro, New York, NY
              254
            </Typography>
            <Typography variant="h5" gutterBottom>
              <i className="fas fa-calendar-alt"></i> 01-04 March 2019
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CountDown;
