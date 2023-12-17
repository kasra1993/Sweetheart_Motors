import Link from "next/link";
import { CDN_BASE_URL } from "../../../constant/base";
import { findScript } from "../../../utils/common/html_script";
const HomeCategories = (props) => {
  const { dealerData } = props;
  return (
    <div className="p-0 m-0 py-5 w-100 row justify-content-center">
      <div className="p-0 m-0 col-12 px-2">
        <div className="p-0 px-2 px-md-3 px-lg-4 m-0 pt-0 pt-md-3 pt-lg-0 row w-100 justify-content-center">
          <div className="p-0 m-0 col-12 col-md-6 col-lg-3 p-2 pt-4 pt-lg-0">
            <div className="p-0 m-0 w-100 h-100 d-flex align-items-between">
              <Link href="/about-us">
                <a className="p-0 m-0 h-100">
                  <div className="d-flex flex-column linkto_container shadow w-100 h-100 justify-content-between">
                    <div className="p-0 m-0 home-linkto_img_container">
                      <img
                        src={CDN_BASE_URL + dealerData?.testDrive_image_url}
                        alt=""
                        className="w-100"
                      />
                      <p className="text-white apply_image">About Us</p>
                    </div>
                    <h6 className="p-0 m-0 pt-3 px-2 apply_image-title">
                      Who We Are
                    </h6>
                    <div className="p-0 linkto_img_text_span__container d-flex align-items-center justify-content-center">
                      {/* View Inventory */}
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="px-2 text-start">
                          <div
                            className="p-0 m-0 pb-3 py-2 text-justify home_link_text_sizing"
                            dangerouslySetInnerHTML={{
                              // __html: findScript(props?.dealerData?.welcome_note),
                              __html: findScript(
                                props?.dealerData?.testDrive_desc
                              ),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="p-0 m-0 col-12 col-md-6 col-lg-3 p-2 pt-4 pt-lg-0">
            <div className="p-0 m-0 w-100 h-100 d-flex align-items-between">
              <Link href="/forms/contact-us">
                <a className="p-0 m-0 h-100">
                  <div className="d-flex flex-column linkto_container shadow w-100 h-100 justify-content-between">
                    <div className="p-0 m-0 home-linkto_img_container">
                      <img
                        src={CDN_BASE_URL + dealerData?.contactUs_image_url}
                        alt=""
                        className="w-100"
                      />
                      <p className="text-white apply_image">Contact Us</p>
                    </div>
                    <h6 className="p-0 m-0 pt-3 px-2 apply_image-title">
                      Contact Us Today
                    </h6>
                    <div className="p-0 linkto_img_text_span__container d-flex align-items-center justify-content-center">
                      {/* View Inventory */}
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="px-2 text-start">
                          <div
                            className="p-0 m-0 pb-3 py-2 text-justify home_link_text_sizing"
                            dangerouslySetInnerHTML={{
                              // __html: findScript(props?.dealerData?.welcome_note),
                              __html: findScript(
                                props?.dealerData?.contactUs_desc
                              ),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="p-0 m-0 col-12 col-md-6 col-lg-3 p-2 pt-4 pt-lg-0">
            <div className="p-0 m-0 w-100 h-100 d-flex align-items-between">
              <Link href="/forms/finance">
                <a className="p-0 m-0 h-100">
                  <div className="d-flex flex-column linkto_container shadow w-100 h-100 justify-content-between">
                    <div className="p-0 m-0 home-linkto_img_container">
                      <img
                        src={CDN_BASE_URL + dealerData?.financial_image_url}
                        alt=""
                        className="w-100"
                      />
                      <p className="text-white apply_image">
                        Apply For Financing
                      </p>
                    </div>
                    <h6 className="p-0 m-0 pt-3 px-2 apply_image-title">
                      Finance Centre
                    </h6>
                    <div className="p-0 linkto_img_text_span__container d-flex align-items-center justify-content-center">
                      {/* View Inventory */}
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="px-2 text-start">
                          <div
                            className="p-0 m-0 pb-3 py-2 text-justify home_link_text_sizing"
                            dangerouslySetInnerHTML={{
                              // __html: findScript(props?.dealerData?.welcome_note),
                              __html: findScript(
                                props?.dealerData?.financial_desc
                              ),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="p-0 m-0 col-12 col-md-6 col-lg-3 p-2 pt-4 pt-lg-0">
            <div className="p-0 m-0 w-100 h-100 d-flex align-items-between">
              <Link href="/cars">
                <a className="p-0 m-0 h-100">
                  <div className="d-flex flex-column linkto_container shadow w-100 h-100 justify-content-between">
                    <div className="p-0 m-0 home-linkto_img_container">
                      <img
                        src={
                          CDN_BASE_URL + dealerData?.serviceApointment_image_url
                        }
                        alt=""
                        className="w-100"
                      />
                      <p className="text-white apply_image">View Inventory</p>
                    </div>
                    <h6 className="p-0 m-0 pt-3 px-2 apply_image-title">
                      Choose Your Next Car!
                    </h6>
                    <div className="p-0 linkto_img_text_span__container d-flex align-items-center justify-content-center">
                      {/* View Inventory */}
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="px-2 text-start">
                          <div
                            className="p-0 m-0 pb-3 py-2 text-justify home_link_text_sizing"
                            dangerouslySetInnerHTML={{
                              // __html: findScript(props?.dealerData?.welcome_note),
                              __html: findScript(
                                props?.dealerData?.orderPart_desc
                              ),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
