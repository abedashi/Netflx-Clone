import { useState } from "react";

const Header = () => {
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
        <div className="col-6 ">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix Logo"
            width="80px"
            className="ms-4"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
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
    </header>
  );
};

export default Header;
