import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const photos = [
  {
    src:
      "https://a0.muscache.com/im/pictures/238aad54-2755-4839-8baf-8b46959ffd0c.jpg?aki_policy=x_large",
    width: 7,
    height: 5
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/b6e4364c-ac5c-4117-93cd-a42c990c834a.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/f7f0abbf-8bdb-4023-8b4c-29667a86fc8e.jpg?aki_policy=x_large",
    width: 1,
    height: 1
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/f76e3886-8aef-4831-a83a-0d52166ee714.jpg?aki_policy=x_large",
    width: 3,
    height: 5
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/7a6d750d-7ada-4fa0-8227-b7042ade3fbd.jpg?aki_policy=x_large",
    width: 3,
    height: 4
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/92988091-a062-46c1-ab3a-ab1f6fc4e84f.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/56bf4517-d621-4f7b-8711-f8322a101800.jpg?aki_policy=x_large",
    width: 3,
    height: 4
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/64357037-dd4c-44bf-aa73-6567e21a3124.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/7761fea1-75de-401a-b528-cb4c997ee410.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },

  {
    src:
      "https://a0.muscache.com/im/pictures/0d92850c-c27a-46a2-be2b-3e9c20481b09.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/787a4d5b-2723-4a8f-a55f-da03920e3693.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/24fe9e08-e3ef-4e6f-9f74-cc72e7ddd5e2.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },

  {
    src:
      "https://a0.muscache.com/im/pictures/74920e55-355b-4709-afa6-bdb05659da26.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/acd94869-755e-462e-99f9-0bb79489bdf5.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/ff9eaa4a-fa32-423c-a090-d7f5de04e0e8.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  }
];

class Images extends React.Component {
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
export default Images;
render(<Images />, document.getElementById("root"));
