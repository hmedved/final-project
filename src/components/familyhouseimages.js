import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const photos = [
  {
    src: "",
    width: 7,
    height: 5
  },
  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 6,
    height: 5
  },
  {
    src: "",
    width: 9,
    height: 6
  },
  {
    src: "",
    width: 3,
    height: 4
  },
  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 6,
    height: 5
  },
  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 4,
    height: 3
  },

  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 4,
    height: 3
  },

  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 4,
    height: 3
  },
  {
    src: "",
    width: 4,
    height: 3
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
