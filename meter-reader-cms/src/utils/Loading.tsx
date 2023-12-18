export default function Loading(props: loadingProps) {
  return (
    <img
      alt="loading"
      src="../../loader.gif"
      style={{
        position: "absolute",
        left: props.left,
        bottom: props.bottom,
        width: "80px",
        height: "80px",
        zIndex: 2,
      }}
    />
  );
}

interface loadingProps {
  left: string;
  bottom: string;
}

Loading.defaultProps = {
  left: "65%",
  bottom: "30%",
};
