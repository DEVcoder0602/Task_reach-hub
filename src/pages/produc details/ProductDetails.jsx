import { Link } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";

const ProductDetails = () => {
  return (
    <>
      <Topbar />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Product</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
    </>
  );
};

export default ProductDetails;
