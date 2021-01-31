import React, { Component } from "react";
import { makeStyles } from "@material-ui/core";
import Slider from "react-slick";
import "./styles.css";

const useStyles = makeStyles(() => ({
  img: {
    height: "220px",
    width: "100%",
    objectFit: "contain",
    display: "block",
    padding: "10px 0",
    margin: "0 auto",
    "@media (max-width: 900px)": {
      height: "200px",
      width: "100%",
    },
  },
}));

const defaultSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  cssEase: "linear",
};

const SliderImages = ({ images, settings = defaultSettings }) => {
  const classes = useStyles();
  return (
    <Slider {...settings}>
      {images &&
        images.map((img) => {
          return (
            <div
              style={{
                width: "100%",
                height: "80%",
                textAlign: "center",
                outlined: "none",
              }}
            >
              <img src={img} alt={img} className={classes.img} />
            </div>
          );
        })}
    </Slider>
  );
};

export default SliderImages;
