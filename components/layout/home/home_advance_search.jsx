import { useFormik } from "formik";
import { reactSelectInputStyleAdvanceSearchHome } from "../../../utils/common/react_select_styles";
import SelectBox from "../forms/select_box";
import { useState } from "react";
import { calculateYear } from "../../../utils/common/calculate_year";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
export const HomeAdvanceSearch = (props) => {
  const [years] = useState(calculateYear);
  const { advanceSearchData } = props;
  const { vehicleModel } = advanceSearchData;
  const makes = vehicleModel ? Object.entries(vehicleModel) : [];

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
  const formik = useFormik({
    initialValues: {
      make: "",
      model: "",
      Minyear: "",
      Maxyear: "",
    },
  });
  return (
    <div className="p-0 m-0 w-100 px-3 px-lg-0 px-lg-5 pt-5 pb-0 search">
      <div className="row p-0 m-0 px-lg-4 py-3 py-md-4 w-100 d-flex row justify-content-center home__search-div bg-white shadow">
        <div className="p-0 m-0 col-12 col-sm-6 col-lg px-2 py-sm-2 ">
          <SelectBox
            style={reactSelectInputStyleAdvanceSearchHome}
            options={makeOptions}
            name={"make"}
            placeholder={"Make"}
            formik={formik}
            onChange={(e) => {
              formik.setFieldValue("make", e?.value);
              const modelOption = e?.models?.map((model) => ({
                value: model,
                label: model,
              }));
              setModelOptions(modelOption);
            }}
            className="w-100 my-2 "
          />
        </div>
        <div className="p-0 m-0 col-12 col-sm-6 col-lg px-2 py-sm-2">
          <SelectBox
            style={reactSelectInputStyleAdvanceSearchHome}
            options={modelOptions}
            name={"model"}
            placeholder={"Model"}
            formik={formik}
            className="w-100 my-2 "
          />
        </div>
        <div className="p-0 m-0 col-12 col-sm-6 col-lg px-2 py-sm-2">
          <SelectBox
            style={reactSelectInputStyleAdvanceSearchHome}
            options={years}
            name={"Minyear"}
            placeholder={"Min Year"}
            formik={formik}
            className="w-100 my-2 "
          />
        </div>
        <div className="p-0 m-0 col-12 col-sm-6 col-lg-3 px-2 py-sm-2">
          <SelectBox
            style={reactSelectInputStyleAdvanceSearchHome}
            options={years}
            name={"Maxyear"}
            placeholder={"Max Year"}
            formik={formik}
            className="w-100 my-2"
          />
        </div>
        <div className="p-0 m-0 col-2 col-lg-1 w-100 px-2 py-sm-2 d-flex justify-content-center align-items-center">
          <div className="p-0 m-0 w-100 row justify-content-center h-100 align-items-center">
            <button
              className="p-2 py-lg-2 m-0 w-100 d-flex align-items-center justify-content-center "
              style={{
                backgroundColor: "#CC2A22",
                borderRadius: "10px",
                border: "none",
              }}
            >
              <Link
                href={`/cars?make=${formik.values.make}&model=${formik.values.model}&Minyear=${formik.values.Minyear}&Maxyear=${formik.values.Maxyear}`}
              >
                <a>
                  <span className="p-0 m-0 w-100 d-flex align-items-center justify-content-center">
                    <i className="p-0 m-0 px-2 w-100 d-flex align-items-center justify-content-center">
                      {" "}
                      <FaSearch color="#fff" size={25} />
                    </i>
                  </span>
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAdvanceSearch;
