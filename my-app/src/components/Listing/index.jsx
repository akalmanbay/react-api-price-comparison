import test_image from "./assets/image.png";
import Card from "../Card";

let product = {
  img: test_image,
  name: " Сгущенное молоко Домик в Деревне",
  address: "Алматы, Кордай 22",
  price: 450,
  volume: "750мл",
};

function ShopListing({ shopName }) {
  return (
    <div className="flex-col text-gray-700 dark:text-gray-200">
      <div className="text-center m-5 font-bold">{shopName}</div>
      <div className="listing flex flex-col items-between md:flex-row md:justify-between  gap-4 ">
        <Card props={product} />
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
}
export default function Listing() {
  return (
    <div className="flex justify-center flex-wrap gap-8">
      <ShopListing shopName={"Sulpak"} />
      <ShopListing shopName={"Magnum"} />
      <ShopListing shopName={"Arbuz"} />
    </div>
  );
}
