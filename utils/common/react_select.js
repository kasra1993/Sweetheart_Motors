const colorBoxForReactSelect = (color = "#000") => ({
  alignItems: "center",
  display: "flex",
  backgroundColor: "",
  ":before": {
    backgroundColor: `#${color}`,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 20,
    width: 20,
    border: "1px dashed #29292999",
  },
});
export const reactSelectColorStyle = {
  control: (base, state) => ({
    ...base,
    border: "1px solid #838383",
    backgroundColor: "transparent",
    color: "#1E1E1E",
    borderRadius: "10px",
    height: "40px",
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
      border: "none",
      backgroundColor: "transparent",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#1E1E1E",
    fontSize: "14px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#000",
  }),
  container: (provided) => ({ ...provided, borderRadius: 5 }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#1B6939",
  }),
};
