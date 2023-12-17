import Link from "next/link";
import {
  FaHome,
  FaCar,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
} from "react-icons/fa";
import React, { useContext, useEffect } from "react";
import { Translate } from "../../../layout/home/translate";
const SidebarCustomerWeb = ({ data }) => {
  return (
    <div className="p-0 m-0 py-3 sidebar_menu_style d-none d-md-flex flex-column justify-content-center align-items-center">
      <div className="p-0 m-0 py-2 px-3">
        <Link href="/">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center"
            style={{ backgroundColor: "#cc2a22" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#cc2a22" }}>
              <FaHome color="#fff" size={18} />
            </i>
            <p
              className=" pl-4 m-0  py-2"
              style={{ backgroundColor: "#cc2a22" }}
            >
              Home
            </p>
          </a>
        </Link>
      </div>
      <div className="p-0 m-0 py-2 px-3">
        <Link href="/">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center"
            style={{ backgroundColor: "#cc2a22" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#cc2a22" }}>
              <img src="/images/home/globe_icon.png" alt="" />{" "}
            </i>
            <p
              className=" pl-4 m-0  py-2"
              style={{ backgroundColor: "#cc2a22" }}
            >
              <Translate />
            </p>
          </a>
        </Link>
      </div>
      <div className="p-0 m-0 py-2 px-3">
        <Link href="/cars">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center"
            style={{ backgroundColor: "#cc2a22" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#cc2a22" }}>
              <FaCar color="#fff" size={18} />
            </i>
            <p
              className=" pl-4 m-0  py-2"
              style={{ backgroundColor: "#cc2a22" }}
            >
              Inventory
            </p>
          </a>
        </Link>
      </div>
      <div className="p-0 m-0 py-2 px-3">
        <Link href="/about-us">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center"
            style={{ backgroundColor: "#cc2a22" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#cc2a22" }}>
              <FaInfoCircle color="#fff" size={18} />
            </i>
            <p
              className=" pl-4 m-0  py-2"
              style={{ backgroundColor: "#cc2a22" }}
            >
              <span>About&nbsp;Us</span>
            </p>
          </a>
        </Link>
      </div>
      <div className="p-0 m-0 py-2 px-3">
        <Link href="/direction">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center"
            style={{ backgroundColor: "#cc2a22" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#cc2a22" }}>
              <FaMapMarkerAlt color="#fff" size={18} />
            </i>
            <p
              className=" pl-4 m-0  py-2"
              style={{ backgroundColor: "#cc2a22" }}
            >
              Direction
            </p>
          </a>
        </Link>
      </div>
      {data?.facebook && (
        <div className="p-0 m-0 py-2 px-3">
          <Link href={data?.facebook}>
            <a
              className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center"
              style={{ backgroundColor: "#cc2a22" }}
            >
              <i
                className="p-0 m-0  py-2"
                style={{ backgroundColor: "#cc2a22" }}
              >
                <FaFacebook color="#fff" size={18} />
              </i>
              <p
                className=" pl-4 m-0  py-2"
                style={{ backgroundColor: "#cc2a22" }}
              >
                Facebook
              </p>
            </a>
          </Link>
        </div>
      )}
      <div className="p-0 m-0 py-2 px-3">
        <Link href="/forms/contact-us">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center"
            style={{ backgroundColor: "#cc2a22" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#cc2a22" }}>
              <FaPhoneAlt color="#fff" size={18} />
            </i>
            <p
              className=" pl-4 m-0  py-2"
              style={{ backgroundColor: "#cc2a22" }}
            >
              <span>Contact&nbsp;Us</span>
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SidebarCustomerWeb;
