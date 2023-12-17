import {
  useInventoryFilterFormik,
  useInventoryFilterFormLoading,
} from "../../../../hooks/context/useInventoryFilterFormik";
import { handleSortOfInventory } from "../../../../utils/inventory/inventory";

const InventorySortVehicles = ({ vehiclesData }) => {
  const formik = useInventoryFilterFormik();
  const loading = useInventoryFilterFormLoading();
  return (
    <div className="p-2 p-md-4 m-0 w-100">
      <div className="p-0 py-3 m-0 inventory_count_div__container ">
        {vehiclesData?.length} Vehicles
      </div>
      <div className="p-0 m-0 py-4 pl-3 w-100 inventory_sort_div__container d-flex flex-column flex-md-row align-items-start justify-content-start">
        <span className="p-0 m-0 inventory_count_div__txt text-left">
          Sort By:
        </span>

        <div className="p-0 m-0 d-flex flex-wrap align-items-center">
          <button
            type="button"
            disabled={loading}
            className={`m-0 p-0 px-3  inventory_sort_button__container ${
              formik.values.sortKind.kind === "sortYear" &&
              formik.values.sortKind.order === 1
                ? "ASC"
                : formik.values.sortKind.kind === "sortYear" &&
                  formik.values.sortKind.order === 2
                ? "DESC"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleSortOfInventory(formik, "sortYear", true);
            }}
          >
            Year
          </button>
          <button
            type="button"
            disabled={loading}
            className={`m-0 p-0 px-3 inventory_sort_button__container ${
              formik.values.sortKind.kind === "sortMake" &&
              formik.values.sortKind.order === 1
                ? "ASC"
                : formik.values.sortKind.kind === "sortMake" &&
                  formik.values.sortKind.order === 2
                ? "DESC"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleSortOfInventory(formik, "sortMake");
            }}
          >
            Make
          </button>
          <button
            type="button"
            disabled={loading}
            className={`m-0 p-0 px-3  inventory_sort_button__container ${
              formik.values.sortKind.kind === "sortModel" &&
              formik.values.sortKind.order === 1
                ? "ASC"
                : formik.values.sortKind.kind === "sortModel" &&
                  formik.values.sortKind.order === 2
                ? "DESC"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleSortOfInventory(formik, "sortModel");
            }}
          >
            Model
          </button>
          <button
            type="button"
            disabled={loading}
            className={`m-0 p-0 px-3  inventory_sort_button__container ${
              formik.values.sortKind.kind === "sortBodyStyle" &&
              formik.values.sortKind.order === 1
                ? "ASC"
                : formik.values.sortKind.kind === "sortBodyStyle" &&
                  formik.values.sortKind.order === 2
                ? "DESC"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleSortOfInventory(formik, "sortBodyStyle");
            }}
          >
            Body Style
          </button>
          <button
            type="button"
            disabled={loading}
            className={`m-0 p-0 px-3  inventory_sort_button__container border-0 ${
              formik.values.sortKind.kind === "sortPrice" &&
              formik.values.sortKind.order === 1
                ? "ASC"
                : formik.values.sortKind.kind === "sortPrice" &&
                  formik.values.sortKind.order === 2
                ? "DESC"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleSortOfInventory(formik, "sortPrice", true);
            }}
          >
            Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventorySortVehicles;
