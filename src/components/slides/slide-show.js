import React from "react";
import Carousel from 'react-bootstrap/Carousel';
//images must use file path from slide-show.js
const SlideShow = (props) => {
  const {image1, image2, image3} = props;
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        {//<Carousel.Caption>
          //<h3>First slide label</h3>
          //<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //</Carousel.Caption>
      }
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        {//<Carousel.Caption>
          //<h3>First slide label</h3>
          //<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //</Carousel.Caption>
      }
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        {//<Carousel.Caption>
          //<h3>First slide label</h3>
          //<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //</Carousel.Caption>
      }
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;