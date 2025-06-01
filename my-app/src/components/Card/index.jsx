import test_img from "../../assets/image.png";
import HeartButton from "../../assets/HeartButton";
export default function Card(props) {
  let { name, final_price } = props.props;
  let { address, img } = {
    address: "Алматы, Кордай 15",
    img: test_img,
  };

  // return (
  //   <div className="px-2 py-1 my-1 mx-1 flex-cols justify-center w-40 h-48 max-w-sm text-gray-100 dark:text-gray-600 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-white dark:border-gray-400">
  //     <div className="product_image w-full h-2/5">
  //       <img
  //         class="w-full h-full rounded-xl object-contain"
  //         src={img}
  //         alt="product image"
  //       />
  //     </div>
  //     <div class="product_info h-3/5 flex-col">
  //       <h5 class="product_name text-xs font-semibold tracking-tight">
  //         {name}
  //       </h5>

  //       <div class="price_line flex items-center justify-between">
  //         <span class="price text-sm font-bold">{final_price}тг</span>
  //         <div className="add_to_card my-2 flex justify-center">
  //           <HeartButton />
  //         </div>
  //       </div>

  //       <div class="address mt-2 flex justify-end text-xs  text-center ">
  //         <p>{address} </p>
  //       </div>
  //     </div>

  //   </div>
  // );

  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left">Товар</th>
          <th className="border border-gray-300 px-4 py-2 text-left">
            Наименование
          </th>
          <th className="border border-gray-300 px-4 py-2 text-left">Magnum</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Small</th>
          <th className="border border-gray-300 px-4 py-2 text-left">
            Где выгоднее
          </th>
          <th className="border border-gray-300 px-4 py-2 text-left">
            Добавить в избранное
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50">
          <td className="border border-gray-300 px-4 py-2">Alice</td>
          <td className="border border-gray-300 px-4 py-2">25</td>
          <td className="border border-gray-300 px-4 py-2">
            alice@example.com
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="border border-gray-300 px-4 py-2">Bob</td>
          <td className="border border-gray-300 px-4 py-2">30</td>
          <td className="border border-gray-300 px-4 py-2">bob@example.com</td>
        </tr>
      </tbody>
    </table>
  );
}
