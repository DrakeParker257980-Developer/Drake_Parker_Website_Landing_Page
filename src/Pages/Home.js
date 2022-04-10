import MotionHoc from "./MotionHoc";

let h1style = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginLeft: "80px",
};
let h2style = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "justify",
  maxWidth: "60vw",
  marginLeft: "80px",
};

const HomeComponent = () => {
  return (
    <>
      <h1 style={h1style}>Drake Parker</h1>
      <br />
      <h2 style={h2style}>Hi, My Name Is Drake Parker</h2>
    </>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;
