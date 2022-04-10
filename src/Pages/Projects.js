import MotionHoc from "./MotionHoc";

let LinkStyles = {
  fontSize: "2rem",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
};

const ProjectsComponent = () => {
  return (
    <>
      <h1>My Projects</h1>
      <a
        style={LinkStyles}
        href="https://www.webdevdrake.cf/Intro%20Of%20Drake%20Parker/My_Projects"
      >
        Click To View
      </a>
    </>
  );
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
