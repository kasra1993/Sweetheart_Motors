const Location = (props) => {
  const { direction, dealerData } = props;
  return (
    <div
      className="p-0 m-0 d-flex justify-content-center row w-100"
      style={{
        zIndex: 53,
      }}
    >
      <iframe
        allow="geolocation"
        src={dealerData?.map_url}
        frameborder="0"
        width="100%"
        height={direction ? "500" : "233"}
        className="border-0 w-100 p-0 m-0"
        aria-hidden="false"
        tabindex="0"
        id="iframe"
      />
    </div>
  );
};

export default Location;
