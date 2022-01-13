import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { getProducts } from "../utils/api/fakestore";
import Product from "../components/Product";
import {
  Container,
  LoaderContainer,
  ProductsSection,
  Filters,
  Section,
  Select,
} from "../styles/Home.styled";

function Home() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all categories");

  useEffect(() => {
    getProducts(30)
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get("title"));
  }, [location]);

  useEffect(() => {
    setFilteredProducts(products);

    if (query !== "" && query !== null) {
      category == "all categories"
        ? setFilteredProducts((prev) =>
            [...prev].filter((e) =>
              e.title.toLowerCase().includes(query.toLowerCase())
            )
          )
        : setFilteredProducts((prev) =>
            [...prev]
              .filter((e) =>
                e.title.toLowerCase().includes(query.toLowerCase())
              )
              .filter((item) => item.category === category)
          );
    } else {
      category == "all categories"
        ? setFilteredProducts(products)
        : setFilteredProducts((prev) =>
            [...prev].filter((item) => item.category === category)
          );
    }

  }, [query, category]);

  function selectSort(e) {
    switch (e.target.value) {
      case "titleAsc":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "titleDesc":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.title.localeCompare(a.title))
        );
        break;
      case "priceAsc":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
        break;
      case "priceDesc":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
        break;
    }
  }

  return (
    <Container>     
      <Filters>
        <Section>
          <p>categories</p>
          <Select onChange={(e) => setCategory(e.target.value)}>
            {["all categories", ...new Set(products.map((e) => e.category))]
              .sort()
              .map((cat) => (
                <option value={cat}>{cat}</option>
              ))}
          </Select>
        </Section>
        <Section>
          <p>sort</p>
          <Select onChange={selectSort}>
            <option value="priceAsc">price (to higher)</option>
            <option value="priceDesc">price (to lower)</option>
            <option value="titleAsc">A-Z</option>
            <option value="titleDesc">Z-A</option>
          </Select>
        </Section>
      </Filters>
      {isLoading ? (
        <LoaderContainer>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
          <p>fetching products...</p>
        </LoaderContainer>
      ) : (
        <ProductsSection>
          {filteredProducts?.map((product) => {
            return (
              <Link
                to={`/shop/product/${product.id}`}
                state={{ product: product }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Product item={product} key={product.id} />
              </Link>
            );
          })}
          {filteredProducts.length === 0 && <div>we haven't found anything...</div>}
        </ProductsSection>
      )}
    </Container>
  );
}

export default Home;
