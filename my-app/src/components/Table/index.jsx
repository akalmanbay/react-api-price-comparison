import test_img from "../../assets/image.png";
import HeartButton from "../../assets/HeartButton";

let products = [
  {
    img: test_img,
    name: "Молоко шадринское 250мл",
    price_magnum: 750,
    price_small: 810,
  },
  {
    img: test_img,
    name: "Молоко шадринское 250мл",
    price_magnum: 750,
    price_small: 810,
  },
  {
    img: test_img,
    name: "Молоко шадринское 250мл",
    price_magnum: 750,
    price_small: 810,
  },
];

function Row(props) {
  let { img, name, price_magnum, price_small } = props.props;

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
      <td className="text-center border border-gray-300 px-4 py-2">
        <HeartButton />
      </td>
      <td className="border  border-gray-300 px-4 py-2">
        <img
          className="mx-auto h-20 w-20 rounded-xl object-contain"
          src={img}></img>
      </td>
      <td className="border border-gray-300 px-4 py-2">{name}</td>
      <td className="border border-gray-300 px-4 py-2">{price_magnum} тг</td>
      <td className="border border-gray-300 px-4 py-2">{price_small} тг</td>
      <td className="border border-gray-300 px-4 py-2">Magnum</td>
    </tr>
  );
}

export default function Table(props) {
  return (
    <div className="w-full">
      <table className="min-w-full w-full table-auto border-collapse border border-gray-300">
        <thead className="">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left"></th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Товар
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Наименование
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Magnum
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Small
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Где выгоднее
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <Row key={index} props={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
