import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { GoogleReviewData } from "../../../../data/google_review_data";
SwiperCore.use([Pagination]);
const GoogleReviewsHomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-1 py-md-2 m-0 px-md-3 px-lg-5 row w-100 p-0 m-0 background_style-googlereview googleReviews_pag">
      <div className="w-100 pt-5 mt-5 d-flex justify-content-center p-0 py-3 m-0 w-100 text-center">
        <div className="d-block">
          {/* <img
            className="d-none d-md-inline pr-3"
            src="/images/home/left.png"
          /> */}
        </div>
        <h3 className="p-0 m-0 title_our_brands text-center">
          <b>Customer Reviews</b>
        </h3>
        {/* <div className="d-block ">
          <img
            className="d-none d-md-inline pl-3"
            src="/images/home/right.png"
          />
        </div> */}
      </div>

      <Swiper
        className="p-0 m-0 w-100 py-5"
        // slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          // 992: {
          //   slidesPerView: 3,
          // },
        }}
        autoplay={{
          delay: 3000,
        }}
        onSlideChange={(props) => setActiveIndex(props.activeIndex)}
        pagination={true}
      >
        {GoogleReviewData?.map((review, index) => {
          return (
            <SwiperSlide
              key={`GOOGLE_REVIEW${index}`}
              style={{ height: "100%" }}
            >
              <div className="p-0 m-0 px-2 w-100">
                <div
                  className={`px-3 p-0 m-0 w-100 pt-3 pb-4 h-100 d-flex flex-column justify-content-between swiperslide_content ${
                    activeIndex === index && "swiperslide_content-active"
                  }`}
                  style={{ position: "relative", overflow: "visible" }}
                >
                  <div className="p-0 m-0 w-100 ">
                    <div className="row p-0 m-0 d-flex justify-content-start align-items-center info">
                      <div className="p-0 m-0 py-2">
                        <img
                          src="/images/home/Icon.png"
                          className="p-0 m-0 w-100"
                          alt=""
                          style={{
                            position: "relative",
                            transform: "translate(20px,-20px)",
                          }}
                        />
                      </div>
                      <div className="d-flex justify-content-between col-10 pl-4">
                        <h6 className="m-0 p-0 py-1 px-2 google_fullname">
                          {review?.full_name}
                        </h6>
                        <div className="p-0 m-0 mb-2 mb-sm-0 d-flex alige-items-center justify-content-center">
                          {Array(+review?.rate)
                            ?.fill("")
                            ?.map(() => (
                              <FaStar className="mx-1" color="#fff" />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-left p-0 m-0 pt-3 text_limit_google_review-desc">
                    {review?.desc}
                  </p>
                  <div className="p-0 m-0 pt-3 d-flex flex-column align-items-start">
                    <a
                      style={{ textDecoration: "underline" }}
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.google.com/search?q=milano+auto+sales&rlz=1C1CHBF_enCA780CA780&oq=Milano+Auto+Sales&aqs=chrome.0.0l3j69i60l3.731j0j4&sourceid=chrome&ie=UTF-8#lrd=0x548678113f429bc3:0x79d702575bf7ea0e,1,,,"
                      className="p-0 m-0  text-center google_rev_btn"
                    >
                      READ MORE AT GOOGLE
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default GoogleReviewsHomePage;
