import React from 'react'
import "../StyleHome.css"
import slide2 from '../../../../assets/image/slide2.png'
import slide1 from '../../../../assets/image/slide1.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Carausel = () => {
  return (
    <div>
      <div className="container slide slide-response mt-5 mx-auto">
        <div className="row">
          <OwlCarousel className="owl-theme" loop margin={30} autoWidth={false} items={1} autoplayTimeout={1000} autoplay={true}>
            <div class="item mt-5">
              <img src={slide1} className="mobile-slide" alt='pic' />
              <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                <h2 className="caption">Men's Black Edition</h2>
              </div>
            </div>
            <div class="item mt-5">
              <img src={slide2} className="mobile-slide" alt='pic' />
              <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                <h2 className="caption">Trends in 2022</h2>
              </div>
            </div>
            <div class="item mt-5">
              <img src={slide1} className="mobile-slide" alt='pic' />
              <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                <h2 className="caption">men's Black Edition</h2>
              </div>
            </div>
            <div class="item mt-5">
              <img src={slide2} className="mobile-slide" alt='pic' />
              <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                <h2 className="caption">Trends in 2022</h2>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Carausel