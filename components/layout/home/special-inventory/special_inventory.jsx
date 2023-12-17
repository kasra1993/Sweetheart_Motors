import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Thumbs, Autoplay, FreeMode } from "swiper";
import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
import EachSpecialInHomePage from "./special-inventory-home-component";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa";
import SpecialInventoryCars from "./specialinventory_cars";
import SpecialInventoryCarsThumb from "./specialinventory_cars_thumb";
SwiperCore.use([Pagination, Thumbs, Autoplay]);
const SpecialInventorySlider = (props) => {
  const { specialCars, bodyStyleData, transmissionData } = props;
  const prevref = useRef(null);
  const nextref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="p-0 pb-5 px-2 px-md-4 m-0 row justify-content-center align-items-center special_cars_pag w-100 py-5">
      <div className="p-0 col-12 m-0 pb-2 w-100 d-flex align-items-center justify-content-start px-lg-4">
        {/* <div className="d-none d-md-inline">
          <img className="w-100 d-inline pr-3" src="/images/home/left.png" />
        </div> */}

        {/* <div className="d-none d-md-inline">
          <img className="w-100 d-inline pl-3" src="/images/home/right.png" />
        </div> */}
        {/* <p className="p-0 px-2 m-0 feature_special_desc">
          New and popular items at competitive price
        </p> */}
      </div>
      <div
        className="p-0 col-12 col-sm-11 m-0 pb-4"
        style={{ overflow: "hidden" }}
      >
        <div className="p-0 m-0 w-100 row justify-content-between align-items-center">
          <p className="p-0 m-0 title_our_brands ">FEATURED VEHICLES</p>
          <div className="p-0 m-0 home_special_navigate_btns d-flex justify-content-center align-items-center rounded-pill">
            <div
              ref={prevref}
              className="prev_button my-2 px-2 d-flex justify-content-center align-items-center"
            >
              <FaCaretLeft color="#838383" />
            </div>
            <div
              ref={nextref}
              className="next_button my-2 px-2 d-flex justify-content-center align-items-center"
            >
              <FaCaretRight color="#838383" />
            </div>
          </div>
        </div>
        <div className="p-0 m-0 w-100 row">
          <div
            className="p-0 m-0 col-12 col-lg-6 d-none d-md-flex order-2 order-lg-1"
            style={{ overflow: "hidden", minHeight: "450px" }}
          >
            <Swiper
              onSwiper={setThumbsSwiper}
              onSlideChange={(props) => {
                setActiveIndex(props.activeIndex);
              }}
              modules={[FreeMode, Thumbs]}
              className=" w-100"
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                position: "relative",
                padding: 0,
                margin: 0,
                maxHeight: "500px",
              }}
              initialSlide={Math.round(specialCars?.length / 2) - 1}
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
              direction={"vertical"}
              slidesPerView={5}
              pagination={false}
              autoplay={{
                delay: 3000,
              }}
              // breakpoints={{
              //   1200: {
              //     slidesPerView: 3,
              //   },
              //   768: {
              //     slidesPerView: 2,
              //   },
              //   360: {
              //     slidesPerView: 1,
              //   },
              // }}
              // style={
              //   {
              //     "--swiper-pagination-color": "red",
              //   }
              // }
            >
              {specialCars?.map((vehicle, index) => {
                return (
                  <>
                    <SwiperSlide
                      key={`specialSlider${index}`}
                      className="p-0 m-0 px-2 py-xl-5"
                    >
                      <SpecialInventoryCarsThumb
                        index={index}
                        activeIndex={activeIndex}
                        item={vehicle}
                        bodyStyleData={bodyStyleData}
                        transmissionData={transmissionData}
                      />
                      {/* <EachSpecialInHomePage
                    vehicle={vehicle}
                    index={index}
                    activeIndex={activeIndex}
                  /> */}
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
          <div
            className="p-0 m-0 col-12 col-lg-6 order-1 order-lg-2 home_special_swiper-container"
            style={{ overflow: "hidden" }}
          >
            <Swiper
              onSlideChange={(props) => {
                setActiveIndex(props.activeIndex);
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              className=" row w-100 h-100 mt-2"
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                position: "relative",
                padding: 0,
                margin: 0,
              }}
              initialSlide={Math.round(specialCars?.length / 2) - 1}
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
              slidesPerView={1}
              pagination={false}
              autoplay={{
                delay: 3000,
              }}
              // breakpoints={{
              //   1200: {
              //     slidesPerView: 3,
              //   },
              //   768: {
              //     slidesPerView: 2,
              //   },
              //   360: {
              //     slidesPerView: 1,
              //   },
              // }}
              // style={
              //   {
              //     "--swiper-pagination-color": "red",
              //   }
              // }

              // pagination={true}
              // onInit={(swiper) => {
              //   swiper.params.navigation.prevEl = prevref.current;
              //   swiper.params.navigation.nextEl = nextref.current;
              //   swiper.navigation.update();
              // }}
              // centeredSlides
              // autoplay={{
              //   delay: 3000,
              // }}
              // effect="coverflow"
              // coverflowEffect={{
              //   rotate: 0,
              //   stretch: 80,
              //   depth: 200,
              //   modifier: 1,
              //   slideShadows: false,
              // }}
              // // initialSlide={Math.round(specialCars?.length / 2) - 1}
              // onSlideChange={(props) => setActiveIndex(props.activeIndex)}
              // className="mySwiper2 p-0 d-flex row col-12 justify-content-center align-items-center text-center special_inventory_slider"
            >
              {specialCars?.map((vehicle, index) => {
                return (
                  <>
                    <SwiperSlide
                      key={`specialSlider${index}`}
                      className="p-3 m-0"
                    >
                      <SpecialInventoryCars
                        index={index}
                        activeIndex={activeIndex}
                        item={vehicle}
                        bodyStyleData={bodyStyleData}
                        transmissionData={transmissionData}
                      />
                      {/* <EachSpecialInHomePage
                    vehicle={vehicle}
                    index={index}
                    activeIndex={activeIndex}
                  /> */}
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialInventorySlider;
