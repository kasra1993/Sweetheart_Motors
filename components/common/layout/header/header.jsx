import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  FaCar,
  FaAngleDown,
  FaAlignJustify,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPhone,
  FaWindowClose,
  FaFacebookF,
  FaComment,
  FaAlignLeft,
  FaInstagram,
  FaTwitter,
  FaMap,
} from "react-icons/fa";
import NavLink from "./NavLink";
import { CDN_BASE_URL } from "../../../../constant/base";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";

const HeaderCustomerWeb = React.forwardRef((props, ref) => {
  const { data, dealerData } = props;
  const [showMobile, setShowMobile] = useState(false);
  const [parent, setParent] = useState(undefined);

  return (
    <>
      <div className="w-100 row p-0 m-0 px-4 pb-4 px-lg-3 justify-content-between align-items-center">
        <div className="py-3 px-3 m-0 d-none d-lg-flex col-10 flex-row justify-content-end align-items-end address_container">
          <div
            className="p-0 m-0 row w-100"
            style={{ fontSize: "14px", color: "#000" }}
          >
            <FaMapMarkerAlt
              color="#cc2a22"
              size="17px"
              className="p-0 m-0 mr-2"
            />

            {data?.business_street}
            {", "}
            {data?.business_city?.city}
            {", "}
            {data?.business_city?.Province?.province === "Alberta"
              ? "Ab"
              : data?.business_city?.Province?.province}
            {", "}
            {data?.business_postal}
          </div>
          <div className="p-0 m-0 row w-100 pt-2">
            <a
              href={phonenumberConvertor(data?.business_phone)}
              rel="noopener noreferrer"
              className="p-0 m-0 text-decoration-none"
              style={{ fontSize: "14px", color: "#000" }}
            >
              <FaPhone color="#cc2a22" size="17px" className="p-0 m-0 mr-2" />
              {data?.business_phone}
            </a>
          </div>
        </div>
        <div className="p-0 m-0 col-6 col-md-2 d-none d-lg-flex align-items-center justify-content-end justify-content-lg-end">
          <div className="p-0 m-0">
            <Link href="/">
              <a className="p-0 m-0 w-100 d-flex justify-content-center align-items-center header_logo_container">
                <img src={`${CDN_BASE_URL}${data?.logo_url}`} />
              </a>
            </Link>
          </div>
        </div>
        <div className="p-0 px-0 col-6 m-0 d-lg-none row  ">
          <div className="p-0 m-0 py-md-3 py-2 row w-100 d-flex d-lg-none justify-content-between  align-items-center">
            <div className="p-0 m-0 w-100 row">
              <div className="p-0 m-0 col-12" style={{ position: "relative" }}>
                {showMobile && (
                  <div className="p-0 m-0 w-100 row">
                    <div
                      className={`p-0  m-0 col-12 col-sm-9 col-md-4 d-flex d-lg-none flex-column justify-content-start align-items-start mobile_menu_container mobile_menu_container_open py-2`}
                    >
                      <div className="p-0 m-0 d-flex">
                        <NavLink
                          menuToggleSetter={setShowMobile}
                          isMobile={true}
                          disabledDesktopClass={true}
                          type="1"
                          title={"HOME"}
                          href="/"
                          className=" header_a__navlink header_a__navlink_mobile py-2"
                        />
                      </div>

                      <div className="p-0 m-0 d-flex">
                        <NavLink
                          menuToggleSetter={setShowMobile}
                          parent={parent}
                          parentId={0}
                          setParent={setParent}
                          isMobile={true}
                          disabledDesktopClass={true}
                          type="0"
                          title={
                            <>
                              <span>INVENTORY</span>
                              <i>
                                <FaAngleDown />
                              </i>
                            </>
                          }
                          href="/cars"
                          className=" header_a__navlink header_a__navlink_mobile py-2"
                          subLinks={[
                            {
                              href: "/cars",
                              title: "INVENTORY",
                            },

                            {
                              href: "/forms/value-your-trade",
                              title: "APPRAISE MY TRADE",
                            },
                            {
                              href: "/forms/car-finder",
                              title: "CAR FINDER",
                            },
                          ]}
                        />
                      </div>
                      <div className="p-0 m-0 d-flex">
                        <NavLink
                          menuToggleSetter={setShowMobile}
                          parent={parent}
                          parentId={1}
                          setParent={setParent}
                          isMobile={true}
                          disabledDesktopClass={true}
                          type="0"
                          title={
                            <>
                              <span>FINANCING</span>
                              <i>
                                <FaAngleDown />
                              </i>
                            </>
                          }
                          href="/forms/finance"
                          className=" header_a__navlink header_a__navlink_mobile py-2"
                          subLinks={[
                            {
                              href: "/forms/finance",
                              title: "FINANCING APPLICATION",
                            },
                            {
                              href: "/forms/finance/calculator",
                              title: "FINANCING CALCULATOR",
                            },
                          ]}
                        />
                      </div>
                      <div className="p-0 m-0 d-flex">
                        <NavLink
                          menuToggleSetter={setShowMobile}
                          parent={parent}
                          parentId={2}
                          setParent={setParent}
                          isMobile={true}
                          disabledDesktopClass={true}
                          type="0"
                          title={
                            // ""
                            <>
                              <span>DEALERSHIP</span>
                              <i>
                                <FaAngleDown />
                              </i>
                            </>
                          }
                          href="/about-us"
                          className=" header_a__navlink header_a__navlink_mobile py-2"
                          subLinks={[
                            {
                              href: "/about-us",
                              title: "ABOUT US",
                            },
                            {
                              href: "/forms/contact-us",
                              title: "CONTACT US",
                            },
                            {
                              href: "/forms/book-appointment",
                              title: "BOOK APPOINTMENT",
                            },
                          ]}
                        />
                      </div>
                      <div className="p-0 m-0 d-flex">
                        <NavLink
                          menuToggleSetter={setShowMobile}
                          isMobile={true}
                          disabledDesktopClass={true}
                          type="1"
                          title={"DIRECTION"}
                          href="/direction"
                          className=" header_a__navlink header_a__navlink_mobile py-2"
                        />
                      </div>
                      <div className="p-0 m-0 d-flex">
                        <NavLink
                          menuToggleSetter={setShowMobile}
                          isMobile={true}
                          disabledDesktopClass={true}
                          type="1"
                          title={"TEXT US NOW"}
                          href="/forms/text-us-now"
                          className=" header_a__navlink header_a__navlink_mobile py-2"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setShowMobile((prev) => !prev)}
                className="d-lg-none col-2 col-md-1 p-0 m-0 mobile_menu_active_border"
              >
                {showMobile ? (
                  <div className="p-0 m-0 py-1">
                    <FaWindowClose
                      color="#cc2a22"
                      size={28}
                      className="svg_icons_sizing"
                    />
                  </div>
                ) : (
                  <div className="p-0 m-0 py-1 ">
                    <FaAlignLeft
                      className="svg_icons_sizing"
                      color="#cc2a22"
                      size={28}
                    />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="p-0 m-0 col-12 col-md-6 d-none d-lg-flex">
          <div className="w-100 h-100 d-flex justify-content-between align-items-center p-0 m-0 header_partlink">
            <div className="d-flex justify-content-center w-100">
              <NavLink
                type="1"
                title={"HOME"}
                href="/"
                className="col header_a__navlink text-center"
              />
              <NavLink
                type="0"
                title={
                  // "SHOWROOM"
                  <>
                    <span>INVENTORY</span>
                    <i>
                      <FaAngleDown />
                    </i>
                  </>
                }
                href=""
                className="col header_a__navlink text-center"
                subLinks={[
                  {
                    href: "/cars",
                    title: "INVENTORY",
                  },

                  {
                    href: "/forms/value-your-trade",
                    title: "APPRAISE MY TRADE",
                  },
                  {
                    href: "/forms/car-finder",
                    title: "CAR FINDER",
                  },
                ]}
              />
              <NavLink
                type="0"
                title={
                  <>
                    <span>FINANCING</span>
                    <i>
                      <FaAngleDown />
                    </i>
                  </>
                }
                href=""
                className="col header_a__navlink text-center"
                subLinks={[
                  {
                    href: "/forms/finance",
                    title: "FINANCING APPLICATION",
                  },
                  {
                    href: "/forms/finance/calculator",
                    title: "FINANCING CALCULATOR",
                  },
                ]}
              />

              <NavLink
                type="0"
                title={
                  // "DEALERSHIP"
                  <>
                    <span>DEALERSHIP</span>
                    <i>
                      <FaAngleDown />
                    </i>
                  </>
                }
                href=""
                className="col header_a__navlink text-center"
                subLinks={[
                  {
                    href: "/about-us",
                    title: "ABOUT US",
                  },
                  {
                    href: "/forms/contact-us",
                    title: "CONTACT US",
                  },
                  {
                    href: "/forms/book-appointment",
                    title: "BOOK APPOINTMENT",
                  },
                ]}
              />

              <NavLink
                type="1"
                title={"DIRECTION"}
                href="/direction"
                className="col header_a__navlink text-center"
              />
              <NavLink
                type="1"
                title={"TEXT US NOW"}
                href="/forms/text-us-now"
                className="col header_a__navlink text-center"
              />
            </div>
            <div className="p-0 m-0 col-12 col-sm-6 d-md-none text-right">
              {" "}
              <button
                onClick={() => setShowMobile((prev) => !prev)}
                className="d-lg-none col-2 col-md-1 p-0 m-0 mobile_menu_active_border"
              >
                {showMobile ? (
                  <div className="p-0 m-0 py-1">
                    <FaWindowClose color="#000" size={28} />
                  </div>
                ) : (
                  <div className="p-0 m-0 py-1 ">
                    <FaAlignLeft
                      className="svg_icons_sizing"
                      color="#cc2a22"
                      size={28}
                    />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* <div className="p-0 m-0 d-none d-lg-flex col-md-4 flex-column justify-content-end align-items-end">
          <div
            className="p-0 m-0 row w-100"
            style={{ fontSize: "13px", color: "#000" }}
          >
            <FaMapMarkerAlt
              color="#cc2a22"
              size="16px"
              className="p-0 m-0 mr-2"
            />

            {data?.business_street}
            {", "}
            {data?.business_city?.city}
            {", "}
            {data?.business_city?.Province?.province === "Alberta"
              ? "Ab"
              : data?.business_city?.Province?.province}
            {", "}
            {data?.business_postal}
          </div>
          <div className="p-0 m-0 row w-100 pt-2">
            <a
              href={phonenumberConvertor(data?.business_phone)}
              rel="noopener noreferrer"
              className="p-0 m-0 text-decoration-none"
              style={{ fontSize: "13px", color: "#000" }}
            >
              <FaPhone color="#cc2a22" size="16px" className="p-0 m-0 mr-2" />
              {data?.business_phone}
            </a>
          </div>
        </div> */}
        <div className="p-0 m-0 col-6 col-md-2 d-flex d-lg-none align-items-center justify-content-end justify-content-lg-end">
          <div className="p-0 m-0">
            <Link href="/">
              <a className="p-0 m-0 w-100 d-flex justify-content-center align-items-center header_logo_container">
                <img src={`${CDN_BASE_URL}${data?.logo_url}`} />
              </a>
            </Link>
          </div>
        </div>
        <div className="p-0 m-0 py-1 mt-2 d-flex d-md-none w-100 justify-content-around align-items-center header_links_container">
          <div className="p-0 m-0 ">
            <Link href="/direction">
              <a className="p-0 m-0">
                <i className="p-0 m-0">
                  <FaMapMarkerAlt color="#fff" />
                </i>
              </a>
            </Link>
          </div>
          <div className="p-0 m-0 ">
            <a
              href={phonenumberConvertor(data?.business_phone)}
              rel="noopener noreferrer"
              className="p-0 m-0 text-decoration-none px-2 "
              style={{ color: "#8F8F8F" }}
            >
              <FaPhone color="#fff" />
            </a>
          </div>
          <div className="p-0 m-0 ">
            <Link href="/cars">
              <a className="p-0 m-0">
                <i className="p-0 m-0">
                  <FaCar color="#fff" />
                </i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

export default HeaderCustomerWeb;
