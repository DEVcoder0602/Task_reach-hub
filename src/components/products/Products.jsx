import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../slices/productSlices";

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="products d-flex flex-column justify-content-center align-items-center">
      <h2>All Products</h2>
      <div
        className="d-flex justify-content-center flex-wrap"
        style={{ gap: "20px" }}
      >
        {allProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
