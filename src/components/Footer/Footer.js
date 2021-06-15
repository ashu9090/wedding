import React from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Typography,
  Container,
  Input,
  Button,
} from "@material-ui/core";
import { FooterData } from "../../DataConfig";
import image1 from "../../assets/images/attend.png";
import designImage from "../../assets/images/bottom.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "80px 0 0 0",
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
  copyRight: {
    boxShadow: "none",
    marginTop: "80px",
  },
  sIcons: {
    padding: "0px",
    listStyle: "none",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    "& li": {
      margin: "0 10px",
      "& a": {
        color: "var(--primary)",
        fontSize: "20px",
      },
    },
  },
  newsLetter: {
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: "100px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    "& .MuiInput-underline": {
      width: "70%",
    },
    "& input": {
      color: "#000",
      borderBottom: "none",
      padding: "10px",
      fontSize: "18px",
      width: "100%",
      "&:hover": {
        borderBottom: "none",
      },
    },
    "& .MuiInputAdornment-positionStart ": {
      color: "#595959",
    },
    "& .MuiInput-underline::after": {
      borderBottom: "none",
    },
    "& .MuiInput-underline::before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled)::before": {
      borderBottom: "none",
    },
  },
  btnStyle: {
    border: "none",
    color: "#ffffff",
    fontWeight: "700",
    borderRadius: "100px",
    padding: "14px 35px",
    fontSize: "16px",
    textTransform: "uppercase",
    textAlign: "center",
    background: "linear-gradient(#c0872e, #eac575)",
  },
}));

function Footer() {
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
            {FooterData.map((elem, i) => {
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
          <Grid item xs={12} md={6}>
            <form noValidate autoComplete="off" className={classes.newsLetter}>
              <Input
                id="input-with-icon-adornment"
                placeholder="Your Address"
              />

              <Button type="submit" className={classes.btnStyle}>
                Send Now
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Paper className={classes.copyRight}>
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} md={4}>
              <ul className={classes.sIcons}>
                <li>
                  <Link to="/">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
}

export default Footer;
