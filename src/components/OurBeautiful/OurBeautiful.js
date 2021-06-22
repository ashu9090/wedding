import React from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import designImage from "../../assets/images/bottom.png";

import { BeautifulData, BeautifulSlider } from "../../DataConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "60px 0",
    // "& .slick-dots": {
    //   "& .slick-active": {
    //     "& button": {
    //       "&:before": { background: "var(--primary)" },
    //     },
    //   },
    // },
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
    width: "90% !important",
    display: "table !important",
    margin: "0 auto",
    "& img": {
      width: "100%",
    },
  },
  cText: {
    boxShadow: "none",
    padding: "15px",
    "& h3": {
      fontSize: "20px",
      fontWeight: "600",
      margin: "0 0 10px 0",
      color: "var(--primary)",
    },
    "& p": {
      fontSize: "14px",
      fontWeight: "300",
      margin: "0 0 15px 0",
      color: "var(--primary)",
    },
    "& a": {
      fontSize: "14px",
      fontWeight: "300",
      display: "inline-block",
      color: "var(--primary)",
      border: "1px solid var(--primary)",
      padding: "10px 30px",
      textDecoration: "none",
      "&:hover": {
        background: "var(--primary)",
        color: "#fff",
      },
    },
  },
  cPhoto: {
    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
  },
}));

function OurBeautiful() {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
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
            {BeautifulData.map((elem, i) => {
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
          <Grid item xs={12}>
            <Slider {...settings}>
              {BeautifulSlider.map((elem, i) => {
                const { pic, Date, Paragraph } = elem;
                return (
                  <div key={(elem, i)} className={classes.slidePic}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Paper className={classes.cPhoto}>
                          <img src={pic} alt="slider-pic" />
                        </Paper>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Paper className={classes.cText}>
                          <Typography variant="h3" gutterBottom>
                            {Date}
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            {Paragraph}
                          </Typography>
                          <Link to="/">Read More</Link>
                        </Paper>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default OurBeautiful;
