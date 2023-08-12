import "./topbar.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts } from "../../slices/productSlices";

const Topbar = () => {
  const location = useLocation();
  const allCategories = useSelector((state) => state.product.categories);
  const allProducts = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredData = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm);
    });
    dispatch(filterProducts(filteredData));
  };

  return (
    <div>
      <div
        className={`${location.pathname === "/" ? "home-header" : "d-none"}`}
      >
        <div className="contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 512 512"
            fill="#fff"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          + 0012345678
        </div>
        <div className="offer">
          <span className="mx-4">Get 50% off on selected items</span>
          <span className="bar">|</span>
          <span className="mx-4 shop-now">Shop Now</span>
        </div>
        <div className="location-lang">
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Eng
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Location
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="topbar">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <Link to="/">
                <img src={logo} alt="logo" />
                <span>Shopcart</span>
              </Link>
            </div>
            <div className="navbar-menu">
              <ul className="navbar-links">
                <li className="navbar-link">
                  <div className="dropdown">
                    <button
                      className="btn btn-link dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </button>
                    <ul className="dropdown-menu">
                      {allCategories?.map((category, index) => (
                        <li key={index}>
                          <a
                            className="dropdown-item"
                            href="#"
                            style={{ textTransform: "capitalize" }}
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="navbar-link">
                  <a href="#">Deals</a>
                </li>
                <li className="navbar-link">
                  <a href="#">What&apos;s New</a>
                </li>
                <li className="navbar-link">
                  <a href="#">Delivery</a>
                </li>
              </ul>
            </div>
            <div className="navbar-search">
              <input
                type="text"
                placeholder="Search Product Name"
                onChange={handleSearch}
              />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            </div>
            <div className="account-cart">
              <div className="account">
                <span className="mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    fill="#00000"
                  >
                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                  </svg>
                </span>
                Account
              </div>
              <div className="cart">
                <span className="mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="#00000"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </span>
                Cart
              </div>
            </div>
            <div className="navbar-toggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
