import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
// import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
import { priceComma } from "../../../../utils/common/price_odometer_handler";
const EachSpecialInHomePage = (props) => {
  const { vehicle, index, activeIndex } = props;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(vehicle?.Vehicle?.make),
      model: dashRemoverForSlug(vehicle?.Vehicle?.model),
    }));
  }, []);
  return (
    <Link
      href={`/cars/used/${vehicle?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${vehicle?.id}`}
    >
      <a className="p-0 px-2 m-0 w-100 h-100">
        <div className="p-0 m-0 w-100 h-100 hover_card">
          <div className="p-0 m-0 h-100 row ">
            <div
              className={`p-0 m-0 w-100 h-100 col-12 ${
                activeIndex !== index && "card_special_inventory_div"
              }`}
              style={{ position: "relative" }}
            >
              <img
                src={`https://hillzimage.blob.core.windows.net${vehicle?.cover_image}`}
                alt=""
                className="p-0 m-0 home_special_vehicle_img-style "
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  // maxHeight: "40vh",
                }}
              />
              {activeIndex === index && (
                <div className="p-0 m-0 col-12 home_special_detail-container">
                  <div className="p-0 px-3 m-0 d-flex ">
                    <div className="p-0 m-0 home_special_make-div">
                      {vehicle?.Vehicle?.make}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="p-0 m-0 home_special_make-div-child">
                      <div className="p-0 m-0">
                        {vehicle?.Vehicle?.model_year +
                          " " +
                          vehicle?.Vehicle?.make +
                          " " +
                          vehicle?.Vehicle?.model}
                      </div>
                      <div className="p-0 m-0 text-center">
                        <p className="p-0 m-0">
                          {priceComma(vehicle?.sell_price, 2)}
                        </p>
                      </div>
                    </div> */}
      </a>
    </Link>
  );
};

export default EachSpecialInHomePage;
