import React from "react";
import { Typography, makeStyles, Paper, Grid } from "@material-ui/core";
import image1 from "../../assets/images/slider-bg.png";
import image2 from "../../assets/images/bottom-pattern.png";
import image3 from "../../assets/images/top-pattern.png";
import designImage from "../../assets/images/bottom.png";
import { BannerData } from "../../DataConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: "url(" + image1 + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
    overflow: "hidden",
    paddingTop: "200px",
    width: "100%",
  },
  imageTop: {
    position: "absolute",
    right: "0",
    width: "580px",
    top: "0",
  },
  imageBottom: {
    position: "absolute",
    left: "0",
    width: "300px",
    bottom: "0",
  },
  gImage: {
    background: "none",
    boxShadow: "none",
    "& img": {
      width: "100%",
    },
  },
  logoNameText: {
    width: "500px",
  },
  girlHeading: {
    background: "none",
    boxShadow: "none",
  },
  bannerText: {
    color: "var(--primary)",
    fontSize: "14px",
    marginBottom: "15px",
    marginLeft: "90px",
  },
  designPhoto: {
    width: "150px",
    marginLeft: "90px",
  },
}));

function HeroBanner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={image3} alt="features" className={classes.imageTop} />
      <img src={image2} alt="features" className={classes.imageBottom} />
      {BannerData.map((elem, i) => {
        const { pic1, Title, Paragraph } = elem;
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
              <Paper className={classes.gImage}>
                <img src={pic1} alt="girlImage" />
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper className={classes.girlHeading}>
                <img
                  src={Title}
                  alt="logoName"
                  className={classes.logoNameText}
                />
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.bannerText}
                >
                  {Paragraph}
                </Typography>
                <img
                  src={designImage}
                  alt="design"
                  className={classes.designPhoto}
                />
              </Paper>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}

export default HeroBanner;
