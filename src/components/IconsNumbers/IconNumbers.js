import React from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";

import { IconNumberData } from "../../DataConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "60px 0",
  },
  centerHeading: {
    textAlign: "center",
    boxShadow: "none",
    background: "none",
    fontFamily: "var(--pop) !important",
    "& i": {
      color: "var(--primary)",
      fontSize: "46px",
      marginBottom: "10px",
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
}));

function IconNumbers() {
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
          {" "}
          {IconNumberData.map((elem, i) => {
            const { Title, Paragraph, Icon } = elem;
            return (
              <Grid item xs={12} md={3} key={(elem, i)}>
                <Paper className={classes.centerHeading}>
                  <i className={Icon}></i>
                  <Typography variant="h4" gutterBottom>
                    {Title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {Paragraph}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default IconNumbers;
