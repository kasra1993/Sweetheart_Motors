import { useFormik } from "formik";
import { createContext } from "react";
import { useGetVehiclesBaseOnFilter } from "../hooks/vehicles/useGetVehiclesBaseOnFilter";
import { useRouter } from "next/router";
export const InventoryFilterContextFormik = createContext();
export const InventoryFilterContextFormLoading = createContext();
const InventoryFilterContext = ({
  children,
  domain,
  advanceSearchData,
  setVehiclesData,
  makeParam,
  minOdometer,
  maxOdometer,
  minPrice,
  maxPrice,
}) => {
  const { query } = useRouter();
  const { isLoading, mutate } = useGetVehiclesBaseOnFilter(
    {
      onSuccessFunction: (data) => {
        setVehiclesData(data);
      },
    },
    domain
  );

  const currentYear = new Date().getFullYear();
  const formik = useFormik({
    initialValues: {
      // url: domain,
      fuel_type: "",
      engine_cylinders: "",
      year_start: query?.Minyear || "1970",
      year_end: query?.Maxyear || currentYear,
      price_low: minPrice,
      price_high: maxPrice,
      odometer_low: minOdometer,
      odometer_high: maxOdometer,
      odometer_type: 2,
      make: query?.make || "",
      model: query?.model || "",
      transmission: "",
      body_style: "",
      // drive_train: "",
      doors: "",
      interior_color: "",
      Exterior_color: "",
      sortKind: {
        kind: "",
        type: null,
        order: 0,
      },
    },
    onSubmit: (values, { resetForm }) => {
      const body = {
        ...values,
        fuel_type: values.fuel_type,
        engine_cylinders: values.engine_cylinders,
        make: values.make,
        model: values.model,
        transmission: values.transmission,
        body_style: values.body_style,
        drive_train: values.drive_train,
        doors: values.doors,
        interior_color: values.interior_color,
        Exterior_color: values.Exterior_color,
      };
      mutate(body);
    },
    enableReinitialize: true,
  });
  return (
    <InventoryFilterContextFormik.Provider value={formik}>
      <InventoryFilterContextFormLoading.Provider value={isLoading}>
        {children}
      </InventoryFilterContextFormLoading.Provider>
    </InventoryFilterContextFormik.Provider>
  );
};

export default InventoryFilterContext;
