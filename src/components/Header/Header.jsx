import Topbar from "../topbar/Topbar";
import bannerImg from "../../assets/headerImage.png";

const Header = () => {
  return (
    <div>
      <Topbar />
      <div className="banner" style={{ textAlign: "center" }}>
        <a href="/">
          <img src={bannerImg} alt="" style={{ width: "80%" }} />
        </a>
      </div>
    </div>
  );
};

export default Header;
