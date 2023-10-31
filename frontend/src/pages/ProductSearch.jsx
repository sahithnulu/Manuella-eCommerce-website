import { useState, useEffect } from "react";
import axios from "axios";
import { Newsletter } from "../component/Newsletter";
import { Contact } from "../component/Contact";
import { Footer } from "../component/Footer";
import Item from "../component/Item";

const ProductSearch = ({ addToCart, Category }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/getProducts')
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("lowest");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All");

  // Filter the products based on the selected type and material
  const filteredProducts = products.filter((product) => {
    const isTypeMatch =
      selectedType === "All" || product.Type === selectedType;
    const isMaterialMatch =
      selectedMaterial === "All" || product.Material === selectedMaterial;
    const isSearchMatch =
      search === "" || product.Name.toLowerCase().includes(search.toLowerCase());
    return isTypeMatch && isMaterialMatch && isSearchMatch;
  });

  // Sort the filtered products based on the selected sorting order
  const sortedProducts = [...filteredProducts];
  if (sortOrder === "lowest") {
    sortedProducts.sort((a, b) => a.Price - b.Price);
  } else if (sortOrder === "highest") {
    sortedProducts.sort((a, b) => b.Price - a.Price);
  } else if (sortOrder === "namea-z") {
    sortedProducts.sort((a, b) => a.Name.localeCompare(b.Name));
  } else if (sortOrder === "namez-a") {
    sortedProducts.sort((a, b) => b.Name.localeCompare(a.Name));
  }

  return (
    <div className="w-screen h-screen pt-[2%] bg-black d-flex justify-center content-center text-white font-Julius overflow-x-hidden ">
      <div className="w-full h-[80%] mt-[10%] bg-black font-Julius border-b-2 border-white text-white flex flex-col">
        <div className="w-[100%] h-[40%] ">
          <div className="w-full h-[50%] flex flex-row">
            <div className="w-full h-[10%] pt-2 mt-[3%] ml-[3%]">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="bg-black text-white w-[80%] border-b-2 border-white"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div>
              <form action="#" className="">
                <label htmlFor="sort"></label>
                <select
                  name="sort"
                  id="sort"
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-white text-black mt-[20%] -ml-[55%] p-[2%] rounded-lg"
                >
                  <option value="lowest">Price (Lowest to Highest)</option>
                  <option value="highest">Price (Highest to Lowest)</option>
                  <option value="namea-z">Name (a-z)</option>
                  <option value="namez-a">Name (z-a)</option>
                </select>
              </form>
            </div>
          </div>
          <div className="w-full h-[50%] flex flex-row justify-between p-[2%]">
            <button
              className={`${
                selectedType === "All" ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() =>
                setSelectedType(selectedType === "All" ? "All" : "All")
              }
            >
              All Types
            </button>
            <button
              className={`${
                selectedType === "Ring" ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() =>
                setSelectedType(selectedType === "Ring" ? "All" : "Ring")
              }
            >
              Ring
            </button>
            <button
              className={`${
                selectedType === "Earring" ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() =>
                setSelectedType(selectedType === "Earring" ? "All" : "Earring")
              }
            >
              Earring
            </button>
            <button
              className={`${
                selectedType === "Necklace" ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() =>
                setSelectedType(selectedType === "Necklace" ? "All" : "Necklace")
              }
            >
              Necklace
            </button>
            <button
              className={`${
                selectedType === "Bracelet" ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() =>
                setSelectedType(selectedType === "Bracelet" ? "All" : "Bracelet")
              }
            >
              Bracelet
            </button>
            <h1>|</h1>
            <button
              className={`${
                selectedMaterial === "All" ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() =>
                setSelectedMaterial(
                  selectedMaterial === "All" ? "All" : "All"
                )
              }
            >
              All Materials
            </button>
            <button
              className={`${
                selectedMaterial === "Silver" ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() =>
                setSelectedMaterial(
                  selectedMaterial === "Silver" ? "All" : "Silver"
                )
              }
            >
              Silver
            </button>
            <button
              className={`${
                selectedMaterial === "Diamond" ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() =>
                setSelectedMaterial(
                  selectedMaterial === "Diamond" ? "All" : "Diamond"
                )
              }
            >
              Diamond
            </button>
            <button
              className={`${
                selectedMaterial === "Pearl" ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() =>
                setSelectedMaterial(
                  selectedMaterial === "Pearl" ? "All" : "Pearl"
                )
              }
            >
              Pearl
            </button>
            <button
              className={`${
                selectedMaterial === "Beaded" ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() =>
                setSelectedMaterial(
                  selectedMaterial === "Beaded" ? "All" : "Beaded"
                )
              }
            >
              Beaded
            </button>
          </div>
        </div>
        <div className="w-[100%] h-[100%] overflow-auto grid grid-cols-4 justify-between ">
          {sortedProducts.map((product, i) => {
            return (
              <Item
                key={i}
                id={product._id}
                Name={product.Name}
                Price={product.Price}
                handleClick={() => addToCart(product)}
              />
            );
          })}
        </div>
      </div>
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default ProductSearch;
