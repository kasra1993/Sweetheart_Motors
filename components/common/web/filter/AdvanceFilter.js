import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Select from "react-select";
import {
  reactSelectAdvanceSearchColorStyle,
  reactSelectStyleAdvanceSearch,
} from "../../../../constant/advance_search";
import { useGetVehiclesBaseOnFilter } from "../../../../hooks/vehicles/useGetVehiclesBaseOnFilter";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import SelectBox from "../../../layout/forms/select_box";
import MultiRangeSlider from "./MultiRangeSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Autoplay, Pagination } from "swiper";
import { useInventoryFilterFormik } from "../../../../hooks/context/useInventoryFilterFormik";
import ComponentHeader from "../../layout/header/component_header";
import { calculateYear } from "../../../../utils/common/calculate_year";
import { calculateOdometers } from "../../../../utils/common/calculate_odometer";
import { calculatePrice } from "../../../../utils/common/calculate_price";
SwiperCore.use([Navigation, Thumbs, Autoplay, Pagination]);
const AdvanceFilter = (props) => {
  const {
    domain,
    advanceSearchData,
    setVehiclesData,
    makeParam,
    minOdometer,
    maxOdometer,
    minPrice,
    maxPrice,
    setLoading,
    vehiclesData,
    isClassic,
  } = props;
  const [years] = useState(calculateYear);
  const [odometers] = useState(calculateOdometers(minOdometer, maxOdometer));
  const [prices] = useState(calculatePrice(minPrice, maxPrice));
  const formik = useInventoryFilterFormik();
  const { bodyStyle, color, drive_type_list, transmission, vehicleModel } =
    advanceSearchData;
  const cureentYear = new Date().getFullYear();
  const makes = vehicleModel ? Object.entries(vehicleModel) : [];
  const engineOptions = [
    { value: 2, label: "2 Cylinder" },
    { value: 4, label: "4 Cylinder" },
    { value: 6, label: "6 Cylinder" },
    { value: 8, label: "8 Cylinder" },
    { value: 10, label: "10 Cylinder" },
    { value: 12, label: "12 Cylinder" },
    { value: "Electric", label: "Electric" },
  ];
  const fuelTypeOptions = [
    { value: "Gasoline", label: "Gasoline" },
    { value: "Electric", label: "Electric" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "Other", label: "Other" },
  ];
  const getOptionsForMakeAndModel = (typeOfState) => {
    let makeOption = [];
    let modelOption = [];
    makes?.map((makeAndModel) => {
      makeOption.push({
        value: makeAndModel[0],
        label: makeAndModel[0],
        models: makeAndModel[1],
      });
      makeAndModel[1].map((model) => {
        modelOption.push({
          value: model,
          label: model,
        });
      });
    });
    if (typeOfState === "make") {
      return makeOption;
    } else if (typeOfState === "model") {
      return modelOption;
    } else {
      return [];
    }
  };
  const [makeOptions, setMakeOptions] = useState(() =>
    getOptionsForMakeAndModel("make")
  );
  const [modelOptions, setModelOptions] = useState(() =>
    getOptionsForMakeAndModel("model")
  );
  const driveTypeOption = drive_type_list?.map((driveType) => ({
    value: driveType,
    label: driveType,
  }));
  const doorsOption = [1, 2, 3, 4, 6, 8]?.map((doors) => ({
    value: doors,
    label: doors,
  }));
  const bodyStyleOption = bodyStyle?.map((bodyStyle) => ({
    value: bodyStyle?.name,
    label: bodyStyle?.name,
  }));
  const transmitionOption = transmission?.map((transmition) => ({
    value: transmition?.name,
    label: transmition?.name,
  }));
  const colorOption = color?.map((extriorColor) => ({
    value: extriorColor?.name,
    label: extriorColor?.name,
    colorObject: extriorColor,
  }));

  return (
    <>
      <div className="px-1 px-sm-5 px-lg-3 py-3 py-sm-5 m-0 row w-100 inventory_form__container">
        <form className="p-0 m-0 row w-100 " onSubmit={formik.handleSubmit}>
          {/* <div
          style={{ position: "relative", zIndex: "0" }}
          className="p-0 m-0 col-12 col-md-4 px-2  my-4"
        > */}
          <SelectBox
            style={reactSelectInputStyle}
            options={makeOptions}
            name={"make"}
            placeholder={"Any Make"}
            formik={formik}
            onChange={(e) => {
              formik.setFieldValue("make", e?.value);
              const modelOption = e?.models?.map((model) => ({
                value: model,
                label: model,
              }));
              setModelOptions(modelOption);
            }}
            className="col-12 col-sm-6 col-lg-3 p-2 m-0"
          />
          <SelectBox
            style={reactSelectInputStyle}
            options={modelOptions}
            name={"model"}
            placeholder={"Any Model"}
            formik={formik}
            className="col-12 col-sm-6 col-lg-3 p-2 m-0"
          />

          <div className="p-0 m-0 col-12 col-sm-6 col-lg-3 p-2">
            <SelectBox
              style={reactSelectInputStyle}
              options={years}
              name="year_start"
              placeholder={"Min Year"}
              formik={formik}
              className="w-100"
            />
          </div>

          <div className="p-0 m-0 col-12 col-sm-6 col-lg-3 p-2">
            <SelectBox
              style={reactSelectInputStyle}
              options={years}
              name={"year_end"}
              placeholder={"Max Year"}
              formik={formik}
              className="w-100"
            />
          </div>
          <div className="p-0 m-0 col-12 col-sm-6 col-lg-3 p-2">
            <SelectBox
              style={reactSelectInputStyle}
              options={prices}
              name={"price_low"}
              placeholder={"Min price"}
              formik={formik}
              className="w-100"
            />
          </div>
          <div className="p-0 m-0 col-12 col-sm-6 col-lg-3 p-2">
            <SelectBox
              style={reactSelectInputStyle}
              options={prices}
              name={"price_high"}
              placeholder={"Max price"}
              formik={formik}
              className="w-100"
            />
          </div>
          <div className="p-0 m-0 col-12 col-sm-6 col-lg-3 p-2">
            <SelectBox
              style={reactSelectInputStyle}
              options={odometers}
              name={"odometer_low"}
              placeholder={"Min Km"}
              formik={formik}
              className="w-100"
            />
          </div>
          <div className="p-0 m-0 col-12 col-sm-6 col-lg-3 p-2">
            <SelectBox
              style={reactSelectInputStyle}
              options={odometers}
              name={"odometer_high"}
              placeholder={"Max Km"}
              formik={formik}
              className="w-100"
            />
          </div>
          <div className="p-0 m-0 col-12 col-sm-6 col-lg-3 p-2">
            <SelectBox
              style={reactSelectInputStyle}
              options={engineOptions}
              name={"engine_cylinders"}
              placeholder={"Any Engine"}
              formik={formik}
              className="w-100"
            />
          </div>
          <SelectBox
            style={reactSelectAdvanceSearchColorStyle}
            options={colorOption}
            name={"Exterior_color"}
            placeholder={"Any Color"}
            formik={formik}
            className="col-12 col-sm-6 col-lg-3 p-2 m-0"
          />
          <SelectBox
            style={reactSelectInputStyle}
            options={transmitionOption}
            name={"transmission"}
            placeholder={"Any Transmission"}
            formik={formik}
            className="col-12 col-sm-6 col-lg-3 p-2 m-0"
          />
          <SelectBox
            style={reactSelectInputStyle}
            options={bodyStyleOption}
            name={"body_style"}
            placeholder={"Any Body Style"}
            formik={formik}
            className="col-12 col-sm-6 col-lg-3 p-2 m-0"
          />
          <div className="p-0 m-0 col-12 col-sm-6 col-lg-3 p-2">
            <SelectBox
              style={reactSelectInputStyle}
              options={fuelTypeOptions}
              name={"fuel_type"}
              placeholder={"Any Fuel Type"}
              formik={formik}
              className="w-100"
            />
          </div>

          {/* <MultiRangeSlider
            min={minOdometer}
            max={maxOdometer}
            text="Odometer:"
            type="odometer"
            names={["odometer_low", "odometer_high", "odometer_type"]}
            step={1000}
            onChange={({ min, max }) => {
              formik.setFieldValue("odometer_low", min);
              formik.setFieldValue("odometer_high", max);
            }}
            formik={formik}
          /> */}
          {/* </div> */}
          {/* <div
          style={{ position: "relative", zIndex: "0" }}
          className="p-0 m-0 col-12 col-md-4 px-2  my-4"
        >
          <MultiRangeSlider
            min={isClassic ? 0 : 1970}
            max={isClassic ? 1970 : cureentYear}
            type="year"
            text="year:"
            formik={formik}
            names={["year_start", "year_end"]}
            onChange={({ min, max }) => {
              formik.setFieldValue("year_start", min);
              formik.setFieldValue("year_end", max);
            }}
          />
        </div>
        <div
          style={{ position: "relative", zIndex: "0" }}
          className="p-0 m-0 col-12 col-md-4 px-2  my-4"
        >
          <MultiRangeSlider
            min={minPrice}
            max={maxPrice}
            text="Price:"
            type="price"
            symbol="$"
            step={1000}
            names={["price_low", "price_high"]}
            formik={formik}
            onChange={({ min, max }) => {
              formik.setFieldValue("price_low", min);
              formik.setFieldValue("price_high", max);
            }}
          />
        </div> */}
        <div className="row p-0 m-0 justify-content-end w-100">
          <div className="p-0 m-0 py-2 col-12 col-sm-6 col-md-3 p-2">
            <button
              onClick={() => {
                formik.resetForm();
              }}
              type="button"
              className="btn white_button w-100 "
            >
              Reset
            </button>
          </div>
          <div className="p-0 m-0 py-2 col-12 col-sm-6 col-md-3 p-2">
            <button type="submit" className="btn yellow_button w-100">
              Search
            </button>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};
export default AdvanceFilter;
