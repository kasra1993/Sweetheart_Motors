import Link from "next/link";
import { CDN_BASE_URL } from "../../../constant/base";
import { findScript } from "../../../utils/common/html_script";

const FinanceHome = (props) => {
  const { dealerData } = props;
  return (
    <div className="px-lg-5 px-md-3 px-1 py-5 bg-white p-0 m-0 home_finance_bg w-100">
      <div className="p-0 m-0 w-100 row background_handler  ">
        <div
          className="p-0 m-0 col-12 col-lg-6 px-2 px-lg-4 d-flex py-5 py-md-4 order-lg-2 flex-column justify-content-center align-items-between"
          style={{ position: "relative" }}
        >
          <div className="p-0 m-0 d-flex justify-content-start align-items-center">
            <h3 className="p-0 m-0 pt-2 text-uppercase home_finance_title_sizing">
              Apply For Financing
            </h3>
          </div>
          <div
            className="p-0 m-0 py-2 home_finance_text_sizing"
            dangerouslySetInnerHTML={{
              __html: findScript(dealerData?.text_us_now_desc),
            }}
          />
          <div className="p-0 m-0 d-flex">
            <Link href="/forms/finance">
              <a className="p-0 m-0 home_finance_btn d-flex justify-content-center align-items-center py-1 px-5">
                Apply Now !
              </a>
            </Link>
          </div>
        </div>
        <div className="p-0 m-0 col-lg-6 col-12 py-y px-3 order-lg-1">
          <div className="p-0 m-0 w-100 home-finance_img_container h-100">
            <img
              src={`${CDN_BASE_URL}${dealerData?.financial_image_url}`}
              className="w-100 h-100"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceHome;
