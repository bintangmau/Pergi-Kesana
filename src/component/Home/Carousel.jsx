import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";

class Carousel extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://cdn.cnn.com/cnnnext/dam/assets/180306155501-best-london-luxury-hotels---penthouse-terrace-corinthia-hotel-london-full-169.jpg"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Pergi Kesana</h3>
            <p>Tersedia Hotel dan Tiket pesawat dalam satu paket jalan</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://allhdwallpapers.com/wp-content/uploads/2015/06/Istanbul-10.jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Cari Masjid ?</h3>
            <p>Tersedia info mengenai masjid sekitar destinasi</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://www.pixelstalk.net/wp-content/uploads/2016/11/Europe-wallpaper-photo-1920x1080.jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Bingung Mau kemana?</h3>
            <p>Guide ramah yang profesional</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
            </div>
        );
    }
}

export default Carousel;