import Buyable from "./buyable";

export default class Elbook implements Buyable {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly price: number,
    readonly author: string
  ) {}
}
