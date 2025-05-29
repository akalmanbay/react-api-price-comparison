import test_img from "../Listing/assets/image.png";
export default function Card(props) {
  let { name, final_price } = props.props;
  let { volume, address, img } = {
    volume: "750ml",
    address: "Алматы, Кордай 15",
    img: test_img,
  };
  console.log(name, final_price);

  return (
    <div className="px-3 py-2 my-1 mx-1 flex-cols justify-center w-40 max-w-sm text-gray-100 dark:text-gray-600 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-white dark:border-gray-400">
      <div className="p-4">
        <img class="product_image rounded-xl" src={img} alt="product image" />
      </div>
      <div class="">
        <div>
          <h5 class="product_name mb-2 text-xs font-semibold tracking-tight">
            {name}
          </h5>
        </div>

        <div class="price_volume_line my-2 flex items-center justify-around">
          <span class="price text-base font-bold">{final_price} тг</span>
          <div class="volume px-1 py-0.5 bg-blue-100 text-blue-800 text-xs font-semibold rounded-sm dark:bg-blue-200 dark:text-blue-800">
            {volume}
          </div>
        </div>
        <div className="add_to_card my-2 flex justify-center">
          <a
            href="#"
            class="mx-2 px-2 py-1 text-white text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Добавить в корзину
          </a>
        </div>

        <div class="address mt-2 flex justify-end text-xs  text-center ">
          <p>{address} </p>
        </div>
      </div>
    </div>
  );
}
