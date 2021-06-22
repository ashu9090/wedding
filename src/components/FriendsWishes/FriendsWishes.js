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
import image1 from "../../assets/images/wishes.png";
import { FriendData, Testimonial } from "../../DataConfig";

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
  Testimo: {
    textAlign: "center",
    background: "#fff",
    border: "1px solid var(--primary)",
    padding: " 90px 20px",
    boxShadow: "0 0 10px #fff",
    margin: "0 auto",
    width: "83% !important",
    display: "table !important",
    // position: "relative",
    // "&:after": {
    //   position: "absolute",
    //   content: "",
    //   border: "1px solid var(--primary)",
    //   inset: "10px 10px 10px 10px",
    // },

    "& p": {
      fontSize: "24px",
      color: "var(--primary)",
      fontWeight: "300",
    },
    "& h3": {
      fontSize: "18px",
      color: "var(--primary)",
      fontWeight: "600",
      textTransform: "capitalize",
    },
    "& h6": {
      fontSize: "14px",
      color: "var(--primary)",
      fontWeight: "300",
    },
  },
}));

function Gift() {
  const classes = useStyles();
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
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
            {FriendData.map((elem, i) => {
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
          <Grid item xs={12} md="8">
            <Slider {...settings}>
              {Testimonial.map((elem, i) => {
                const { Name, Post, Paragraph } = elem;
                return (
                  <div key={(elem, i)} className={classes.Testimo}>
                    <Typography variant="body1" gutterBottom>
                      {Paragraph}
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                      {Name}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {Post}
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

export default Gift;
