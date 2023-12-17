import { STATIC_COLOR } from "../../../../constant/home/home";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
import { CDN_BASE_URL } from "../../../../constant/base";
import { priceComma } from "../../../../utils/common/price_odometer_handler";
import { FaChevronRight } from "react-icons/fa";
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
const SpecialInventoryCarsThumb = (props) => {
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
      style={{ position: "relative", cursor: "pointer" }}
      className="row w-100 p-0 m-0 align-items-center"
    >
      <div className="p-0 m-0 col-2 special_home_thumb_img">
        {item?.cover_image ? (
          <img
            src={CDN_BASE_URL + item?.cover_image}
            width="100%"
            className="p-0 m-0"
            style={{ objectFit: "contain", height: "auto" }}
          />
        ) : (
          <img
            className="p-0 m-0 special_car_img_style"
            style={{ objectFit: "contain" }}
            src="https://hillzimage.blob.core.windows.net/test/default-inventory-image-car-med.jpeg"
          />
        )}
      </div>
      <div className="p-0 px-2 m-0 col-10">
        <div
          className={`p-2 py-3 m-0 d-flex justify-content-between align-items-center w-100 ${
            index === activeIndex
              ? "home_special_thumb_style-active"
              : "home_special_thumb_style"
          }`}
        >
          <div
            className={`p-0 m-0 d-flex flex-column justify-content-center align-items-start px-3 special_inventory_thumb_txt ${
              index === activeIndex
                ? "special_inventory_thumb_txt-active"
                : "special_inventory_thumb_txt"
            }`}
          >
            <div className="p-0 m-0 ">
              {item?.Vehicle?.model_year}&nbsp;{item?.Vehicle?.make}&nbsp;
              {makeSlug?.model}
            </div>
            <p className="p-0 m-0">
              Price: $
              {item?.special_price == 0
                ? priceComma(item?.sell_price, 2)
                : priceComma(item?.special_price, 2)}
            </p>
          </div>
          <div className="p-0 m-0 special_home_btn d-flex justify-content-center align-items-center">
            <FaChevronRight color="#cc2a22" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecialInventoryCarsThumb;
