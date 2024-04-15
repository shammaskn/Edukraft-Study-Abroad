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
                  <h3>10+</h3>
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



      <div className="we-offer">
        <div className="container-fluid cmpad py-5">
          <div className="row abt mt-3">
            <div className="col-sm-6 flexVcenter">

              <h2 className="mainhead">What we offer?</h2>
              <p className="">We are here to take your burden and help you achieve your goals without worrying. We have designed our services, keeping your ease and convenience in mind. Our expert and qualified team will provide you with any services that a student can need, from complete advice and guidance about your education options and routs applications, visa services, transportation arrangements and accommodation arrangements if needed.</p>

              <a href="" className="arr">Read More <img src="/assets/icons/arrow.svg" alt="" /> </a>

            </div>
            <div className="col-sm-6">


              <ul className="we-list">
                <li>
                  <div className="we-box">
                    <img src="/assets/icons/f1.svg" alt="" />
                    <p>Curated selection of programmes from partner Universities</p>
                  </div>
                </li>
                <li>
                  <div className="we-box">
                  <img src="/assets/icons/f2.svg" alt="" />
                    <p>Guidance on choosing courses, countries and universities from experts</p>
                  </div>
                </li>
                <li>
                  <div className="we-box">
                  <img src="/assets/icons/f3.svg" alt="" />
                    <p>IELTS/TOEFL Preparation</p>
                  </div>
                </li>
                <li>
                  <div className="we-box">
                  <img src="/assets/icons/f4.svg" alt="" />
                    <p>Editing and Processing Application Guidelines</p>
                  </div>
                </li>


              </ul>


            </div>
          </div>
        </div>
      </div>






    </>
  );
};

export default Home;
