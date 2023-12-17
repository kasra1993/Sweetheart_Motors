import { STATIC_COLOR } from "../../../../constant/home/home";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
import { CDN_BASE_URL } from "../../../../constant/base";
import { priceComma } from "../../../../utils/common/price_odometer_handler";
// const findBodyStyle = (id, data) => {
//   const findBodyStyle = data?.filter((item) => item.id === id);
//   if (findBodyStyle.length !== 0) {
//     return findBodyStyle[0].name;
//   }
//   return;
// };
// const findTransmission = (id, data) => {
//   const findTransmission = data?.filter((item) => item.id === id);
//   if (findTransmission.length !== 0) {
//     return findTransmission[0].name;
//   }
//   return;
// };
const SpecialInventoryCars = (props) => {
  const { item, bodyStyleData, activeIndex, index, transmissionData } = props;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(item?.Vehicle?.make),
      model: dashRemoverForSlug(item?.Vehicle?.model),
    }));
  }, []);
  return (
    <div
      style={{ position: "relative" }}
      className="row d-flex flex-column w-100 p-0 m-0"
    >
      <Link
        href={`/cars/used/${item?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${item?.id}`}
      >
        <a
          className="p-0 m-0 bg-white shadow w-100"
          style={{ borderRadius: "20px", position: "relative" }}
        >
          <div className="p-0 m-0 home-special_img_container">
            {item?.cover_image ? (
              <img
                src={CDN_BASE_URL + item?.cover_image}
                width="100%"
                className="p-0 m-0"
                style={{ objectFit: "contain", height: "auto" }}
              />
            ) : (
              <img
                className="p-0 m-0 special_car_img_style special_cover_car_img"
                width="100%"
                style={{ objectFit: "contain" }}
                src="https://hillzimage.blob.core.windows.net/test/default-inventory-image-car-med.jpeg"
              />
            )}
          </div>
          <div className="p-0 m-0 px-3 py-3 d-flex flex-column justify-content-center align-items-start">
            <div className="p-0 m-0 d-flex text-decoration-none justify-content-start text-dark">
              <p className="special_title p-0 m-0">
                {item?.Vehicle?.model_year}&nbsp;{item?.Vehicle?.make}&nbsp;
                {makeSlug?.model}
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center text-dark">
              <p className="special_price">
                Price: $
                {item?.special_price == 0
                  ? priceComma(item?.sell_price, 2)
                  : priceComma(item?.special_price, 2)}
              </p>
            </div>
            <div className="p-0 m-0 w-100 d-none d-sm-flex justify-content-between py-2 special_home_detail">
              <p className="p-0 m-0">
                Odometer&nbsp;:&nbsp;{priceComma(item?.odometer, 2)}{" "}
                {item?.odometer_type === 1 ? "MI" : "KM"}
              </p>
              <p className="p-0 m-0">
                Transmission&nbsp;:&nbsp;{item?.Vehicle?.transmission}{" "}
              </p>
            </div>
            <div className="p-0 m-0 w-100 d-none d-sm-flex justify-content-between py-2 special_home_detail">
              <p className="p-0 m-0">
                Drive Type&nbsp;:&nbsp;{item?.Vehicle?.drive_type}{" "}
              </p>
              <p className="p-0 m-0">
                Body Style&nbsp;:&nbsp;{item?.Vehicle?.body_style}{" "}
              </p>
            </div>
            <div className="p-0 m-0 w-100 row h-100">
              <Link
                href={`/cars/used/${item?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${item?.id}`}
              >
                <a className="p-0 m-0 py-2 w-100 col-12 special_feature_home_btn">
                  View Details
                </a>
              </Link>
            </div>
          </div>
        </a>
      </Link>
      <div
        className={`p-0 m-0 d-flex flex-column align-items-start justify-content-center`}
      >
        {" "}
      </div>
    </div>
  );
};
export default SpecialInventoryCars;
