import { useState } from "react";
import { useSelector } from "react-redux";
import "./filters.css";

const filtercategories = [
  "Product Type",
  "Brand",
  "Price",
  "Color",
  "Material",
  "Offer",
];

const Filters = () => {
  const [showFilters, setShowFilters] = useState(false);

  const allCategories = useSelector((state) => state.product.categories);

  return (
    <div className="filters mt-4">
      <ul className="filter-list">
        {filtercategories.map((category, index) => (
          <li key={index}>
            <div className={`dropdown ${showFilters ? "" : "d-none"}`}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {category}
              </button>

              {category === "Product Type" ? (
                <ul className="dropdown-menu">
                  {allCategories.map((category, catIndex) => (
                    <li key={catIndex}>
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
              ) : (
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
              )}
            </div>
          </li>
        ))}
        <li>
          <div className="all-filters">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setShowFilters(!showFilters)}
            >
              <span>All Filters</span>
              <span className="ms-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="#000000"
                >
                  <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
                </svg>
              </span>
            </button>
          </div>
        </li>
      </ul>
      <div className="sort">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort By
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
  );
};

export default Filters;
