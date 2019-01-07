import DateFormatter from "./DateFormatter";
import PriceFormatter from "./PriceFormatter";

const ProductReformer = product => ({
  ...product,
  price: PriceFormatter(product.price),
  date: DateFormatter(product.date)
});

export default ProductReformer;
