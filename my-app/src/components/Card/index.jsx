import HeartButton from "../../assets/HeartButton";
import { tenge } from "../../constants";

export default function RowWeb(props) {
  const { img, name, price_magnum, price_small } = props.props;

  return (
    <table className=" w-full table-fixed md:table-auto border-separate border-spacing-y-2 relative p-0">
      <div className="w-full flex flex-col md:flex-row items-center justify-between text-center border dark:border-gray-500 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 mb-0 pb-1 md:p-0 md:mb-2">
        <div className="flex items-center w-full md:w-1/2 mb-0 p-2 ">
          <img
            className="w-16 md:w-24 md:p-1 rounded-xl object-contain"
            src={img}
            alt={name}
          />
          <div className="ml-5 text-left">{name}</div>
        </div>
        <table className=" w-full md:w-1/2 text-center">
          <thead>
            <th className="px-1 pb-2 ">Magnum</th>
            <th className="px-1 pb-2  ">Small</th>
            <th className="px-1 pb-2  ">Arbuz</th>
            <th className="px-1 pb-2  ">Airba</th>
            <th className="px-1 pb-2 ">Выгоднo в:</th>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="px-1 pb-2">
                <span className="inline">
                  {price_magnum}
                  <span className="ml-1 inline-block align-middle">
                    {tenge}
                  </span>
                </span>
              </td>
              <td className="px-1 pb-2">
                <span className="inline">
                  {price_small}
                  <span className="ml-1 inline-block align-middle">
                    {tenge}
                  </span>
                </span>
              </td>
              <td className="px-1 pb-2">
                <span className="inline">
                  {price_small}
                  <span className="ml-1 inline-block align-middle">
                    {tenge}
                  </span>
                </span>
              </td>
              <td className="px-1 pb-2">
                <span className="inline">
                  {price_small}
                  <span className="ml-1 inline-block align-middle">
                    {tenge}
                  </span>
                </span>
              </td>
              <td className="px-1 pb-2">Magnum</td>
            </tr>
          </tbody>
        </table>
        <div className="hidden md:block px-10">
          <HeartButton />
        </div>
      </div>
      <div className="block md:hidden">
        <HeartButton />
      </div>
    </table>
  );
}
