import MotionHoc from "./MotionHoc";

let LinkStyles = {
  fontSize: "2rem",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
};

const CalenderComponent = () => {
  return (
    <>
      <a
        style={LinkStyles}
        href="https://www.webdevdrake.cf/DrakeForum/Contact_Me"
      >
        <h1>Contact Me</h1>
      </a>
    </>
  );
};

const Calender = MotionHoc(CalenderComponent);

export default Calender;
