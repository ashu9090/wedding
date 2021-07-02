import React from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
import Slider from "react-slick";
import designImage from "../../assets/images/bottom.png";
import image1 from "../../assets/images/when-where.png";
import { WhenData, WhenSlider } from "../../DataConfig";

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
    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    background: "#fff",
    textAlign: "center",
    padding: "15% 20px",
    width: "80% !important",
    display: "table !important",
    height: "200px",
    margin: "0 auto",
    "& img": {
      width: "80px",
      margin: "0 auto",
    },
    "& hr": {
      width: "100%",
      display: "inline-block",
      borderColor: "#eee",
      borderWidth: "1px",
    },
    "& h4": {
      fontSize: "24px",
      fontWeight: "600",
      margin: "10px 0",
      textTransform: "uppercase",
      color: "var(--primary)",
    },
    "& p": {
      fontSize: "16px",
      color: "var(--primary)",
      fontFamily: "var(--pop) !important",
    },
    "& h3": {
      fontSize: "20px",
      fontWeight: "300",
      margin: "10px 0",
      color: "var(--primary)",
    },
  },
}));

function WhenWhere() {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
            {WhenData.map((elem, i) => {
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
              {WhenSlider.map((elem, i) => {
                const { pic, Title, Time, Paragraph } = elem;
                return (
                  <div key={(elem, i)} className={classes.slidePic}>
                    <img src={pic} alt="slider-pic" />
                    <hr />
                    <Typography variant="h4" gutterBottom>
                      {Title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {Time}
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                      {Paragraph}
                    </Typography>
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

export default WhenWhere;
