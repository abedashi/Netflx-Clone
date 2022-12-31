import { useState } from "react";
import { useNavigate } from "react-router-dom";
import netflix from "../assets/netflix.png";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();

  const [scrollY, setScrollY] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <header>
      <div
        className={`row header-transition fixed-top d-flex aligin-items-center justify-content-between py-2 pt-3`}
        style={{
          backgroundColor: `${
            scrollY > 108 ? "rgb(17, 17, 17)" : "transparent"
          }`,
        }}
      >
        <div className="col-6">
          <img
            onClick={() => navigate("/")}
            src={netflix}
            alt="Netflix Logo"
            width="80px"
            className="ms-4"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center gap-4">
            <div>
              <Search />
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
                width="35px"
                height="35px"
                className="me-4"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
