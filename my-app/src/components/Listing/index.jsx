import Card from "../Card";
import ExtractData from "../FetchApi";
import { savedData } from "../../constants";

// ExtractData();
let products = savedData.data.product.filter(
  (product) => product.category.id == 1
);

function ShopListing({ shopName, products }) {
  console.log(products);
  return (
    <div className="w-3/12 flex-col text-gray-700 dark:text-gray-200">
      <div className="text-center m-5 font-bold">{shopName}</div>
      <div className="listing flex flex-wrap items-between gap-3 ">
        {products.map((product, index) => (
          <Card key={index} props={product} />
        ))}
      </div>
    </div>
  );
}
export default function Listing() {
  return (
    <div className="flex justify-center flex-wrap gap-8">
      <ShopListing shopName={"Sulpak"} products={products.slice(0, 10)} />
      <ShopListing shopName={"Magnum"} products={products.slice(10, 15)} />
      <ShopListing shopName={"Arbuz"} products={products.slice(17, 30)} />
    </div>
  );
}
