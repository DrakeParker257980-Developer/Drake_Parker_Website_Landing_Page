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

const AboutComponent = () => {
  return (
    <>
      <h1 style={h1style}>About Me</h1>
      <br />
      <h2 style={h2style}>
        I am a Full Stack Web Developer. I have worked on many projects. I have
        made a Python Package which is freely available on [pypi.org] and
        Github. I have made some extremely beautiful web contents that you can
        view in "My Projects" link present in the Navigation Bar.
      </h2>
      <a href="https://github.com/DrakeParker257980-Developer">
        <h2 style={h2style}>Know More</h2>
      </a>
    </>
  );
};

const About = MotionHoc(AboutComponent);

export default About;
