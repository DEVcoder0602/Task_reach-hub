import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  getCategories,
  filterProducts,
} from "../../slices/productSlices";

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.products);
  const filteredProducts = useSelector(
    (state) => state.product.filteredProducts
  );
  // const allCategories = useSelector((state) => state.product.categories);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    dispatch(filterProducts(allProducts));
  }, []);

  return (
    <div className="products d-flex flex-column justify-content-center align-items-center">
      <h2>All Products</h2>
      <div
        className="d-flex justify-content-center flex-wrap"
        style={{ gap: "20px" }}
      >
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {console.log("Filtered Products : ", filteredProducts)}
      {/* {console.log("All Products : ", allProducts)} */}
    </div>
  );
};

export default Products;
