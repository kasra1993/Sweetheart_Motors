import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import EformsTimeWork from "./eforms_time_work";
import Link from "next/link";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
import OperationHoures from "../../layout/footer/operationhouers";
const EformsConatctInfo = (props) => {
  const { dealerData, direction } = props;
  return (
    <div className="p-0 m-0 px-3 mb-4 w-100 d-flex flex-column flex-md-row flex-lg-column">
      <div className="col-12 col-md-6 col-lg-12 p-0">
        <h3 className="eforms_title py-0">Contact Information</h3>
        <p className="p-0 m-0">
          <FaPhone className="m-0 mr-2 p-0" color="#8F8F8F" />
          <a
            href={phonenumberConvertor(dealerData?.business_phone)}
            className="p-0 m-0 text-decoration-none"
            rel="noopener noreferrer"
            style={{ color: "#8F8F8F" }}
          >
            {dealerData?.business_phone}
          </a>
        </p>
        <p className="p-0 m-0" style={{ color: "#8F8F8F" }}>
          <FaMapMarkerAlt className="m-0 mr-2 p-0" color="#8F8F8F" />
          {dealerData?.business_street}
          {", "}
          {dealerData?.business_city?.city}
          {", "}
          {dealerData?.business_city?.Province?.province === "British Columbia"
            ? "BC"
            : dealerData?.business_city?.Province?.province}
          {", "}
          {dealerData?.business_postal}
        </p>
      </div>

      <div className="w-100 p-0 m-0">
        {/* <OperationHoures timeWork={dealerData?.timeWork} /> */}
        <EformsTimeWork timework={dealerData?.timeWork} />
        {/* {!direction && (
          <div
            className="w-100 p-0 m-0 pt-3  d-flex justify-content-end align-items-center"
            style={{ transform: "translateY(50%)" }}
          >
            <Link href="/direction">
              <a className="btn white_button w-75 d-flex justify-content-center align-items-center">
                <span className="p-0 m-0  d-flex justify-content-center align-items-center">
                  Get Direction
                </span>
              </a>
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default EformsConatctInfo;
