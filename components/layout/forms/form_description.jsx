const FormDescription = (props) => {
  const { title ,description} = props;
  return (
    <div className="rounded  p-0 m-0">
      <h4 className=" rounded  p-0  m-0 mb-4">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default FormDescription;
