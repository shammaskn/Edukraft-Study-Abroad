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
            <p className="subpara pb-3">Your Trusted Learning Partner</p>


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





      <div className="container-fluid cmpad py-5">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="mainhead">Top Study Destinations</h1>
            <p className="subpara pb-3">Our partnerships extend to more than 100 prestigious educational institutions across five countries.</p>


            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={1500}
              loop={true}
              modules={[EffectFade, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="study">
                  <img src="assets/study/uk.jpg" alt="" />
                  <p>United Kingdom</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="study">
                  <img src="assets/study/ireland.jpg" alt="" />
                  <p>Ireland</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="study">
                  <img src="assets/study/germany.jpg" alt="" />
                  <p>Germany</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="study">
                  <img src="assets/study/germany.jpg" alt="" />
                  <p>Germany</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="study">
                  <img src="assets/study/uk.jpg" alt="" />
                  <p>United Kingdom</p>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
        </div>
      </div>


      <div className="container-fluid cmpad py-5">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="mainhead pb-3">Discover Top Rated Universities</h1>


            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={2000}
              loop={true}
              modules={[EffectFade, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="study">
                  <img src="assets/university/coventry.jpg" alt="" />
                  <p>University of Coventry</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="study">
                  <img src="assets/university/lincoln.jpg" alt="" />
                  <p>University of Lincoln</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="study">
                  <img src="assets/university/chester.jpg" alt="" />
                  <p>University of Chester</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="study">
                  <img src="assets/university/coventry.jpg" alt="" />
                  <p>University of Coventry</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="study">
                  <img src="assets/university/lincoln.jpg" alt="" />
                  <p>University of Lincoln</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="study">
                  <img src="assets/university/chester.jpg" alt="" />
                  <p>University of Chester</p>
                </div>
              </SwiperSlide>

            </Swiper>

          </div>
          <div className="col-sm-12 mt-5 d-flex justify-content-end">
            <a href="" className="bttn">Explore More</a>
          </div>
        </div>
      </div>




      <div className="testimonials">
        <div className="container-fluid cmpad py-5">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="mainhead pb-3">Hear from Our Students!</h1>


              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                  delay: 1300,
                  disableOnInteraction: false,
                }}
                // effect={'fade'}
                speed={2300}
                loop={true}
                modules={[EffectFade, Pagination, Autoplay]}
              >
                <SwiperSlide>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testi-img">
                        <img src="assets/testimonials/testi1.jpg" alt="" />

                        <img src="assets/icons/play.svg" alt="" className="play" />

                        <p>Zerin, UK</p>
                      </div>
                    </div>
                    <div className="col-sm-6 flexVcenter">
                      <p className="testipara">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                      <h6>-Zerin, UK</h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testi-img">
                        <img src="assets/testimonials/testi1.jpg" alt="" />

                        <img src="assets/icons/play.svg" alt="" className="play" />

                        <p>Zerin, UK</p>
                      </div>
                    </div>
                    <div className="col-sm-6 flexVcenter">
                      <p className="testipara">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                      <h6>-Zerin, UK</h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testi-img">
                        <img src="assets/testimonials/testi1.jpg" alt="" />

                        <img src="assets/icons/play.svg" alt="" className="play" />

                        <p>Zerin, UK</p>
                      </div>
                    </div>
                    <div className="col-sm-6 flexVcenter">
                      <p className="testipara">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                      <h6>-Zerin, UK</h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testi-img">
                        <img src="assets/testimonials/testi1.jpg" alt="" />

                        <img src="assets/icons/play.svg" alt="" className="play" />

                        <p>Zerin, UK</p>
                      </div>
                    </div>
                    <div className="col-sm-6 flexVcenter">
                      <p className="testipara">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                      <h6>-Zerin, UK</h6>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>

            </div>

          </div>
        </div>
      </div>





        <div className="container-fluid cmpad py-5">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="mainhead pb-3">We will support you every step of the way</h1>


              

            </div>

          </div>
        </div>
      






    </>
  );
};

export default Home;
