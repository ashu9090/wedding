import React from "react";
import {
  Container,
  Paper,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import designImage from "../../assets/images/bottom.png";
import { MeetCenter, MeetData } from "../../DataConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "60px 0",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
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
  cPhoto: {
    boxShadow: "none",
    "& img": { width: "100%" },
  },
  aboutText: {
    boxShadow: "none",
    color: "var(--primary)",
    "& h6": { fontSize: "16px", fontWeight: "600" },
    "& h2": {
      textTransform: "capitalize",
      fontSize: "34px",
      fontWeight: "800",
    },
    "& p": { fontSize: "16px", marginBottom: "20px", float: "left" },
  },
  linkBtn: {
    color: "#fff",
    background: "linear-gradient(#c0872e, #eac575)",
    borderRadius: "100px",
    padding: "12px 30px",
    display: "inline-block",
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
          <Grid item xs={12} md={8}>
            {MeetCenter.map((elem, i) => {
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
        {MeetData.map((elem, i) => {
          const { TagLine, Title, Paragraph, LinkPath, pic1 } = elem;
          return (
            <Grid
              key={(elem, i)}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12} md={4}>
                <Paper className={classes.cPhoto}>
                  <img src={pic1} alt="cPic" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.aboutText}>
                  <Typography variant="h6" gutterBottom>
                    {TagLine}
                  </Typography>
                  <Typography variant="h2" gutterBottom>
                    {Title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {Paragraph}
                  </Typography>
                  <Link
                    to={LinkPath}
                    className={classes.linkBtn}
                    target="_blank"
                  >
                    Read More
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </div>
  );
}

export default MeetHappy;
