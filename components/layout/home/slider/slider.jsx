import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Autoplay, Pagination } from "swiper";
import HomeAdvanceSearch from "../home_advance_search";
import Link from "next/link";
import { FaUniversity } from "react-icons/fa";

SwiperCore.use([Navigation, Thumbs, Autoplay, Pagination]);
const Slider = (props) => {
  const { vehicleDataForSearch, dealerData, advanceSearchData } = props;
  const prevref = useRef(null);
  const nextref = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="p-0 m-0 home_slider_pagination w-100 pr-0 pr-md-5">
        <div
          className="p-0 m-0 w-100 row px-3 px-md-2 pl-md-4 pr-md-5"
          style={{ position: "relative" }}
        >
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "red",
              position: "relative",
            }}
            loop={true}
            spaceBetween={1}
            navigation={{
              prevEl: prevref.current ? prevref.current : ".prev",
              nextEl: nextref.current ? nextref.current : ".next",
              disabledClass: "swiper-button-prev,swiper-button-next",
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevref.current;
              swiper.params.navigation.nextEl = nextref.current;
              swiper.navigation.update();
            }}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2 h-100 pb-md-0"
            autoplay={{
              delay: 5000,
            }}
            pagination={false}
          >
            {props?.slider?.rows?.map((row) => {
              return (
                <SwiperSlide key={`homeSlider${row?.id}`} className="h-100">
                  <img
                    style={{
                      objectFit: "contain",
                      height: "auto",
                      width: "100%",
                    }}
                    className="p-0 m-0 w-100 home_slider_img"
                    src={`https://hillzimage.blob.core.windows.net${row.image_name}`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="p-0 m-0 px-0 px-md-4 px-lg-0 row justify-content-start align-items-center home_txt_slider_position">
            <div className="p-0 m-0 col-12 col-md-5 px-md-2 pb-2 pt-3 py-md-0">
              <Link href="/forms/finance">
                <a>
                  <div className="p-3 pb-4 m-0 d-flex flex-column slider_home_finance_bottom">
                    <i>
                      <FaUniversity color="#cc2a22" />
                    </i>
                    <p className="p-0 m-0 pt-2">
                      Apply For <br /> Financing ( Get Approved )
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="p-0 m-0 col-12 col-md-5 px-md-2 py-2 py-md-0">
              <Link href="/cars">
                <a>
                  <div className="p-3 pb-4 m-0 d-flex flex-column slider_home_inventory_bottom">
                    <i>
                      <FaUniversity color="#fff" />
                    </i>
                    <p className="p-0 m-0 pt-2">
                      View All <br /> Inventory ( Explore Now )
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
