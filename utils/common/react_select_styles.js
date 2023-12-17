export const colorBoxForReactSelect = (color = "#000") => ({
  alignItems: "center",
  display: "flex",
});
export const reactSelectInputStyle = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    border: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#1E1E1E",
    border: "none",
    right: "100px",
  }),
  control: (base, state) => ({
    ...base,
    // backgroundColor: "#d0dce7",
    backgroundColor: "transparent",
    color: "#1E1E1E",
    height: "40px",
    border: "1px solid #838383",
    fontSize: "13px",
    borderRadius: "10px",
    top: "50%",
    transform: "translateY(-50%)",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#000",
      cursor: "pointer",
      fontSize: "13px",
      zIndex: 1000,
    };
  },
  menu: (style) => {
    return {
      ...style,
      zIndex: 3000,
      fontSize: "13px",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#1E1E1E",
      fontSize: "13px",
      border: "none",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    fontSize: "13px",
    color: "#1E1E1E",
    border: "none",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#1E1E1E",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }),
  container: (provided) => ({ ...provided, border: "none" }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};
export const reactSelectInputStyleAdvanceSearchHome = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    border: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#CC2A22",
    border: "none",
    right: "100px",
  }),
  control: (base, state) => ({
    ...base,
    // backgroundColor: "#d0dce7",
    border: "1px solid #83383",
    borderRadius: "10px",
    fonSize: "14px",
    // border: "none",
    color: "#CC2A22",
    backgroundColor: "#fff",
    height: "44px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#CC2A22",
      cursor: "pointer",
      zIndex: 1000,
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#CC2A22",
      border: "none",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#CC2A22",
    border: "none",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#CC2A22",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }),
  container: (provided) => ({ ...provided, border: "none" }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  menu: (provided) => ({ ...provided, zIndex: "20" }),
};
