import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const photos = [
  {
    src:
      "https://a0.muscache.com/im/pictures/83399283-ebcc-450c-9d5d-58bed3c478b1.jpg?aki_policy=xx_large",
    width: 7,
    height: 5
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/2496c81c-5725-4d4b-a242-a4eeacc983c3.jpg?aki_policy=x_large",
    width: 2,
    height: 4
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/89c68a1f-12ae-475c-900a-dbf31ee2f97c.jpg?aki_policy=x_large",
    width: 9,
    height: 6
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/caed2c33-2908-45b5-97b4-2e3fcccb34f8.jpg?aki_policy=x_large",
    width: 3,
    height: 7
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/1b5b336a-ca5e-4a31-a556-a49d4e26651f.jpg?aki_policy=x_large",
    width: 9,
    height: 7
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/558c0bcc-d501-4e29-81f0-89e3b19ea12c.jpg?aki_policy=x_large",
    width: 9,
    height: 7
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/8496261e-510d-44df-804d-41833a7e0e5e.jpg?aki_policy=x_large",
    width: 9,
    height: 7
  },

  {
    src:
      "https://a0.muscache.com/im/pictures/e908949a-1875-42ba-86b8-6177baee7cbd.jpg?aki_policy=x_large",
    width: 9,
    height: 7
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/d3e8cb44-5a0b-4287-b481-0ddfa0b30752.jpg?aki_policy=x_large",
    width: 9,
    height: 7
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/6a7b70e6-6f3a-4efc-9aa9-1a42b84e9c7c.jpg?aki_policy=x_large",
    width: 9,
    height: 7
  },

  {
    src:
      "https://a0.muscache.com/im/pictures/db34f871-ae6b-4780-bfc2-98df7d213653.jpg?aki_policy=x_large",
    width: 9,
    height: 7
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/1d5d3fc7-da8b-4a83-bfbf-2073ece9539d.jpg?aki_policy=x_large",
    width: 9,
    height: 7
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/d33e3825-8e73-4511-9cdd-4442dcce0b6b.jpg?aki_policy=x_large",
    width: 9,
    height: 7
  },
  {
    src: "",
    width: 9,
    height: 7
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/88d0decb-8489-488a-b65b-d071e7ab85ba.jpg?aki_policy=x_large",
    width: 9,
    height: 7
  }
];

class Familyhouseimages extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}
export default Familyhouseimages;
render(<Familyhouseimages />, document.getElementById("root"));
