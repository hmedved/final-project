import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const photos = [
  {
    src:
      "https://a0.muscache.com/im/pictures/00c35cc1-9d22-4fc8-a8ed-bf274412c85b.jpg?aki_policy=xx_large",
    width: 7,
    height: 5
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/00b23ae6-3f53-4164-8d61-0bbc09f07fb6.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/11fd66ed-b25e-4af4-bbd4-490b30aec782.jpg?aki_policy=x_large",
    width: 6,
    height: 5
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/7f70fa78-a9cf-418d-ad77-e5229bd57628.jpg?aki_policy=x_large",
    width: 9,
    height: 6
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/b8efacc1-e545-4f12-9892-f193a15b2c7f.jpg?aki_policy=x_large",
    width: 3,
    height: 4
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/d2704d40-bf63-4e6b-ae41-5d6fd2fe419d.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/bee79a79-ff7e-4b75-839b-1b2f841d8a48.jpg?aki_policy=x_large",
    width: 6,
    height: 5
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/00ae9c6f-695d-4878-860f-79637ad2d2c4.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/64e409bd-f84f-40fa-9d0b-cd7ab0ae5387.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },

  {
    src:
      "https://a0.muscache.com/im/pictures/10391d5c-2936-42e7-ba16-7e51db093e66.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/62832be0-be13-400e-aab5-8117e7706d5a.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/9bec0287-8f2e-4571-b310-aad93325dbed.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },

  {
    src:
      "https://a0.muscache.com/im/pictures/2c5cd2ca-0dca-4786-87a1-d9d1b30a47ad.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/5ec7ef9a-d589-466b-a232-0e987ce3b861.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/25c9dd1f-457d-4f10-b1cf-b9d4b477fe0a.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/8fa9bded-5bdf-4ea3-be55-e3eb873303c0.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/a65561df-8efd-412f-ae46-3ae578377395.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/4699ebff-d58f-47b1-9dae-9b2b2423c140.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/61307711-3bd0-4395-b832-36bf9a407da1.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  },
  {
    src:
      "https://a0.muscache.com/im/pictures/7aae5d73-b244-4e91-9ffc-dcd7b6fa2b96.jpg?aki_policy=x_large",
    width: 4,
    height: 3
  }
];

class Oldhouseimages extends React.Component {
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
export default Oldhouseimages;
render(<Oldhouseimages />, document.getElementById("root"));
