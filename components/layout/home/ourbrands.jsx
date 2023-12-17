import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { CDN_BASE_URL } from "../../../constant/base";
import CoverFlowSlider from "./slider/cover_flow_slider";
import { GOOGLE_REVIEW } from "../../../constant/home/home";
const OurBrandsHomePage = (props) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span  class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const prevref = useRef(null);
  const nextref = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="p-0 my-3 py-5 px-2 px-md-3 px-lg-5 m-0 row w-100 justify-content-center align-items-center">
      <div className="p-0 m-0 col-4 col-md-2 px-2 py-2 py-md-0">
        <img src="/images/home/scotiabank.png" className="w-100" alt="" />
      </div>
      <div className="p-0 m-0 col-4 col-md-2 px-2 py-2 py-md-0">
        <img src="/images/home/ctl.png" className="w-100" alt="" />
      </div>
      <div className="p-0 m-0 col-4 col-md-2 px-2 py-2 py-md-0">
        <img src="/images/home/nationalbank (1).png" className="w-100" alt="" />
      </div>
      <div className="p-0 m-0 col-4 col-md-2 px-2 py-2 py-md-0">
        <img src="/images/home/rifco.png" className="w-100" alt="" />
      </div>
      <div className="p-0 m-0 col-4 col-md-2 px-2 py-2 py-md-0">
        <img src="/images/home/carfinco.png" className="w-100" alt="" />
      </div>
      <div className="p-0 m-0 col-4 col-md-2 px-2 py-2 py-md-0">
        <img src="/images/home/desjardins (1).png" className="w-100" alt="" />
      </div>
    </div>
  );
};

export default OurBrandsHomePage;
