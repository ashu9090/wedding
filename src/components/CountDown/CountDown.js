import React from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
// import Slider from "react-slick";
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
}));

function CountDown() {
  const classes = useStyles();
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };
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
          {/* <Grid item xs={12}>
            <Slider {...settings}>
              {GiftSlider.map((elem, i) => {
                const { pic } = elem;
                return (
                  <div key={(elem, i)} className={classes.slidePic}>
                    <img src={pic} alt="slider-pic" />
                  </div>
                );
              })}
            </Slider>
          </Grid>*/}
        </Grid>
      </Container>
    </div>
  );
}

export default CountDown;
