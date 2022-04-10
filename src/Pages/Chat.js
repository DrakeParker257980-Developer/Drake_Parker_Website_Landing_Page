import MotionHoc from "./MotionHoc";

let LinkStyles = {
  fontSize: "2rem",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
};

const DocumentsComponent = () => {
  return (
    <>
      <a style={LinkStyles} href="https://www.webdevdrake.cf/Drake_Chat">
        <h1>Click To Open Web Chat</h1>
      </a>
    </>
  );
};

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
