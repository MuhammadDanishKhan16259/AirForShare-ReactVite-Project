import LOGO from "../../assets/logo.svg";
import "./css/style.scss";
import { MdOutlineTextFields } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import TEXT_GREY from "../../assets/text-grey.svg";
import TEXT_COLOR from "../../assets/text-color.svg";
import FILE_GREY from "../../assets/files-grey.svg";
import FILE_COLOR from "../../assets/files-color.svg";
import { useState } from "react";
function HomePage() {
  const [type, setType] = useState("text");
  return (
    <div className="container">
      <div className="header-bar">
        <div className="logo">
          <img src={LOGO} alt="" />
        </div>
        <div className="menu-bar">
          <ul>
            <li>How it works</li>
            <li>Download</li>
            <li>Upgrade </li>
            <li>Feedback</li>
            <li className="menu-btn">Login / Register</li>
          </ul>
        </div>
      </div>
      <div className="main-card">
        <div className="card-sidebar">
          <div onClick={()=>setType("text")}  className=  {type === "text" && "active"}>
            <img src={TEXT_COLOR} alt="" />
          </div>
          <div  onClick={()=>setType("files")} className=  {type === "files" && "active"}>
            <img src={FILE_GREY} alt="" />
          </div>
        </div>
        <div className="card-container">
          {type === "text" ? (
            <div className="text-section">
              <h1>Text</h1>
            </div>
          ) : (
            <div className="files-section">
              <h1>Files</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
