import "./LoadMoreProducts.css";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";

const LoadMoreProducts = () => {
  // States - products, loading, errorMessage

  const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);

  // https://dummyjson.com/products?limit=10&skip=0

  const fetchProducts = async () => {
    // 1 - 20 * 0
    // 2 - 20 * 1 = 20

    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${20 * (page - 1)}`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts([...products, ...result.products]);
      }
    } catch (error) {
      console.log(error.errorMessage);
    }
  };

  useEffect( () => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // This function is to handle the click of the load more button
  const loadMore = () => {
    // TODO: I should use Debaunce here.
    if (page < 6) {
      setPage(page + 1);
    }
  };

  return (
    <div className="product-list-container">
      {/* TODO : Implement product list here. */}
      {products && products.length > 0 && <ProductList products={products} />}
      <button onClick={loadMore} className="load-more-button" disabled={page > 4 }>
        Load More Products
      </button>
      {page > 4 && <p>We have reached the limit of 100 products.</p>}
    </div>
  );
};

export default LoadMoreProducts;
