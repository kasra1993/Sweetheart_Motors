import { useEffect, useState } from "react";
import Link from "next/link";
import { dashRemoverForSlug } from "../../../utils/common/dash_remover";
import { priceComma } from "../../../utils/common/price_odometer_handler";
export const SpecialCarItem = (props) => {
  const { car } = props;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(car?.Vehicle?.make),
      model: dashRemoverForSlug(car?.Vehicle?.model),
    }));
  }, []);
  return (
    <Link
      key={`specialVehicle${car?.id}`}
      href={`/cars/used/${car?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${car?.id}`}
    >
      <a className="p-0 m-0 mb-0 mb-lg-3  col-11 col-md-10 col-lg-12 text-decoration-none">
        <div className="p-0 m-0 w-100 h-100 pt-3">
          <div className="p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center special_cars_img__container">
            {car?.cover_image !== null ? (
              <img
                className="p-0 m-0 special_car_img_style"
                src={`https://hillzimage.blob.core.windows.net${car?.cover_image}`}
              />
            ) : (
              <img
                className="p-0 m-0 special_car_img_style"
                src="https://hillzimage.blob.core.windows.net/test/default-inventory-image-car-med.jpeg"
              />
            )}
          </div>
          <div className="p-3 special_car_text_container">
            <div className="p-0 m-0 text-left special_model_style">
              {car?.Vehicle?.model_year +
                " " +
                car?.Vehicle?.make +
                " " +
                car?.Vehicle?.model}
            </div>
            <div className="p-0 m-0 row justify-content-between align-items-center">
              <div className="p-0 m-0 special_trim_style">
                {car?.Vehicle?.trim}
              </div>
              <div className="p-0 m-0 special_price_style">
                {"$" + priceComma(car?.special_price, 2)}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default SpecialCarItem;
