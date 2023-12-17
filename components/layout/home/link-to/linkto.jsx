import React from "react";
import Link from "next/link";
import { CDN_BASE_URL } from "../../../../constant/base";
const LinkTo = (props) => {
  const { dealerData } = props;
  return (
    <div className="p-0 px-3 m-0 w-100 d-flex row align-items-center justify-content-center linkto_div__conatiner">
      <div className="p-0 m-0 col-12 col-lg-7">
        <div className="p-0 m-0 row">
          <div className="p-0 pr-lg-3 m-0 col-12 col-lg-6">
            <div className="p-0 m-0 w-100 d-flex row align-items-scratch justify-content-between">
              <div className="p-0 mb-2 mb-lg-0 pr-sm-1 pr-lg-0 pb-lg-2 m-0 col-12 col-sm-6 col-lg-12">
                <Link href="/forms/value-your-trade">
                  <a className="p-0 m-0 w-100 h-100">
                    <div className="p-0 m-0 h-100 linkto_img_container">
                      <img
                        src={CDN_BASE_URL + dealerData?.contactUs_image_url}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          maxHeight: "300px",
                        }}
                      />
                      <div className="p-2 px-3 m-0 w-100 linkto_img_text_div__container">
                        <span className="linkto_img_text_span__container d-flex align-items-center justify-content-center">
                          APPRAISE MY TRADE
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="p-0 mb-2 mb-lg-0 pl-sm-1 pl-lg-0 pt-lg-2 m-0 col-12 col-sm-6 col-lg-12">
                <Link href="/forms/finance">
                  <a className="p-0 m-0 w-100 h-100">
                    <div className="p-0 m-0 h-100 linkto_img_container">
                      <img
                        src={CDN_BASE_URL + dealerData?.financial_image_url}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          maxHeight: "300px",
                        }}
                      />
                      <div className="p-2 px-3 m-0 w-100 linkto_img_text_div__container">
                        <span className="linkto_img_text_span__container d-flex align-items-center justify-content-center">
                          Apply For Financing
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-0 m-0 col-12 col-lg-6">
            <Link href="/cars">
              <a className="p-0 m-0 w-100 h-100">
                <div className="p-0 m-0 h-100 linkto_img_container">
                  <img
                    src={CDN_BASE_URL + dealerData?.testDrive_image_url}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="p-2 px-3 m-0 w-100 linkto_img_text_div__container">
                    <span className="linkto_img_text_span__container d-flex align-items-center justify-content-center">
                      View Inventory
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LinkTo;
