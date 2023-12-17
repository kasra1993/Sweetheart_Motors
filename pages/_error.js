function Error({ statusCode, err }) {
  return (
    <div className="p-0 m-0 d-flex w-100 row align-items-center justify-content-center">
      <div className="p-0 m-0 col-12 text-center">
        <img
          src="/images/404/404.png"
          alt="404"
          style={{
            width: "50%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  console.log("err", err);
  console.log("res", res);
  const statusCode = res ? res?.statusCode : err ? err?.statusCode : 404;
  return { statusCode, err };
};

export default Error;
