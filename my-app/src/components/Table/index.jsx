import RowWeb from "../Card";
import { products } from "../../constants";

export default function Table(props) {
  return (
    <div className="m-7 md:m-22">
      {products.map((product, index) => (
        <RowWeb key={index} props={product} />
      ))}
    </div>
  );
}
