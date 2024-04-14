"use client";
import Image from "next/image";
import Nav from "@Components/Nav";
import Section from "@Components/section";
// core version + navigation, pagination modules:
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';




const Home = () => {



  return (

    <>
      <div className="slider">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1500}
          loop={true}
          modules={[EffectFade, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slideimg" style={{ backgroundImage: `url(/assets/slider/slide1.jpg)` }}>
              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6 cmpad">
                  <div className="slidercon">
                    <h2>Fulfil your Career Ambitions!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dolore? Similique temporibus porro dolorum minus quae et laborum aperiam natus cupiditate, sapiente, aliquid animi, atque ex! Unde consequuntur quasi voluptatem?</p>
                    <a href="" className="bttn">Book Your Free Consultation</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideimg" style={{ backgroundImage: `url(/assets/slider/slide2.jpg)` }}>
              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6 cmpad">
                  <div className="slidercon">
                    <h2>95% of our students got admission in less than 14 days</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dolore? Similique temporibus porro dolorum minus quae et laborum aperiam natus cupiditate, sapiente, aliquid animi, atque ex! Unde consequuntur quasi voluptatem?</p>
                    <a href="" className="bttn">Book Your Free Consultation</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideimg" style={{ backgroundImage: `url(/assets/slider/slide3.jpg)` }}>
              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6 cmpad">
                  <div className="slidercon">
                    <h2>Turn your dream of studying abroad a reality</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dolore? Similique temporibus porro dolorum minus quae et laborum aperiam natus cupiditate, sapiente, aliquid animi, atque ex! Unde consequuntur quasi voluptatem?</p>
                    <a href="" className="bttn">Book Your Free Consultation</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      <div className="container-fluid cmpad py-5">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="mainhead">Hello, We Are Edukraft</h1>
            <p className="subpara pb-5">Your Trusted Learning Partner</p>


            <ul className="abtlist">
              <li>
                <div className="abtbox">
                  <h3>10 +</h3>
                  <p>Years experience helping students find their study find their study abroad destination</p>
                </div>
              </li>
              <li>
                <div className="abtbox">
                  <h3>10K+</h3>
                  <p>Study abroad students & Alumni</p>
                </div>
              </li>
              <li>
                <div className="abtbox">
                 <img src="/assets/images/british.png" />
                  <p>British Council Certified</p>
                </div>
              </li>
              <li>
                <div className="abtbox">
                <img src="/assets/images/oisc.png" />                  
                  <p>OISC Authorized</p>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>






    </>
  );
};

export default Home;
