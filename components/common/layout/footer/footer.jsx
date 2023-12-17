import React, { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaComment,
} from "react-icons/fa";
import OperationHoures from "./operationhouers";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
import Location from "../../../layout/directions/location";
import { CDN_BASE_URL } from "../../../../constant/base";
import { findScript } from "../../../../utils/common/html_script";

const FooterCustomerWeb = React.forwardRef((props, ref) => {
  const { data, timeWorke } = props;
  const [seeMore, setSeeMore] = useState(false);
  const currentYear = new Date().getFullYear();
  const scrollTop = () => {
    ref.current.scrollIntoView(true);
  };
  return (
    <>
      {/* <div className="p-0 m-0 w-100 footer_contact_bg">
        <img className="w-100 h-100" src="/images/footer/Patern.png" alt="" />
      </div> */}

      <div
        className="p-0 m-0 footer_div_container row w-100 justify-content-center px-2 px-md-3 px-lg-4 "
        style={{ position: "relative", backgroundColor: "#fff" }}
      >
        <div className="p-0 m-0 footer_bg_container"></div>
        <div className="p-0 m-0 col-12 col-md-6 col-lg-4 px-2 px-sm-3 pt-3">
          <div className="p-0 m-0 row w-100 h-100">
            <div className="p-0 m-0  d-flex flex-column justify-content-lg-between col-12">
              <div>
                <div className=" d-flex flex-column justify-content-start align-items-start">
                  <h3 className="p-0 m-0 footer_title_container text-left">
                    About Us
                  </h3>
                  <div className="d-inline ">
                    <img
                      className=" d-inline w-100"
                      src="/images/home/Rectangle 18.png"
                    />
                  </div>
                </div>
                <div
                  className="p-0 m-0  footer_about-us-text-limit text-justify footer_desc_container "
                  dangerouslySetInnerHTML={{
                    __html: findScript(data?.about_us),
                  }}
                />
              </div>
              <div className=" p-0 m-0 d-flex align-items-center justify-content-between">
                <div>
                  <div className="p-0 m-0 pt-3 pt-lg-0">
                    <Link href="/about-us">
                      <a className="px-3 py-2 m-0 special_feature_home_btn">
                        Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-0 m-0 px-2 px-sm-3 col-12 col-md-6 col-lg-4 pt-3 ">
          {" "}
          <OperationHoures timeWork={data?.timeWork} />
        </div>
        <div className="p-0 m-0 col-12 col-md-12 col-lg-4 px-2 px-sm-3 pt-3">
          <div className="p-0 m-0 row w-100 h-100">
            <div className=" d-flex flex-column w-100 justify-content-start align-items-start">
              <h3 className="p-0 m-0 footer_title_container text-left">
                Contact Us
              </h3>
              <div className="d-inline w-100">
                <img
                  className=" d-inline w-100"
                  src="/images/home/Rectangle 18.png"
                />
              </div>
            </div>
            <div className="p-0 m-0  d-flex flex-row flex-lg-column  justify-content-between col-12">
              <div>
                <div className=" p-0 m-0 py-2 d-flex footer_desc_container justify-content-between align-items-between ">
                  <Link href="/direction">
                    <a>
                      <span className="p-0 m-0  " style={{ color: "#838383" }}>
                        Address&nbsp;:&nbsp;{data?.business_street}
                        {", "}
                        {data?.business_city?.city}
                        {", "}
                        {data?.business_city?.Province?.province === "Alberta"
                          ? "Ab"
                          : data?.business_city?.Province?.province}
                        {", "}
                        {data?.business_postal}
                      </span>
                    </a>
                  </Link>
                </div>
                <div className=" p-0 m-0 d-flex py-2 footer_desc_container justlfy-content-center align-items-center ">
                  <a
                    href={phonenumberConvertor(data?.business_phone)}
                    rel="noopener noreferrer"
                    className="p-0 m-0 text-decoration-none"
                    style={{ color: "#838383" }}
                  >
                    Phone number&nbsp;:&nbsp;{data?.business_phone}
                  </a>
                </div>
              </div>
              <div className=" p-0 m-0 d-none d-sm-flex align-items-end align-items-lg-center justify-content-between">
                <div>
                  <Link href="/">
                    <a className="p-0 m-0 col-6 col-lg-12 d-lg-flex justify-content-center align-items-center ">
                      <img
                        src={`${CDN_BASE_URL}${data?.logo_url}`}
                        className="w-100"
                      />
                    </a>
                  </Link>
                </div>
                <div className="p-0 m-0 d-flex col-6">
                  {data?.twitter !== null && (
                    <Link href={data?.twitter}>
                      <a
                        className="p-0 px-1 m-0"
                        target="_blank"
                        style={{ border: "1px solid #1B6939" }}
                      >
                        <FaTwitter color="#1B6939" className="" />
                      </a>
                    </Link>
                  )}
                  {data?.facebook !== null && (
                    <Link href={data?.facebook}>
                      <a
                        className="p-0 px-1 m-0"
                        target="_blank"
                        style={{ border: "1px solid #1B6939" }}
                      >
                        <FaFacebookF color="#1B6939" />
                      </a>
                    </Link>
                  )}
                  {data?.instagram !== null && (
                    <Link href={data?.instagram}>
                      <a
                        className="p-0 px-1 m-0"
                        target="_blank"
                        style={{ border: "1px solid #1B6939" }}
                      >
                        <FaInstagram color="#1B6939" />
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-0 m-0 col-12 col-lg-12 px-2 px-sm-3 pt-3 pt-sm-5 pb-3">
          <iframe
            allow="geolocation"
            src={data?.map_url}
            frameborder="0"
            width="100%"
            height="200"
            className="border-0 w-100 p-0 m-0"
            aria-hidden="false"
            tabindex="0"
            id="iframe"
            style={{ borderRadius: "0px" }}
          />
        </div>

        <div
          className="p-0 m-0 py-2 w-100 col-12  "
          // style={{ backgroundColor: "#fcfcfc" }}
        >
          <div className="p-0 m-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="p-0 px-3 m-0 footer_txt_border">
              <Link href="/">
                <a>
                  <p
                    style={{ fontSize: "13px", color: "#000" }}
                    className="p-0 m-0"
                  >
                    &copy; {currentYear}{" "}
                    {data?.dba ? data?.dba : data?.bussiness_name}
                  </p>
                </a>
              </Link>
            </div>
            <div className="p-0 m-0">
              <div className="p-0 m-0 w-100 d-flex align-items-center justify-content-center justify-content-md-start">
                <a
                  href="https://www.hillzdealer.com"
                  className="p-0 px-1 m-0 py-1 text-decoration-none d-flex align-items-center"
                  style={{
                    zIndex: 100,
                  }}
                >
                  <div
                    className="p-0 m-0 mx-2 my-1 my-md-0"
                    style={{
                      color: "#000",
                      zIndex: 2,
                    }}
                  >
                    <p style={{ fontSize: "13px" }} className="p-0 m-0">
                      Powered by
                    </p>
                  </div>
                  <img
                    src="/images/hillz_big_logo.png"
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                    }}
                  />

                  <div
                    className="p-0 m-0 mx-2"
                    style={{
                      color: "#000",
                      zIndex: 2,
                    }}
                  >
                    <p style={{ fontSize: "13px" }} className="p-0 m-0">
                      HillzDealer
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 m-0 px-3 text-white footer_txt_border">
              <Link href="/privacy">
                <a className="" style={{ color: "#000" }}>
                  <p style={{ fontSize: "13px" }} className="p-0 m-0">
                    Privacy & Policy
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
export default FooterCustomerWeb;
