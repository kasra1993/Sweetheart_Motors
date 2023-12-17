import Link from "next/link";
import { CDN_BASE_URL } from "../../../../constant/base";
import { findScript } from "../../../../utils/common/html_script";

const Welcome = (props) => {
  const { dealerData } = props;
  return (
    <div className="px-lg-5 px-md-3 px-1 py-5 bg-white p-0 m-0">
      <div className="p-0 m-0 w-100 row background_handler  ">
        <div
          className="p-0 m-0 col-12 col-lg-6 px-2 px-lg-4 d-flex py-5 py-md-0
               flex-column justify-content-center align-items-between"
          style={{ position: "relative" }}
        >
          <div className="p-0 m-0 d-flex justify-content-start align-items-center">
            <h3 className="p-0 m-0 pt-2 text-uppercase home_welcome_title_sizing">
              Your Local Used Vehicle Specialist
            </h3>
          </div>
          <div className="p-0 m-0 py-2 home_welcome_text_sizing">
            Convenience, Savings and LARGE Selection are the most commonly used
            words to describe Sweet Heart Motors. We are one of the largest used
            car dealerships in Edmonton , Alberta. Our &nbsp;
            <Link href="/forms/finance">
              <a className="p-0 m-0 text-danger">Finance Centre</a>
            </Link>
            &nbsp; will get you the best interest rate for your car loan no
            matter if you have Good, Bad, New or No Credit History. But all this
            is just words until you visit us and truly experience our one of a
            kind premier automotive shopping experience.
            <br />
            <br /> Since opening our doors to serve customers from all around
            Alberta & beyond we kept a firm commitment to provide a simple and
            worry free used vehicle buying experience. Our LOW priced, always
            changing, LARGE used vehicle inventory offers our clients a wide
            variety of makes and models to choose from. After all you shouldn't
            have to settle for anything less than the very best when it comes to
            your purchasing your vehicle. Don't wait, come down today and
            experience preferential treatment and our &nbsp;
            <Link href="/forms/finance">
              <a className="p-0 m-0 text-primary">APPROVAL</a>
            </Link>
            .
          </div>
        </div>
        <div className="p-0 m-0 col-lg-6 col-12 pt-5 pt-lg-0 px-3">
          <div className="p-0 m-0 w-100 home-welcome_img_container h-100">
            <img
              src={`${CDN_BASE_URL}${dealerData?.welcome_image_url}`}
              className="w-100 h-100"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
