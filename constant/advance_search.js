export const reactSelectStyle = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#ce1431",
  }),
  control: (provided) => ({
    ...provided,
    border: "none",
  }),
  container: (provided) => ({ ...provided, borderRadius: 0 }),
  placeholder: (provided) => ({ ...provided, color: "#ce1431" }),
};
const colorBoxForReactSelect = (color = "#000") => ({
  alignItems: "center",
  display: "flex",
  ":before": {
    backgroundColor: `#${color}`,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 20,
    width: 20,
    border: "1px dashed #8d99ae99",
  },
});
export const reactSelectColorStyle = {
  control: (base, state) => ({
    ...base,
    // boxShadow: state.isFocused ? "0px 0px 0px 4px rgba(28, 191, 128, 0.3)" : "",
    border: "none",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#000",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      ...colorBoxForReactSelect(),
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#ce1431",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
  }),
  container: (provided) => ({ ...provided, borderRadius: 5 }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#ce1431",
  }),
};

export const reactSelectAdvanceSearchColorStyle = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "10px",
    color: "#1e1e1e",
    border: "1px solid #838383",
    height: "40px",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#1e1e1e",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#1e1e1e",
      ...colorBoxForReactSelect(),
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#1e1e1e",
    FontSize: "14px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: "#1e1e1e",
    ...colorBoxForReactSelect(data?.colorObject?.code),
  }),
  container: (provided) => ({
    ...provided,
    border: "none",
    borderRadius: 0,
    backgroundColor: "#fff",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#1e1e1e",
  }),
};
export const reactSelectStyleAdvanceSearch = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#f4f4f4",
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "trasparent",
    border: "2px solid #f4f4f4",
  }),
  input: (styles) => {
    return {
      ...styles,
      color: "#f4f4f4",
    };
  },
  container: (provided) => ({ ...provided, borderRadius: 0 }),
  placeholder: (provided) => ({ ...provided, color: "#f4f4f4" }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: "#f4f4f4",
  }),
};
