import React, { useEffect, useState } from "react";
import { makeStyles, Paper, Grid, Typography } from "@material-ui/core";
import designImage from "../../assets/images/bottom.png";
import { PhotoAlbum, albumPhoto } from "../../DataConfig";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings: {
    overlayColor: "rgb(0, 0, 0)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: "var(--primary)",
    iconColor: "#fff",
  },
  caption: {
    captionColor: "#fff",
    fontFamily: "var(--pop) !important",
    captionFontWeight: "300",
    // captionTextTransform: "uppercase",
  },
  progressBar: {
    height: "5px",
    fillColor: "var(--primary)",
    backgroundColor: "white",
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "60px 0",
  },
  centerHeading: {
    textAlign: "center",
    boxShadow: "none",
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
  tagName: {
    textAlign: "center",
    padding: "20px 0px",
    boxShadow: "none",
    "& .tag": {
      outline: "none",
      border: "none",
      color: "#777",
      margin: "0px 10px",
      backgroundColor: "transparent",
      cursor: "pointer",
      padding: "4px 10px",
      "&:hover": {
        backgroundColor: "var(--primary)",
        color: "#fff",
      },
    },
    "& .active": {
      backgroundColor: "var(--primary)",
      color: "#fff",
    },
  },
  gridContainer: {
    width: "100%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  imageCard: {
    margin: "5px",
    // "&:hover": {
    //   boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    // },
    "& a": {
      float: "left",
      width: "100%",
      height: "300px",
      overflow: "hidden",
      "&:hover": {
        "& img": {
          transform: "scale(1.1)",
          transition: "all 1s ease",
        },
      },
    },
  },
  picSize: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 1s ease",
  },
}));

function WeddingAlbum() {
  const classes = useStyles();

  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(albumPhoto)
      : setFilteredImages(albumPhoto.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} md={8}>
          {PhotoAlbum.map((elem, i) => {
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
        <Grid item xs={12}>
          <Paper className={classes.tagName}>
            <TagButton
              name="all"
              tagActive={tag === "all" ? true : false}
              handleSetTag={setTag}
            />{" "}
            /
            <TagButton
              name="new"
              tagActive={tag === "new" ? true : false}
              handleSetTag={setTag}
            />{" "}
            /
            <TagButton
              name="free"
              tagActive={tag === "free" ? true : false}
              handleSetTag={setTag}
            />{" "}
            /
            <TagButton
              name="pro"
              tagActive={tag === "pro" ? true : false}
              handleSetTag={setTag}
            />
          </Paper>
        </Grid>
      </Grid>

      <div className="App">
        <SRLWrapper options={options}>
          <div className={classes.gridContainer}>
            {filteredImages.map((image) => (
              <div key={image.id} className={classes.imageCard}>
                <a href={image.imageName}>
                  <img
                    className={classes.picSize}
                    src={image.imageName}
                    alt="gpic"
                  />
                </a>
              </div>
            ))}
          </div>
        </SRLWrapper>
      </div>
    </div>
  );
}
const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
export default WeddingAlbum;
