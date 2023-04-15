import Buyable from "./domain/buyable";
import Movie from "./domain/movie";
import Cart from "./service/cart";
import Elbook from "./domain/elbook";
import Smartphone from "./domain/smartphones";

const cart = new Cart();
const avengers = new Movie(
  111,
  "Avengers Assemble!",
  1000,
  2012,
  "USA",
  ["fantastic", "action", "fantasy", "adventures", "..."],
  "137 мин. / 02:17"
);
cart.add(avengers, 1);

console.log(avengers.constructor.name);
