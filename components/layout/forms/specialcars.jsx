import SpecialCarItem from "./special_car_item";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
const SpecialCarsCustomerWeb = (props) => {
  const { data } = props;
  const prevref = useRef(null);
  const nextref = useRef(null);
  return (
    <>
      <div className="p-0 pb-4 m-0 text-center">
        <h3 className="p-0 m-0 spercail_cars_title pt-5 pt-lg-0">
          SPECIAL OFFERS
        </h3>
      </div>
      <div className="p-0 m-0 w-100 special_cars_div__container d-none d-lg-flex flex-lg-column">
        {data?.map((car) => {
          return <SpecialCarItem car={car} />;
        })}
      </div>
      {/* <div className="p-0 m-0 w-100 special_cars_div__container d-flex d-lg-none">
        {data?.map((car) => {
          return <SpecialCarItem car={car} />;
        })}
      </div> */}

      <div className="p-0 m-0 d-flex d-lg-none special_cars_div__container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "red",
            zIndex: "52",
            //position: "absolute",
            //top: "7.5rem",
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            720: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            // 1440: {
            //   slidesPerView: 5,
            // },
          }}
          loop={true}
          navigation={{
            prevEl: prevref.current ? prevref.current : ".prev",
            nextEl: nextref.current ? nextref.current : ".next",
            disabledClass: "swiper-button-prev,swiper-button-next",
          }}
          // onInit={(swiper) => {
          //   swiper.params.navigation.prevEl = prevref.current;
          //   swiper.params.navigation.nextEl = nextref.current;
          //   swiper.navigation.update();
          // }}
          autoplay={{
            delay: 5000,
          }}
          className="mySwiper3 p-0 d-flex row col-12 justify-content-center align-items-center text-center"
          scrollbar={{ draggable: true }}
        >
          {data?.map((car) => {
            return (
              <>
                <SwiperSlide className="p-0 m-0">
                  <SpecialCarItem car={car} />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default SpecialCarsCustomerWeb;
