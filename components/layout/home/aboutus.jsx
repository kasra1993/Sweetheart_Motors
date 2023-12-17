import Link from "next/link";
import { useState } from "react";

const HomeAboutUs = (props) => {
  const [seeMore, setSeeMore] = useState(false);
  const [More, setMore] = useState(false);
  return (
    <div className="p-0 m-0 mb-4 home_about_section_background-style w-100">
      <div
        className="p-1 m-0 w-100 text-white"
        style={{
          backgroundColor: "#024A9B",
        }}
      >
        <div className="p-0 m-0 d-flex flex-column flex-md-row align-items-center justify-content-around">
          <h3 className="text-center">
            Please check our best selection inventory
          </h3>
          <Link href="/cars">
            <a className="p-0 m-0 mx-md-4">
              <button className="button_border bg-white">Inventory</button>
            </a>
          </Link>
        </div>
      </div>
      <div
        className="p-0 m-0 mt-5 w-100"
        style={{
          position: "relative",
        }}
      >
        {/* <div
                  className="py-4 m-0 justify-content-start text-start align-items-center d-flex row col-12"
                  style={{
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                    position: "relative",
                    zIndex: "3",
                  }}
                >
                  <h3 className="linkto_title p-0 m-0 mb-2 col-12">
                    WELCOME TO{" "}
                    {props?.dealerData?.bussiness_name?.toUpperCase()}
                  </h3>
                  <div className=" col-12 p-0 m-0 d-none d-lg-flex">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: props?.dealerData?.welcome_note,
                      }}
                      className="linkto_limit_text"
                    ></div>
                  </div>
                  <div
                    className={` col-12 p-0 m-0 d-flex d-lg-none ${
                      More ? "" : "about_page_text-limit"
                    }`}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: props?.dealerData?.welcome_note,
                      }}
                      className="linkto_limit_text"
                    ></div>
                  </div>
                  <button
                    className="p-0 m-0 mt-1 bg-transparent d-flex d-lg-none"
                    onClick={() => {
                      setMore((prev) => !prev);
                    }}
                  >
                    {More ? "Less..." : "...Read More"}
                  </button>
                </div>
                <Link href="/about-us">
                  <a>
                    <button
                      className=" d-flex justify-content-center text-center align-items-center mb-5 px-4 button_border"
                      style={{
                        position: "relative",
                        left: "5rem",
                        zIndex: "3",
                      }}
                    >
                      MORE DETAIL
                    </button>
                  </a>
                </Link> */}
        <div
          className="p-0 m-0 "
          style={{
            position: "absolute",
            zIndex: "49",
            top: "-5rem",
            zIndex: "1",
          }}
        >
          <img
            src="/images/home/Path 19.png"
            style={{
              width: "90px",
              position: "relative",
            }}
          />
        </div>
        <div
          className="p-0 m-0 "
          style={{
            position: "absolute",
            zIndex: "49",
            top: "4rem",
            left: "1rem",
            zIndex: "1",
          }}
        >
          <img
            src="/images/home/Ellipse 2.png"
            style={{
              width: "60px",
              position: "relative",
            }}
          />
        </div>
        <div
          className="p-0 m-0 "
          style={{
            position: "absolute",
            zIndex: "49",
            top: "8rem",
            right: "0rem",
            zIndex: "1",
          }}
        >
          <img
            src="/images/home/Path 20.png"
            style={{
              width: "200px",
              position: "relative",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
