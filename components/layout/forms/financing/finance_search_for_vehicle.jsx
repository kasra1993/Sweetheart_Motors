import { useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { FaTrash } from "react-icons/fa";

const FinanceSearchForVehicle = (props) => {
  const { vehicleDataForSearch, formik } = props;
  const [searchResult, setSearchResult] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const inputRef = useRef(null);
  const stringDataForSearch = useMemo(() => {
    return vehicleDataForSearch?.data?.map((vehicle) => ({
      name:
        vehicle?.Vehicle?.model_year +
        " " +
        vehicle?.Vehicle?.make?.toLowerCase() +
        " " +
        vehicle?.Vehicle?.model?.toLowerCase() +
        " - " +
        vehicle?.stock_NO,
      id: vehicle?.id,
    }));
  }, []);
  const handleSearchBoxChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setSearchResult(null);
    } else {
      const searchingResult = stringDataForSearch?.filter((vehicle) =>
        vehicle?.name?.includes(inputValue)
      );
      setSearchResult(searchingResult);
    }
  };
  const handleSelectVehicle = (id, name) => {
    if (formik.values.frk_desire_MidVclDS_id !== id) {
      formik.setFieldValue("frk_desire_MidVclDS_id", id);
    }
    if (selectedVehicle !== name) {
      setSelectedVehicle(name);
    }
    setSearchResult(null);
    inputRef.current.value = "";
  };
  const handleRemoveVehicle = () => {
    formik.setFieldValue("frk_desire_MidVclDS_id", null);
    setSelectedVehicle();
  };
  return (
    <div className="p-0 m-0 w-100">
      <div
        className="form-group p-0 m-0 mt-2 mb-2 p-1"
        style={{ position: "relative" }}
      >
        <input
          ref={inputRef}
          name="user_prev_emp_Duration_month"
          className="form-control  eforms_input_container"
          placeholder="Search (Year Make Model)"
          onChange={handleSearchBoxChange}
        />
        {formik.values.frk_desire_MidVclDS_id && selectedVehicle !== null && (
          <div className="p-0 m-0 my-2 mb-1 col-12">
            <div className="p-0 m-0 d-flex align-items-center justify-content-between">
              <span className="mx-2">{selectedVehicle}</span>
              <FaTrash
                color="#c6c6c6"
                style={{ cursor: "pointer" }}
                onClick={handleRemoveVehicle}
              />
            </div>
          </div>
        )}
        {searchResult !== null && (
          <div
            className="p-0 m-0 result-input-simple-search w-100 border-0"
            style={{
              maxHeight: "300px",
            }}
          >
            <div
              className={`p-1 m-0 w-100 row rounded bg-white`}
              // style={{
              //   backgroundColor: "#323232",
              // }}
            >
              {searchResult?.map((vehicle) => (
                <div
                  className="p-0 px-2 m-0 mb-1 col-12"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    handleSelectVehicle(vehicle?.id, vehicle?.name)
                  }
                >
                  <div className="p-0 m-0 d-flex align-items-center">
                    <input
                      type="checkbox"
                      name={vehicle?.name}
                      id={vehicle?.name}
                      style={{ cursor: "pointer" }}
                      checked={
                        formik.values.frk_desire_MidVclDS_id === vehicle?.id
                      }
                      //   value={
                      //     formik.values.frk_desire_MidVclDS_id === vehicle?.id
                      //   }
                    />
                    <span className="mx-2">{vehicle?.name}</span>
                  </div>
                </div>
              ))}
              {searchResult?.length === 0 && (
                <div className="p-0 m-0 col-12">
                  There isn't any vehicle with this detail
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceSearchForVehicle;
